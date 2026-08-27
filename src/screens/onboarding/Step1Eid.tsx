import { Panel, StickyFooter, SuccessCard } from '../../components/blocks'

interface Step1Props {
  eidDone: boolean
  onOpenSheet: () => void
  onWeiter: () => void
}

/** Schritt 1: E-ID über die swiyu-Wallet vorweisen (selektive Offenlegung). */
export function Step1Eid({ eidDone, onOpenSheet, onWeiter }: Step1Props) {
  return (
    <>
      <h1 className="screen-onb__title">E-ID vorweisen</h1>
      <p className="screen-onb__lead">Selektive Offenlegung aus deiner swiyu-Wallet</p>

      <Panel muted>
        Die App fragt drei Attribute ab: AHV-Nummer, Name und Geburtsdatum. Geprüft wird der
        Nachweis über die Vertrauensinfrastruktur des Bundes.
      </Panel>

      {eidDone ? (
        <>
          <SuccessCard
            className="screen-onb__eidcard"
            title="E-ID geprüft"
            meta={
              <>
                Anna Beispiel · 12.04.1991
                <br />
                AHV-Nr. 756.•••.••••.•• (verdeckt)
              </>
            }
          />
          <StickyFooter>
            <button type="button" onClick={onWeiter} className="btn btn--primary">
              Weiter zur Adresse
            </button>
          </StickyFooter>
        </>
      ) : (
        <StickyFooter>
          <button type="button" onClick={onOpenSheet} className="btn btn--primary">
            Mit swiyu ausweisen
          </button>
        </StickyFooter>
      )}
    </>
  )
}
