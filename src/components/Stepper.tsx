const SCHRITTE = ['E-ID (swiyu)', 'Adresse', 'Bestätigung']

interface StepperProps {
  /** Aktueller Schritt, 1-basiert. */
  current: number
}

/** Fortschritt der Verbindungseinrichtung über drei Schritte. */
export function Stepper({ current }: StepperProps) {
  return (
    <div className="stepper">
      {SCHRITTE.map((label, i) => {
        const nr = i + 1
        const zustand = current > nr ? 'done' : current === nr ? 'current' : 'todo'
        return (
          <span key={label} className={`stepper__item stepper__item--${zustand}`}>
            <span className="stepper__dot">{zustand === 'done' ? '✓' : nr}</span>
            <span className="stepper__label">{label}</span>
          </span>
        )
      })}
    </div>
  )
}
