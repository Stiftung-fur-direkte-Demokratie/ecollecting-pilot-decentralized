import type { Ecollecting } from '../state/useEcollecting'
import { BEGEHREN } from '../data/begehren'
import type { Tab } from '../state/types'
import { Icon } from '../components/Icon'
import { TypBadge, fristLabel } from '../components/TypBadge'

const TABS: { key: Tab; label: string }[] = [
  { key: 'alle', label: 'Alle' },
  { key: 'ini', label: 'Initiativen' },
  { key: 'ref', label: 'Referenden' },
]

/**
 * Liste der laufenden Sammlungen. Bewusst ohne Unterschriftenzähler –
 * Datensparsamkeit ist Teil des Konzepts.
 */
export function ListeScreen({ ec }: { ec: Ecollecting }) {
  const { state, actions } = ec

  const sichtbar = BEGEHREN.filter((b) => {
    if (state.tab === 'alle') return true
    return state.tab === 'ini' ? b.typ === 'initiative' : b.typ === 'referendum'
  })

  return (
    <div className="screen-liste" data-screen-label="Volksbegehren">
      <h1 className="screen-liste__title">Volksbegehren</h1>
      <p className="screen-liste__lead">Laufende Sammlungen auf Bundesebene</p>

      <div className="tabs" role="tablist" aria-label="Filter">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={state.tab === tab.key}
            onClick={() => actions.setTab(tab.key)}
            className="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {sichtbar.map((begehren) => (
        <button
          key={begehren.id}
          type="button"
          onClick={() => actions.openDetail(begehren.id)}
          className="begehren"
        >
          <span className="begehren__body">
            <span className="begehren__badges">
              <TypBadge typ={begehren.typ} />
              {state.supported[begehren.id] && (
                <span className="badge badge--green">Bereits unterstützt</span>
              )}
            </span>
            <span className="begehren__titel">{begehren.titel}</span>
            <span className="begehren__frist">{fristLabel(begehren.typ, begehren.frist)}</span>
          </span>
          <Icon name="ChevronRight" size={20} className="begehren__chevron" />
        </button>
      ))}

      <p className="screen-liste__source">
        Amtliche Daten: LINDAS (Bund) · Beispieldaten des Pilotbetriebs
      </p>
    </div>
  )
}
