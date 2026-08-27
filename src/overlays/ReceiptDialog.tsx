import { useEscape } from './useEscape'

interface ReceiptDialogProps {
  titel: string
  onClose: () => void
}

/**
 * Die Quittung wird ausschliesslich in der swiyu-Wallet angezeigt und
 * heruntergeladen – die App selbst speichert keine.
 */
export function ReceiptDialog({ titel, onClose }: ReceiptDialogProps) {
  useEscape(onClose)

  return (
    <div className="overlay overlay--center">
      <div className="modal" role="dialog" aria-label="Quittung">
        <div className="sheet__head">
          <span className="swiyu-tile" aria-hidden="true">
            s
          </span>
          <h2 className="modal__headtitle">Quittung in der swiyu-Wallet öffnen</h2>
        </div>

        <p className="modal__text">
          Die Quittung wird ausschliesslich in der swiyu-Wallet angezeigt und heruntergeladen. Diese
          App speichert und zeigt keine Quittung.
        </p>
        <p className="modal__text--muted">
          Beim Öffnen wechselt das Gerät in die Wallet. Dort liegt der Nachweis zu {titel} als
          Verifiable Credential.
        </p>

        <button type="button" onClick={onClose} className="btn btn--primary stickyfooter__gap">
          swiyu-Wallet öffnen
        </button>
        <button type="button" onClick={onClose} className="btn btn--sm btn--neutral">
          Abbrechen
        </button>
      </div>
    </div>
  )
}
