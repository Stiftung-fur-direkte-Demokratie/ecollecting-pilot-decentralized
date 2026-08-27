import { Icon } from '../components/Icon'
import type { SendStage } from '../state/types'

const LABELS = [
  'Unterschriftenbogen wird signiert',
  'Bogen wird gefaltet',
  'Verschlüsseltes Couvert wird verpackt',
  'Übermittlung an die Gemeindeverwaltung',
]

const HINTS = [
  'Unterschrift erfolgt auf deinem Gerät',
  'Der Bogen entspricht dem amtlichen Unterschriftenbogen',
  'Adressiert an deine Gemeinde – nur sie kann es öffnen',
  'Zustellung über den Zugangsdienst und sedex',
]

/** Breiten der angedeuteten Textzeilen auf dem Unterschriftenbogen. */
const ZEILEN = ['70%', '90%', '80%', '88%', '60%']

interface SendenScreenProps {
  stage: SendStage
  gemeindeName: string
}

/**
 * Übermittlungs-Animation: Der Unterschriftenbogen wird signiert, gefaltet,
 * in ein verschlüsseltes Couvert verpackt und der Gemeinde zugestellt.
 */
export function SendenScreen({ stage, gemeindeName }: SendenScreenProps) {
  const sheetTransform =
    stage >= 2
      ? 'translate(18px,58px) scale(.72,.18)'
      : stage === 1
        ? 'translateY(34px) scaleY(.28)'
        : 'none'

  return (
    <div className="screen screen-senden" data-screen-label="Übermittlung">
      <div className="send__stage" aria-hidden="true">
        <span
          className="send__sheet"
          style={{ transform: sheetTransform, opacity: stage >= 2 ? 0 : 1 }}
        >
          {ZEILEN.map((width, i) => (
            <span key={i} className="send__line" style={{ width }} />
          ))}
          <span className="send__rule" />
          <span className="send__sigslot">
            <span className="send__sig" />
          </span>
        </span>

        <span
          className="send__env"
          style={{
            opacity: stage >= 1 ? 1 : 0,
            transform:
              stage >= 3 ? 'translateX(130px) translateY(-8px) rotate(-6deg)' : 'none',
          }}
        >
          <span className="send__flap" />
          <Icon
            name="Lock"
            size={22}
            className="send__lock"
            style={{ opacity: stage >= 2 ? 1 : 0 }}
          />
        </span>

        <span className={`send__target${stage >= 3 ? ' send__target--arrived' : ''}`}>
          <Icon name="Building" size={44} />
          <span className="send__targetname">{gemeindeName}</span>
        </span>
      </div>

      <p className="send__label" aria-live="polite">
        {LABELS[stage]}
      </p>
      <p className="send__hint">{HINTS[stage]}</p>

      <span className="send__dots" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`send__dot${stage >= i ? ' send__dot--on' : ''}`} />
        ))}
      </span>
    </div>
  )
}
