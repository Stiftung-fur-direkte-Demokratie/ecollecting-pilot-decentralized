import { BigCheck, Panel } from '../components/blocks'

interface AktivScreenProps {
  gemeindeLabel: string
  onWeiter: () => void
}

/** Abschluss des Onboardings: die Verbindung zur Gemeinde steht. */
export function AktivScreen({ gemeindeLabel, onWeiter }: AktivScreenProps) {
  return (
    <div className="screen screen-aktiv" data-screen-label="Verbindung aktiv">
      <BigCheck />
      <h1 className="screen-aktiv__title">Verbindung aktiv</h1>
      <p className="screen-aktiv__lead">Verbunden mit {gemeindeLabel}</p>

      <Panel>Ab jetzt kannst du laufende Volksbegehren digital unterstützen.</Panel>

      <div className="screen-aktiv__actions">
        <button type="button" onClick={onWeiter} className="btn btn--primary">
          Weiter zur Startseite
        </button>
      </div>
    </div>
  )
}
