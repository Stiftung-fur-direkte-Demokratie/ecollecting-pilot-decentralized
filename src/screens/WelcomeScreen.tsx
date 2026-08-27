interface WelcomeScreenProps {
  onStart: () => void
  onListe: () => void
}

/** Ruhiger Einstieg vor der ausführlichen Erklärung. */
export function WelcomeScreen({ onStart, onListe }: WelcomeScreenProps) {
  return (
    <div className="screen screen-welcome" data-screen-label="Willkommen">
      <h1 className="screen-welcome__title">Willkommen</h1>
      <p className="screen-welcome__lead">
        Volksinitiativen und Referenden digital unterstützen – im Pilotbetrieb der Bundeskanzlei.
      </p>
      <button
        type="button"
        onClick={onStart}
        className="btn btn--lg btn--primary screen-welcome__primary"
      >
        Los geht’s
      </button>
      <button type="button" onClick={onListe} className="btn btn--secondary">
        Volksbegehren ansehen
      </button>
    </div>
  )
}
