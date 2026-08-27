import type { Ecollecting } from '../state/useEcollecting'
import { BigCheck, Note, StickyFooter } from '../components/blocks'

/**
 * Quittung: Die Willensbekundung ist übermittelt. Die Gemeinde bestätigt
 * hier nur den Empfang der Bescheinigungs-Anfrage – nicht die Bescheinigung.
 * Der swiyu-Hinweis erscheint erst mit dieser Bestätigung.
 */
export function QuittungScreen({ ec }: { ec: Ecollecting }) {
  const { state, actions, gemeindeLabel, find } = ec
  const begehren = find(state.currentId)
  const meta = state.supported[begehren.id]
  const empfangen = state.cert[begehren.id] === 'empfangen'

  return (
    <div className="screen screen-quittung" data-screen-label="Quittung">
      <BigCheck small />
      <h1 className="screen-quittung__title">Willensbekundung übermittelt</h1>
      <p className="screen-quittung__lead">Verschlüsselt an deine Gemeinde gesendet</p>

      <div className="card">
        <div className="datarow datarow--narrow">
          <span className="datarow__key">Begehren</span>
          <span className="datarow__val datarow__val--lg">{begehren.titel}</span>
        </div>
        <div className="datarow datarow--narrow">
          <span className="datarow__key">Gemeinde</span>
          <span className="datarow__val datarow__val--lg">{gemeindeLabel}</span>
        </div>
        <div className="datarow datarow--narrow">
          <span className="datarow__key">Übermittelt</span>
          <span className="datarow__val datarow__val--lg">{meta?.at ?? ''}</span>
        </div>
        <div className="datarow datarow--narrow">
          <span className="datarow__key">Status</span>
          <span className="screen-quittung__statuscell">
            <span className="badge badge--green">Verschlüsselt übermittelt</span>
            <span
              aria-live="polite"
              className={`badge ${empfangen ? 'badge--green' : 'badge--neutral'}`}
            >
              {empfangen ? 'Empfang bei Gemeinde bestätigt' : 'Empfangsbestätigung ausstehend'}
            </span>
          </span>
        </div>
      </div>

      <Note>
        Die Gemeinde bestätigt hier nur den <strong>Empfang der Anfrage</strong> zur Bescheinigung
        deiner Willensbekundung. Die Bescheinigung selbst erfolgt wie bisher im Stimmregister und
        wird nicht in der App abgebildet.
      </Note>

      {empfangen && (
        <div className="panel screen-quittung__wallet">
          <p>
            Die Quittung liegt als Nachweis in deiner <strong>swiyu-Wallet</strong>. Anzeigen und
            herunterladen ist nur dort möglich – diese App speichert keine Quittung.
          </p>
        </div>
      )}

      <StickyFooter stretch>
        <button type="button" onClick={actions.goListe} className="btn btn--lg btn--primary">
          Fertig
        </button>
        {empfangen && (
          <button
            type="button"
            onClick={actions.openReceipt}
            className="btn-link btn-link--footer"
          >
            Quittung in der swiyu-Wallet öffnen
          </button>
        )}
      </StickyFooter>
    </div>
  )
}
