import type { BegehrenTyp } from '../data/begehren'

/** Typ-Badge eines Volksbegehrens – rot für Initiativen, blau für Referenden. */
export function TypBadge({ typ }: { typ: BegehrenTyp }) {
  return typ === 'initiative' ? (
    <span className="badge badge--initiative">Volksinitiative</span>
  ) : (
    <span className="badge badge--referendum">Referendum</span>
  )
}

/** Beschriftet die Frist je nach Begehrenstyp. */
export function fristLabel(typ: BegehrenTyp, frist: string): string {
  return `${typ === 'initiative' ? 'Sammelfrist bis ' : 'Referendumsfrist bis '}${frist}`
}
