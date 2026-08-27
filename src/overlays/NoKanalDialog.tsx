import { useEscape } from './useEscape'

interface NoKanalDialogProps {
  onSetup: () => void
  onClose: () => void
}

/** Unterstützen ohne Gemeindeverbindung ist nicht möglich – Einrichtung anbieten. */
export function NoKanalDialog({ onSetup, onClose }: NoKanalDialogProps) {
  useEscape(onClose)

  return (
    <div className="overlay overlay--center">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label="Keine Verbindung eingerichtet"
      >
        <h2 className="modal__title">Es besteht noch keine Verbindung mit einer Gemeinde</h2>
        <p className="modal__text--last">
          Damit E-Collecting möglich ist, muss die Verbindung zuerst eingerichtet werden: E-ID
          vorweisen, Wohnadresse deklarieren, bestätigen.
        </p>
        <button type="button" onClick={onSetup} className="btn btn--primary stickyfooter__gap">
          Jetzt einrichten
        </button>
        <button type="button" onClick={onClose} className="btn btn--sm btn--neutral">
          Später
        </button>
      </div>
    </div>
  )
}
