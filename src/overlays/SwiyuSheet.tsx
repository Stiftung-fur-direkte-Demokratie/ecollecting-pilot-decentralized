import { Icon } from '../components/Icon'
import { useEscape } from './useEscape'

interface SwiyuSheetProps {
  onConfirm: () => void
  onClose: () => void
}

/** Simuliertes swiyu-Sheet: selektive Offenlegung dreier E-ID-Attribute. */
export function SwiyuSheet({ onConfirm, onClose }: SwiyuSheetProps) {
  useEscape(onClose)

  return (
    <div className="overlay overlay--sheet">
      <div className="sheet" role="dialog" aria-label="swiyu Wallet">
        <div className="sheet__head">
          <span className="swiyu-tile" aria-hidden="true">
            s
          </span>
          <span className="sheet__headtext">
            <span className="sheet__title">swiyu-Wallet</span>
            <span className="sheet__subtitle">Simulation im Pilotbetrieb</span>
          </span>
          <button type="button" onClick={onClose} aria-label="Schliessen" className="iconbtn">
            <Icon name="Cancel" size={18} />
          </button>
        </div>

        <p className="sheet__text">
          <strong>E-Collecting (Pilotbetrieb Bund)</strong> fragt folgende Attribute deiner E-ID ab:
        </p>

        <div className="card card--plain sheet__card">
          <div className="sheetrow">
            <span className="sheetrow__key">AHV-Nummer</span>
            <span className="sheetrow__val">756.1234.5678.97</span>
          </div>
          <div className="sheetrow">
            <span className="sheetrow__key">Name</span>
            <span className="sheetrow__val">Anna Beispiel</span>
          </div>
          <div className="sheetrow">
            <span className="sheetrow__key">Geburtsdatum</span>
            <span className="sheetrow__val">12.04.1991</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onConfirm}
          className="btn btn--primary stickyfooter__gap"
        >
          Attribute freigeben
        </button>
        <button type="button" onClick={onClose} className="btn btn--sm btn--neutral">
          Abbrechen
        </button>
      </div>
    </div>
  )
}
