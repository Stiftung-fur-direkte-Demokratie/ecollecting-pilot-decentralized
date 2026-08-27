import { Note, StickyFooter } from '../components/blocks'

interface IntroScreenProps {
  onSetup: () => void
  onListe: () => void
}

const SCHRITTE = [
  {
    titel: 'Verbindung einrichten',
    text: 'E-ID mit swiyu vorweisen, Wohnadresse deklarieren – die App ermittelt die zuständige Gemeinde.',
  },
  {
    titel: 'Begehren wählen',
    text: 'Laufende Sammlungen des Bundes, amtlich aus LINDAS. Keine Unterschriftenzähler, keine Kampagnenlogik.',
  },
  {
    titel: 'Verschlüsselt übermitteln',
    text: 'Die Unterstützung wird auf deinem Gerät unterschrieben. Lesen kann sie nur deine Gemeinde.',
  },
]

/** Erklärt den Pilotbetrieb in drei Schritten und führt ins Onboarding. */
export function IntroScreen({ onSetup, onListe }: IntroScreenProps) {
  return (
    <div className="screen screen-intro" data-screen-label="Einführung">
      <h1 className="screen-intro__title">Volksbegehren digital unterstützen</h1>
      <p className="screen-intro__lead">
        Der Pilotbetrieb des Bundes erlaubt es, Initiativen und Referenden auf dem eigenen Gerät zu
        unterschreiben. Die Willensbekundung wird auf dem Gerät signiert und geht verschlüsselt an
        die eigene Gemeinde.
      </p>

      <div className="steps">
        {SCHRITTE.map((schritt, i) => (
          <div key={schritt.titel} className="step">
            <span className="step__num">{i + 1}</span>
            <span className="step__body">
              <span className="step__title">{schritt.titel}</span>
              <span className="step__text">{schritt.text}</span>
            </span>
          </div>
        ))}
      </div>

      <Note>
        <strong>Es besteht noch keine Verbindung mit einer Gemeinde.</strong> Damit E-Collecting
        möglich ist, muss diese Verbindung zuerst eingerichtet werden. Ansehen kannst du die
        Volksbegehren auch ohne Verbindung.
      </Note>

      <StickyFooter>
        <button
          type="button"
          onClick={onSetup}
          className="btn btn--lg btn--primary stickyfooter__gap"
        >
          Verbindung einrichten
        </button>
        <button type="button" onClick={onListe} className="btn btn--secondary">
          Volksbegehren anschauen
        </button>
      </StickyFooter>
    </div>
  )
}
