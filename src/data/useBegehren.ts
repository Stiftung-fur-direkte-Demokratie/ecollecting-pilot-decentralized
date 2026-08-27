import { useEffect, useMemo, useState } from 'react'
import { BEGEHREN, type Begehren } from './begehren'
import { fetchVolksbegehren } from './lindas'

export type Datenquelle = 'lindas' | 'beispiel'

/**
 * Liefert die Liste der Volksbegehren. Startet mit den Beispieldaten und
 * ersetzt sie, sobald die amtlichen Daten aus LINDAS eingetroffen sind. Ist
 * der Endpunkt nicht erreichbar (Netzsperre, CORS, Wartung), bleiben die
 * Beispieldaten stehen – die App funktioniert in jedem Fall.
 */
export function useBegehren() {
  const [liste, setListe] = useState<Begehren[]>(BEGEHREN)
  const [quelle, setQuelle] = useState<Datenquelle>('beispiel')
  const [laedt, setLaedt] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    fetchVolksbegehren(controller.signal)
      .then((amtlich) => {
        if (controller.signal.aborted) return
        // Eine leere Antwort ist kein Fehler, aber auch kein Ersatz für eine
        // gefüllte Liste – dann bleiben die Beispieldaten stehen.
        if (amtlich.length === 0) return
        setListe(amtlich)
        setQuelle('lindas')
      })
      .catch((err: unknown) => {
        if (controller.signal.aborted) return
        console.info('LINDAS nicht erreichbar, nutze Beispieldaten:', err)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLaedt(false)
      })
    return () => controller.abort()
  }, [])

  const find = useMemo(() => {
    return (id: string | null): Begehren => liste.find((b) => b.id === id) ?? liste[0]
  }, [liste])

  return { liste, quelle, laedt, find }
}
