import type { Ecollecting } from '../state/useEcollecting'
import { findBegehren } from '../data/begehren'
import { Icon } from '../components/Icon'
import { Note, StickyFooter, SuccessCard } from '../components/blocks'
import { TypBadge } from '../components/TypBadge'

/** Detail eines Volksbegehrens mit Wortlaut-Auszug und Unterstützen-Einstieg. */
export function DetailScreen({ ec }: { ec: Ecollecting }) {
  const { state, actions, gemeindeName } = ec
  const begehren = findBegehren(state.currentId)
  const meta = state.supported[begehren.id]
  const empfangen = state.cert[begehren.id] === 'empfangen'

  return (
    <div className="screen screen-detail" data-screen-label="Begehren Detail">
      <button type="button" onClick={actions.goListe} className="textbtn textbtn--back">
        <Icon name="ChevronLeft" size={16} />
        Volksbegehren
      </button>

      <span className="screen-detail__badge">
        <TypBadge typ={begehren.typ} />
      </span>
      <h1 className="screen-detail__title">{begehren.titel}</h1>

      <h2 className="screen-detail__h2">Wortlaut (Auszug)</h2>
      <div className="panel screen-detail__wortlaut">
        <p>
          {begehren.auszug}{' '}
          <button type="button" onClick={actions.openWortlaut} className="inlinelink">
            Ganzen Text lesen
          </button>
        </p>
      </div>

      <Note>
        <strong>So funktioniert deine Unterstützung:</strong> Die Willensbekundung wird auf diesem
        Gerät signiert und verschlüsselt an die Gemeinde <strong>{gemeindeName}</strong> übermittelt.
        Nur deine Gemeinde kann sie lesen.
      </Note>

      {meta ? (
        <>
          <SuccessCard
            compact
            title="Bereits unterstützt"
            meta={`Übermittelt ${meta.at} · ${
              empfangen ? 'Empfang bei Gemeinde bestätigt' : 'Empfangsbestätigung ausstehend'
            }`}
          />
          <button
            type="button"
            onClick={actions.openQuittung}
            className="btn btn--sm btn--secondary screen-detail__status"
          >
            Status ansehen
          </button>
        </>
      ) : (
        <StickyFooter>
          <button
            type="button"
            onClick={actions.openStraf}
            className="btn btn--lg btn--primary"
          >
            Jetzt unterstützen
          </button>
        </StickyFooter>
      )}
    </div>
  )
}
