const MONATE_KURZ = [
  'Jan.',
  'Feb.',
  'März',
  'Apr.',
  'Mai',
  'Juni',
  'Juli',
  'Aug.',
  'Sept.',
  'Okt.',
  'Nov.',
  'Dez.',
]

const MONATE_LANG = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
]

const pad = (n: number) => String(n).padStart(2, '0')

/** «27. Aug. 2026, 14:05» */
export function formatDateTime(d: Date): string {
  return `${d.getDate()}. ${MONATE_KURZ[d.getMonth()]} ${d.getFullYear()}, ${pad(d.getHours())}:${pad(d.getMinutes())}`
}

/** «27. August 2026» */
export function formatDate(d: Date): string {
  return `${d.getDate()}. ${MONATE_LANG[d.getMonth()]} ${d.getFullYear()}`
}

/** Quittungskennung im Muster CH-VI-561-4821. */
export function makeQuittungId(begehrenId: string): string {
  const suffix = Math.floor(Math.random() * 9000) + 1000
  return `CH-${begehrenId.toUpperCase()}-${suffix}`
}
