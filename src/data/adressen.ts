export interface StrassenEintrag {
  strasse: string
  plz: string
  ort: string
}

export interface Gemeinde {
  /** Vollständige Bezeichnung inkl. Kantonskürzel. */
  name: string
  /** Kurzform für Fliesstext. */
  kurz: string
  /** BFS-Gemeindenummer aus dem amtlichen Gemeindeverzeichnis. */
  bfs: string
  kanton: string
}

/** Beispieldaten für das Autocomplete der Strassensuche. */
export const STREETS: StrassenEintrag[] = [
  { strasse: 'Thunstrasse 2', plz: '3074', ort: 'Muri bei Bern' },
  { strasse: 'Thunstrasse 18', plz: '3074', ort: 'Muri bei Bern' },
  { strasse: 'Aarstrasse 12', plz: '3074', ort: 'Muri bei Bern' },
  { strasse: 'Melchenbühlweg 7', plz: '3074', ort: 'Muri bei Bern' },
  { strasse: 'Bundesgasse 3', plz: '3011', ort: 'Bern' },
  { strasse: 'Bahnhofstrasse 24', plz: '8001', ort: 'Zürich' },
]

export const GEMEINDEN: Record<string, Gemeinde> = {
  '3074': { name: 'Muri bei Bern (BE)', kurz: 'Muri bei Bern', bfs: '356', kanton: 'Kanton Bern' },
  '3011': { name: 'Bern (BE)', kurz: 'Bern', bfs: '351', kanton: 'Kanton Bern' },
  '8001': { name: 'Zürich (ZH)', kurz: 'Zürich', bfs: '261', kanton: 'Kanton Zürich' },
}

export const DEFAULT_GEMEINDE = GEMEINDEN['3074']
