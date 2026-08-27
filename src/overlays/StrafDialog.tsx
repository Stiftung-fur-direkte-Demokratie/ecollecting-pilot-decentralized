import type { Ecollecting } from '../state/useEcollecting'
import { findBegehren } from '../data/begehren'
import { Icon } from '../components/Icon'
import { useEscape } from './useEscape'

/**
 * Bestätigung der Willensbekundung: Erst die Kenntnisnahme des
 * Strafbarkeitshinweises ankreuzen, dann den Slider von links nach rechts
 * ziehen. Danach folgt die Face-ID-Bestätigung.
 */
export function StrafDialog({ ec }: { ec: Ecollecting }) {
  const { state, actions, slider } = ec
  const begehren = findBegehren(state.currentId)
  useEscape(actions.closeDialog)

  const prozent = state.slide * 100
  // Der Knopf ist 64px breit und sitzt 4px innerhalb der Bahn.
  const knobLeft = `calc(4px + ${prozent.toFixed(1)}% - ${(state.slide * 72).toFixed(1)}px)`

  return (
    <div className="overlay overlay--center">
      <div className="modal" role="dialog" aria-modal="true" aria-label="Strafbarkeitshinweis">
        <div className="modal__head">
          <span className="modal__warnicon" aria-hidden="true">
            <Icon name="Warning" size={18} />
          </span>
          <h2 className="modal__headtitle">Willensbekundung bestätigen</h2>
        </div>

        <p className="modal__text">
          Du bekundest deinen Willen zur Unterstützung von {begehren.titel}. Jede Person darf ein
          Begehren nur einmal unterstützen – digital oder auf Papier.
        </p>

        <button
          type="button"
          onClick={actions.toggleGelesen}
          aria-pressed={state.gelesen}
          className="confirmbox"
        >
          <span className="confirmbox__box" aria-hidden="true">
            <Icon name="CheckmarkBold" size={14} className="confirmbox__check" />
          </span>
          <span className="confirmbox__text">
            Ich habe den Wortlaut und die Hinweise gelesen. Mir ist bewusst: Wer bei einer
            Unterschriftensammlung besticht oder sich bestechen lässt (Art. 281 StGB) oder wer das
            Ergebnis einer Unterschriftensammlung fälscht (Art. 282 StGB), macht sich strafbar.
          </span>
        </button>

        <div
          className={state.gelesen ? 'slider slider--armed' : 'slider'}
          onPointerDown={slider.onPointerDown}
          onPointerMove={slider.onPointerMove}
          onPointerUp={slider.onPointerUp}
          onPointerCancel={slider.onPointerUp}
        >
          <span className="slider__fill" style={{ width: `${prozent}%` }} />
          <span className="slider__label">
            {state.gelesen ? 'Zum Unterstützen ziehen' : 'Zuerst Bestätigung ankreuzen'}
          </span>
          <span
            role="slider"
            tabIndex={0}
            aria-label="Zum Abschliessen nach rechts ziehen"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(prozent)}
            aria-disabled={!state.gelesen}
            onKeyDown={slider.onKeyDown}
            className="slider__knob"
            style={{ left: knobLeft }}
          >
            <Icon name="ChevronRight" size={20} />
          </span>
        </div>

        <button type="button" onClick={actions.closeDialog} className="btn btn--sm btn--neutral">
          Abbrechen
        </button>
      </div>
    </div>
  )
}
