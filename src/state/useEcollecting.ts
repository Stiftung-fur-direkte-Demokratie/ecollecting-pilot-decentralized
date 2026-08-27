import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { DEFAULT_GEMEINDE, GEMEINDEN, STREETS, type Gemeinde } from '../data/adressen'
import { useBegehren } from '../data/useBegehren'
import { formatDate, formatDateTime, makeQuittungId } from './format'
import type { CertStatus, Dialog, PrototypConfig, Screen, SendStage, SupportMeta, Tab } from './types'
import { DEFAULT_CONFIG } from './types'

interface EcollectingState {
  screen: Screen
  /** Besteht eine Verbindung zu einer politischen Gemeinde? */
  kanalAktiv: boolean
  /** E-ID über die swiyu-Wallet vorgewiesen? */
  eid: boolean
  sheetOpen: boolean
  strasse: string
  plz: string
  ort: string
  focusStrasse: boolean
  resolving: boolean
  gemeinde: Gemeinde | null
  tab: Tab
  currentId: string | null
  supported: Record<string, SupportMeta>
  cert: Record<string, CertStatus>
  dialog: Dialog
  faceText: string
  kanalSeit: string
  gelesen: boolean
  slide: number
  sliding: boolean
  sendStage: SendStage
}

const INITIAL: EcollectingState = {
  screen: 'welcome',
  kanalAktiv: false,
  eid: false,
  sheetOpen: false,
  strasse: '',
  plz: '',
  ort: '',
  focusStrasse: false,
  resolving: false,
  gemeinde: null,
  tab: 'alle',
  currentId: null,
  supported: {},
  cert: {},
  dialog: null,
  faceText: 'Face ID …',
  kanalSeit: '',
  gelesen: false,
  slide: 0,
  sliding: false,
  sendStage: 0,
}

/** Ab diesem Anteil gilt der Slide-to-confirm als abgeschlossen. */
const SLIDE_THRESHOLD = 0.92
/** Breite des Slider-Knopfs in px – bestimmt den nutzbaren Zugweg. */
const KNOB_WIDTH = 64

