export type Screen =
  | 'welcome'
  | 'intro'
  | 'onb1'
  | 'onb2'
  | 'onb3'
  | 'aktiv'
  | 'home'
  | 'liste'
  | 'detail'
  | 'senden'
  | 'quittung'
  | 'profil'

export type Dialog = 'straf' | 'face' | 'wortlaut' | 'receipt' | 'verbindung' | 'nokanal' | null

export type Tab = 'alle' | 'ini' | 'ref'

/**
 * Die Gemeinde bestätigt im Pilotbetrieb nur den Empfang der Anfrage zur
 * Bescheinigung – nicht die Bescheinigung selbst.
 */
export type CertStatus = 'ausstehend' | 'empfangen'

export interface SupportMeta {
  /** Zeitpunkt der Übermittlung, bereits formatiert. */
  at: string
  /** Quittungskennung des Pilotbetriebs. */
  quittungId: string
}

/** Stufen der Übermittlungsanimation (Signieren → Falten → Verpacken → Zustellen). */
export type SendStage = 0 | 1 | 2 | 3

/** Entspricht den einstellbaren Props des Design-Prototyps. */
export interface PrototypConfig {
  startScreen: 'welcome' | 'intro' | 'onb1' | 'home' | 'liste' | 'detail'
  certDelaySeconds: number
  gemeindeName: string
}

export const DEFAULT_CONFIG: PrototypConfig = {
  startScreen: 'welcome',
  certDelaySeconds: 5,
  gemeindeName: 'Muri bei Bern',
}
