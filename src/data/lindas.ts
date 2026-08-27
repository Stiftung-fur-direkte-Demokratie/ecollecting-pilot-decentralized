import initiativenQuery from './queries/initiativen.sparql?raw'
import referendenQuery from './queries/referenden.sparql?raw'
import type { Begehren } from './begehren'

/**
 * SPARQL-Endpunkt von LINDAS. Im Dev-Betrieb läuft die Abfrage über den
 * Vite-Proxy (`/lindas`), damit CORS keine Rolle spielt; im Build kann der
 * Endpunkt über `VITE_LINDAS_ENDPOINT` auf einen eigenen Proxy gelegt werden.
 */
const ENDPOINT: string =
  import.meta.env.VITE_LINDAS_ENDPOINT ??
  (import.meta.env.DEV ? '/lindas/query' : 'https://lindas.admin.ch/query')

/** Nur Initiativen im Sammelstadium können überhaupt noch unterschrieben werden. */
const PHASE_SAMMELSTADIUM =
  'https://politics.ld.admin.ch/political-rights/popular-initiative/phase/im_sammelstadium'

interface SparqlBinding {
  type: string
  value: string
  datatype?: string
  'xml:lang'?: string
}

interface SparqlResults {
  results: { bindings: Record<string, SparqlBinding>[] }
}

const val = (row: Record<string, SparqlBinding>, key: string): string | undefined => {
  const v = row[key]?.value
  return v && v.length > 0 ? v : undefined
}

async function runQuery(query: string, signal: AbortSignal): Promise<SparqlResults> {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    signal,
    headers: {
      'Content-Type': 'application/sparql-query',
      Accept: 'application/sparql-results+json',
    },
    body: query,
  })
  if (!res.ok) throw new Error(`LINDAS ${res.status} ${res.statusText}`)
  return (await res.json()) as SparqlResults
}

/**
 * Sammelfrist einer Volksinitiative: 18 Monate ab Publikation der Vorprüfung
 * im Bundesblatt (Art. 71 Abs. 1 BPR). `sammelbeginn` ist genau dieses Datum,
 * die Frist lässt sich daraus zuverlässig ableiten.
 */
function sammelfrist(sammelbeginn: string): string | undefined {
  const start = new Date(sammelbeginn)
  if (Number.isNaN(start.getTime())) return undefined
  const ende = new Date(start)
  ende.setMonth(ende.getMonth() + 18)
  const monate = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
  ]
  return `${ende.getDate()}. ${monate[ende.getMonth()]} ${ende.getFullYear()}`
}

function mapInitiativen(data: SparqlResults): Begehren[] {
  return data.results.bindings
    .filter((row) => val(row, 'dimension23') === PHASE_SAMMELSTADIUM)
    .map((row): Begehren | null => {
      const id = val(row, 'dimension6')
      const titel = val(row, 'dimension25')
      if (!id || !titel) return null
      const beginn = val(row, 'dimension8')
      const bbl = val(row, 'dimension11') ?? val(row, 'dimension12')
      return {
        id: `vi-${id}`,
        typ: 'initiative',
        titel,
        frist: beginn ? sammelfrist(beginn) : undefined,
        kennung: bbl ? `BBl ${bbl}` : `Initiative Nr. ${id}`,
        quelle: 'lindas',
      }
    })
    .filter((b): b is Begehren => b !== null)
}

function mapReferenden(data: SparqlResults): Begehren[] {
  return data.results.bindings
    .map((row): Begehren | null => {
      const id = val(row, 'dimension6')
      const titel = val(row, 'dimension20')
      if (!id || !titel) return null
      const bbl = val(row, 'dimension13') ?? val(row, 'dimension14')
      return {
        id: `ref-${id}`,
        typ: 'referendum',
        titel,
        // Die Referendumsfrist beträgt 100 Tage ab Publikation des Erlasses im
        // Bundesblatt (Art. 141 BV). Die Abfrage liefert nur das Beschlussdatum
        // des Parlaments, nicht das Publikationsdatum – daraus liesse sich die
        // Frist nur auf Wochen genau schätzen. Statt ein falsches Datum
        // anzuzeigen, bleibt sie leer; die Abfrage filtert ohnehin bereits auf
        // «laufende Referendumsfrist».
        frist: undefined,
        kennung: bbl ? `BBl ${bbl}` : `Referendum Nr. ${id}`,
        quelle: 'lindas',
      }
    })
    .filter((b): b is Begehren => b !== null)
}

/**
 * Holt die laufenden Volksbegehren aus LINDAS.
 *
 * Bewusst NICHT übernommen werden die Unterschriftenzahlen, die beide Cubes
 * mitliefern (`unterschriftenEingereicht`, `unterschriftenGueltig` …): Die App
 * zeigt aus Gründen der Datensparsamkeit keine Unterschriftenzähler.
 */
export async function fetchVolksbegehren(signal: AbortSignal): Promise<Begehren[]> {
  const [initiativen, referenden] = await Promise.all([
    runQuery(initiativenQuery, signal).then(mapInitiativen),
    runQuery(referendenQuery, signal).then(mapReferenden),
  ])
  return [...initiativen, ...referenden]
}