export function useEcollecting(config: PrototypConfig = DEFAULT_CONFIG) {
  const [state, setState] = useState<EcollectingState>(INITIAL)

  // Volksbegehren: amtlich aus LINDAS, mit Rückfall auf die Beispieldaten.
  const begehren = useBegehren()

  // Alle laufenden Timer, damit sie beim Unmount und beim Zurücksetzen
  // zuverlässig abgeräumt werden.
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const trackRect = useRef<DOMRect | null>(null)

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }, [])

  const later = useCallback((fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms))
  }, [])

  useEffect(() => clearTimers, [clearTimers])

  // Startscreen aus der Prototyp-Konfiguration. Screens hinter dem Onboarding
  // setzen eine bereits eingerichtete Verbindung voraus.
  useEffect(() => {
    const s = config.startScreen
    if (s === 'welcome') return
    if (s === 'intro' || s === 'onb1') {
      setState((prev) => ({ ...prev, screen: s }))
      return
    }
    setState((prev) => ({
      ...prev,
      screen: s,
      kanalAktiv: true,
      eid: true,
      gemeinde: GEMEINDEN['3074'],
      strasse: 'Thunstrasse 2',
      plz: '3074',
      ort: 'Muri bei Bern',
      kanalSeit: '12. Januar 2027',
    }))
    // Nur beim ersten Rendern – der Startscreen ist eine Konfiguration, kein State.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * Übernimmt eine Änderung der Selbstdeklaration. Sobald Strasse, PLZ und Ort
   * plausibel sind, beginnt die Auflösung der politischen Gemeinde; bis sie
   * steht, bleibt der Weiter-Button im Onboarding gesperrt.
   */
  const tryResolve = useCallback((patch: Partial<EcollectingState>) => {
    setState((prev) => {
      const next = { ...prev, ...patch }
      const vollstaendig =
        next.strasse.trim().length > 3 &&
        /^\d{4}$/.test(next.plz.trim()) &&
        next.ort.trim().length > 1

      return { ...next, gemeinde: null, resolving: vollstaendig }
    })
  }, [])

  // Auflösung im amtlichen Verzeichnis – entprellt, damit Tippen die Abfrage
  // neu startet statt sie mehrfach auszulösen.
  useEffect(() => {
    if (!state.resolving) return
    const plz = state.plz.trim()
    const timer = setTimeout(() => {
      setState((prev) => ({
        ...prev,
        resolving: false,
        gemeinde: GEMEINDEN[plz] ?? DEFAULT_GEMEINDE,
      }))
    }, 900)
    return () => clearTimeout(timer)
  }, [state.resolving, state.strasse, state.plz, state.ort])

  /** Willensbekundung ist übermittelt: Quittung zeigen, Empfang später bestätigen. */
  const support = useCallback(
    (id: string) => {
      const now = new Date()
      setState((prev) => ({
        ...prev,
        supported: { ...prev.supported, [id]: { at: formatDateTime(now), quittungId: makeQuittungId(id) } },
        cert: { ...prev.cert, [id]: 'ausstehend' },
        dialog: null,
        screen: 'quittung',
      }))
      later(
        () => setState((prev) => ({ ...prev, cert: { ...prev.cert, [id]: 'empfangen' } })),
        Math.max(1, config.certDelaySeconds) * 1000,
      )
    },
    [config.certDelaySeconds, later],
  )

  /** Animierte Übermittlung: signieren → falten → verpacken → zustellen. */
  const beginSend = useCallback(
    (id: string) => {
      setState((prev) => ({ ...prev, dialog: null, screen: 'senden', sendStage: 0 }))
      later(() => setState((prev) => ({ ...prev, sendStage: 1 })), 1300)
      later(() => setState((prev) => ({ ...prev, sendStage: 2 })), 2500)
      later(() => setState((prev) => ({ ...prev, sendStage: 3 })), 3600)
      later(() => support(id), 5000)
    },
    [later, support],
  )

  const beginFace = useCallback(() => {
    const cur = begehren.find(state.currentId)
    setState((prev) => ({ ...prev, dialog: 'face', faceText: 'Face ID …', slide: 0, gelesen: false }))
    later(() => setState((prev) => ({ ...prev, faceText: 'Signiert – wird übermittelt' })), 1100)
    later(() => beginSend(cur.id), 1900)
  }, [beginSend, begehren, later, state.currentId])

  const slideTo = useCallback((clientX: number) => {
    const rect = trackRect.current
    if (!rect) return
    const usable = rect.width - (KNOB_WIDTH + 8)
    const value = Math.max(0, Math.min(1, (clientX - rect.left - KNOB_WIDTH / 2 - 4) / usable))
    setState((prev) => ({ ...prev, slide: value }))
  }, [])

  const actions = useMemo(
    () => ({
      // Navigation
      goIntro: () => setState((p) => ({ ...p, screen: 'intro' })),
      goHome: () => setState((p) => ({ ...p, screen: 'home', dialog: null })),
      goListe: () => setState((p) => ({ ...p, screen: 'liste', dialog: null })),
      goProfil: () => setState((p) => ({ ...p, screen: 'profil', dialog: null })),
      goOnb1: () => setState((p) => ({ ...p, screen: 'onb1', dialog: null })),
      goOnb2: () => setState((p) => ({ ...p, screen: 'onb2' })),
      goOnb3: () => setState((p) => ({ ...p, screen: 'onb3' })),
      openDetail: (id: string) => setState((p) => ({ ...p, screen: 'detail', currentId: id })),
      openQuittung: () => setState((p) => ({ ...p, screen: 'quittung' })),
      setTab: (tab: Tab) => setState((p) => ({ ...p, tab })),

      // Onboarding
      openSheet: () => setState((p) => ({ ...p, sheetOpen: true })),
      closeSheet: () => setState((p) => ({ ...p, sheetOpen: false })),
      confirmEid: () => setState((p) => ({ ...p, sheetOpen: false, eid: true })),
      activate: () =>
        setState((p) => ({
          ...p,
          screen: 'aktiv',
          kanalAktiv: true,
          kanalSeit: formatDate(new Date()),
        })),
      onbBack: () =>
        setState((p) => ({
          ...p,
          screen: p.screen === 'onb3' ? 'onb2' : p.screen === 'onb2' ? 'onb1' : 'intro',
        })),
      onbCancel: () => setState((p) => ({ ...p, screen: p.kanalAktiv ? 'home' : 'intro', dialog: null })),

      // Adressformular
      onStrasse: (value: string) => {
        setState((p) => ({ ...p, focusStrasse: true }))
        tryResolve({ strasse: value })
      },
      onStrasseFocus: () => setState((p) => ({ ...p, focusStrasse: true })),
      onPlz: (value: string) =>
        tryResolve({ plz: value.replace(/\D/g, '').slice(0, 4), focusStrasse: false }),
      onOrt: (value: string) => tryResolve({ ort: value, focusStrasse: false }),
      pickStrasse: (eintrag: { strasse: string; plz: string; ort: string }) => {
        setState((p) => ({ ...p, focusStrasse: false }))
        tryResolve({ strasse: eintrag.strasse, plz: eintrag.plz, ort: eintrag.ort, focusStrasse: false })
      },

      // Dialoge
      closeDialog: () => setState((p) => ({ ...p, dialog: null })),
      openWortlaut: () => setState((p) => ({ ...p, dialog: 'wortlaut' })),
      openReceipt: () => setState((p) => ({ ...p, dialog: 'receipt' })),
      openVerbindung: () => setState((p) => ({ ...p, dialog: 'verbindung' })),
      openStraf: () =>
        setState((p) => ({ ...p, dialog: p.kanalAktiv ? 'straf' : 'nokanal', gelesen: false, slide: 0 })),
      toggleGelesen: () => setState((p) => ({ ...p, gelesen: !p.gelesen, slide: 0 })),

      // Verbindung verwalten
      kanalAufheben: () =>
        setState((p) => ({
          ...p,
          screen: 'home',
          dialog: null,
          kanalAktiv: false,
          eid: false,
          gemeinde: null,
          strasse: '',
          plz: '',
          ort: '',
          kanalSeit: '',
        })),
      resetAll: () => {
        clearTimers()
        setState({ ...INITIAL })
      },
    }),
    [clearTimers, tryResolve],
  )

  /** Slide-to-confirm: Zeiger- und Tastaturbedienung. */
  const slider = useMemo(
    () => ({
      onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => {
        if (!state.gelesen) return
        trackRect.current = e.currentTarget.getBoundingClientRect()
        e.currentTarget.setPointerCapture(e.pointerId)
        setState((p) => ({ ...p, sliding: true }))
        slideTo(e.clientX)
      },
      onPointerMove: (e: React.PointerEvent<HTMLDivElement>) => {
        if (!state.sliding) return
        slideTo(e.clientX)
      },
      onPointerUp: () => {
        if (!state.sliding) return
        if (state.slide >= SLIDE_THRESHOLD) {
          setState((p) => ({ ...p, sliding: false, slide: 1 }))
          later(beginFace, 180)
        } else {
          setState((p) => ({ ...p, sliding: false, slide: 0 }))
        }
      },
      onKeyDown: (e: React.KeyboardEvent<HTMLSpanElement>) => {
        if (!state.gelesen) return
        if (e.key === 'ArrowRight') {
          e.preventDefault()
          const v = Math.min(1, state.slide + 0.2)
          setState((p) => ({ ...p, slide: v }))
          if (v >= 1) later(beginFace, 180)
        }
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          setState((p) => ({ ...p, slide: Math.max(0, p.slide - 0.2) }))
        }
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setState((p) => ({ ...p, slide: 1 }))
          later(beginFace, 180)
        }
      },
    }),
    [beginFace, later, slideTo, state.gelesen, state.slide, state.sliding],
  )

  // Abgeleitete Werte, die mehrere Screens gemeinsam brauchen.
  const gemeindeLabel = state.gemeinde ? state.gemeinde.name : `${config.gemeindeName} (BE)`
  const gemeindeName = state.gemeinde ? state.gemeinde.kurz : config.gemeindeName
  const bfs = state.gemeinde ? state.gemeinde.bfs : '356'
  const kanton = state.gemeinde ? state.gemeinde.kanton : 'Kanton Bern'

  const suggestions = useMemo(() => {
    const q = state.strasse.trim().toLowerCase()
    if (!state.focusStrasse || q.length < 2) return []
    return STREETS.filter((x) => x.strasse.toLowerCase().includes(q)).slice(0, 4)
  }, [state.focusStrasse, state.strasse])

  return {
    state,
    actions,
    slider,
    suggestions,
    begehren: begehren.liste,
    quelle: begehren.quelle,
    find: begehren.find,
    gemeindeLabel,
    gemeindeName,
    bfs,
    kanton,
    kanalSeit: state.kanalSeit || formatDate(new Date()),
  }
}

export type Ecollecting = ReturnType<typeof useEcollecting>
