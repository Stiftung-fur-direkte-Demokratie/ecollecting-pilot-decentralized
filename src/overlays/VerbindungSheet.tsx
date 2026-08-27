import { useEscape } from './useEscape'

interface VerbindungSheetProps {
  gemeindeLabel: string
  onAufheben: () => void
  onClose: () => void
}

/** Übersicht und Aufhebung der Gemeindeverbindung. */
export function VerbindungSheet({ gemeindeLabel, onAufheben, onClose }: VerbindungSheetProps) {
  useEscape(onClose)

  return (
    <div className="overlay overlay--sheet">
      <div className="sheet" role="dialog" aria-label="Verbindung verwalten">
        <h2 className="sheet__heading sheet__heading--solo">Verbindung verwalten</h2>

        <div className="card card--plain sheet__card">
          <div className="sheetrow">
            <span className="sheetrow__key">Gemeinde</span>
            <span className="sheetrow__val">{gemeindeLabel}</span>
          </div>
          <div className="sheetrow">
            <span className="sheetrow__key">Verbindung</span>
            <span className="sheetrow__val">aktiv</span>
          </div>
          <div className="sheetrow">
            <span className="sheetrow__key">Unterschrift</span>
            <span className="sheetrow__val">Auf diesem Gerät</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onAufheben}
          className="btn btn--sm btn--secondary stickyfooter__gap"
        >
          Verbindung aufheben
        </button>
        <button type="button" onClick={onClose} className="btn btn--sm btn--neutral">
          Schliessen
        </button>
      </div>
    </div>
  )
}
