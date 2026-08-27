import { Icon } from '../components/Icon'
import { useEscape } from './useEscape'

interface WortlautSheetProps {
  wortlaut: string
  onClose: () => void
}

/** Vollständiger Wortlaut des Volksbegehrens. */
export function WortlautSheet({ wortlaut, onClose }: WortlautSheetProps) {
  useEscape(onClose)

  return (
    <div className="overlay overlay--sheet">
      <div className="sheet sheet--scroll" role="dialog" aria-label="Wortlaut">
        <div className="sheet__head sheet__head--top">
          <h2 className="sheet__heading">Wortlaut</h2>
          <button type="button" onClick={onClose} aria-label="Schliessen" className="iconbtn">
            <Icon name="Cancel" size={18} />
          </button>
        </div>
        <p className="sheet__wortlaut">{wortlaut}</p>
        <p className="sheet__source">Beispieltext des Pilotbetriebs · Quelle: LINDAS (Bund)</p>
      </div>
    </div>
  )
}
