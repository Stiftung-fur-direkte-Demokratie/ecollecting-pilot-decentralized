import type { Ecollecting } from '../state/useEcollecting'
import { Icon } from '../components/Icon'
import { Stepper } from '../components/Stepper'
import { Step1Eid } from './onboarding/Step1Eid'
import { Step2Adresse } from './onboarding/Step2Adresse'
import { Step3Bestaetigung } from './onboarding/Step3Bestaetigung'

/**
 * Rahmen der Verbindungseinrichtung: Kopfzeile, Stepper und der jeweils
 * aktive Schritt. Die Schritte liefern Fragmente, damit ihr klebender
 * Aktionsbereich direktes Kind der Flex-Spalte bleibt.
 */
export function OnboardingScreen({ ec }: { ec: Ecollecting }) {
  const { state, actions, suggestions, gemeindeLabel, bfs, kanton } = ec
  const step = state.screen === 'onb1' ? 1 : state.screen === 'onb2' ? 2 : 3

  return (
    <div className="screen screen-onb" data-screen-label={`Verbindung einrichten, Schritt ${step}`}>
      <div className="onbbar">
        <button type="button" onClick={actions.onbBack} className="textbtn">
          <Icon name="ChevronLeft" size={14} />
          Zurück
        </button>
        <span className="onbbar__step">Schritt {step} von 3</span>
        <button type="button" onClick={actions.onbCancel} className="textbtn">
          Abbrechen
        </button>
      </div>

      <Stepper current={step} />

      {step === 1 && (
        <Step1Eid
          eidDone={state.eid}
          onOpenSheet={actions.openSheet}
          onWeiter={actions.goOnb2}
        />
      )}

      {step === 2 && (
        <Step2Adresse
          strasse={state.strasse}
          plz={state.plz}
          ort={state.ort}
          suggestions={suggestions}
          resolving={state.resolving}
          resolved={state.gemeinde !== null}
          gemeindeLabel={gemeindeLabel}
          bfs={bfs}
          kanton={kanton}
          onStrasse={actions.onStrasse}
          onStrasseFocus={actions.onStrasseFocus}
          onPlz={actions.onPlz}
          onOrt={actions.onOrt}
          onPick={actions.pickStrasse}
          onWeiter={actions.goOnb3}
        />
      )}

      {step === 3 && (
        <Step3Bestaetigung
          gemeindeLabel={gemeindeLabel}
          bfs={bfs}
          onAktivieren={actions.activate}
        />
      )}
    </div>
  )
}
