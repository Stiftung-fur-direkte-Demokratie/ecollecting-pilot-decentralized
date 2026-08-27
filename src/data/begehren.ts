export type BegehrenTyp = 'initiative' | 'referendum'

export interface Begehren {
  id: string
  typ: BegehrenTyp
  titel: string
  /**
   * Ende der Sammel- bzw. Referendumsfrist, ausgeschrieben. Fehlt, wenn sich
   * die Frist aus den amtlichen Daten nicht zuverlässig ableiten lässt.
   */
  frist?: string
  /** Amtliche Kennung (Vorprüfung bzw. BBl-Fundstelle). */
  kennung: string
  /**
   * Erste Zeilen des Wortlauts. LINDAS liefert keinen Gesetzestext, darum
   * fehlen Auszug und Volltext bei amtlich bezogenen Begehren.
   */
  auszug?: string
  wortlaut?: string
  /** Woher der Datensatz stammt. */
  quelle?: 'lindas' | 'beispiel'
}

/**
 * Beispieldaten des Pilotbetriebs. Amtlich stammen Volksbegehren aus LINDAS
 * (Bund); hier hartkodiert, weil der SPARQL-Endpunkt im Prototyp nicht
 * angebunden ist.
 */
export const BEGEHREN: Begehren[] = [
  {
    id: 'vi-561',
    typ: 'initiative',
    quelle: 'beispiel',
    titel: '«Für transparente Algorithmen in der öffentlichen Verwaltung»',
    frist: '4. März 2028',
    kennung: 'Vorprüfung Nr. 561 (Beispiel)',
    auszug:
      'Die Bundesverfassung wird wie folgt geändert: Art. 5c (neu) – Einsatz algorithmischer Systeme durch Behörden …',
    wortlaut:
      'Die Bundesverfassung wird wie folgt geändert: Art. 5c (neu) – Einsatz algorithmischer Systeme durch Behörden. Bund, Kantone und Gemeinden legen offen, welche algorithmischen Systeme sie zur Vorbereitung oder zum Erlass von Verfügungen einsetzen. Betroffene Personen haben Anspruch auf eine nachvollziehbare Begründung sowie auf Überprüfung durch eine Person. Das Gesetz regelt die Ausnahmen zum Schutz der inneren und äusseren Sicherheit sowie die Aufsicht.',
  },
  {
    id: 'vi-574',
    typ: 'initiative',
    quelle: 'beispiel',
    titel: '«Gletscherschutz-Fonds jetzt»',
    frist: '19. November 2027',
    kennung: 'Vorprüfung Nr. 574 (Beispiel)',
    auszug:
      'Die Bundesverfassung wird wie folgt geändert: Art. 74a (neu) – Fonds zum Schutz der alpinen Kryosphäre …',
    wortlaut:
      'Die Bundesverfassung wird wie folgt geändert: Art. 74a (neu) – Fonds zum Schutz der alpinen Kryosphäre. Der Bund führt einen Fonds zur Beobachtung, Sicherung und Renaturierung von Gletschervorfeldern und Permafrostgebieten. Die Kantone werden bei der Umsetzung beigezogen. Das Gesetz regelt die Finanzierung sowie die Berichterstattung an die Bundesversammlung.',
  },
  {
    id: 'ref-eng',
    typ: 'referendum',
    quelle: 'beispiel',
    titel: 'Änderung des Energiegesetzes vom 20. Juni 2026',
    frist: '8. Oktober 2026',
    kennung: 'BBl 2026 1487 (Beispiel)',
    auszug:
      'Referendum gegen die Änderung des Energiegesetzes vom 20. Juni 2026, insbesondere Art. 12 und 19 …',
    wortlaut:
      'Die unterzeichnenden, in eidgenössischen Angelegenheiten stimmberechtigten Personen verlangen mit Bezug auf Art. 141 der Bundesverfassung, dass die Änderung des Energiegesetzes vom 20. Juni 2026 der Abstimmung des Volkes unterbreitet werde. Die Vorlage betrifft insbesondere die Bewilligungsverfahren nach Art. 12 sowie die Fördermittel nach Art. 19.',
  },
  {
    id: 'ref-urg',
    typ: 'referendum',
    quelle: 'beispiel',
    titel: 'Teilrevision des Urheberrechtsgesetzes',
    frist: '21. September 2026',
    kennung: 'BBl 2026 1312 (Beispiel)',
    auszug: 'Referendum gegen die Teilrevision des Urheberrechtsgesetzes vom 12. Juni 2026 …',
    wortlaut:
      'Die unterzeichnenden, in eidgenössischen Angelegenheiten stimmberechtigten Personen verlangen mit Bezug auf Art. 141 der Bundesverfassung, dass die Teilrevision des Urheberrechtsgesetzes vom 12. Juni 2026 der Abstimmung des Volkes unterbreitet werde.',
  },
  {
    id: 'vi-588',
    typ: 'initiative',
    quelle: 'beispiel',
    titel: '«Für eine Grundversorgung mit Hausarztmedizin in allen Regionen»',
    frist: '2. Februar 2028',
    kennung: 'Vorprüfung Nr. 588 (Beispiel)',
    auszug:
      'Die Bundesverfassung wird wie folgt geändert: Art. 117c (neu) – Wohnortnahe medizinische Grundversorgung …',
    wortlaut:
      'Die Bundesverfassung wird wie folgt geändert: Art. 117c (neu) – Wohnortnahe medizinische Grundversorgung. Bund und Kantone sorgen dafür, dass in allen Regionen eine hausärztliche Grundversorgung in zumutbarer Entfernung verfügbar ist. Sie fördern Ausbildung und Niederlassung von Fachpersonen und regeln die Mindestversorgung in Randregionen.',
  },
  {
    id: 'vi-592',
    typ: 'initiative',
    quelle: 'beispiel',
    titel: '«Bahnausbau statt Autobahnausbau»',
    frist: '16. Mai 2028',
    kennung: 'Vorprüfung Nr. 592 (Beispiel)',
    auszug:
      'Die Bundesverfassung wird wie folgt geändert: Art. 86a (neu) – Vorrang des Schienenverkehrs bei Ausbauvorhaben …',
    wortlaut:
      'Die Bundesverfassung wird wie folgt geändert: Art. 86a (neu) – Vorrang des Schienenverkehrs bei Ausbauvorhaben. Mittel aus den zweckgebundenen Verkehrsfonds werden vorrangig für den Ausbau und Unterhalt der Schieneninfrastruktur eingesetzt. Das Gesetz regelt die Ausnahmen für Sicherheits- und Engpassprojekte.',
  },
  {
    id: 'vi-596',
    typ: 'initiative',
    quelle: 'beispiel',
    titel: '«Transparenz bei der Beschaffung von Rüstungsgütern»',
    frist: '9. August 2028',
    kennung: 'Vorprüfung Nr. 596 (Beispiel)',
    auszug:
      'Die Bundesverfassung wird wie folgt geändert: Art. 60a (neu) – Offenlegung von Rüstungsbeschaffungen …',
    wortlaut:
      'Die Bundesverfassung wird wie folgt geändert: Art. 60a (neu) – Offenlegung von Rüstungsbeschaffungen. Der Bund veröffentlicht Umfang, Kosten und Vertragspartner von Rüstungsbeschaffungen ab einem im Gesetz festgelegten Schwellenwert. Ausnahmen sind nur zum Schutz überwiegender Sicherheitsinteressen zulässig und werden begründet.',
  },
  {
    id: 'ref-dsg',
    typ: 'referendum',
    quelle: 'beispiel',
    titel: 'Änderung des Datenschutzgesetzes vom 26. September 2026',
    frist: '14. Januar 2027',
    kennung: 'BBl 2026 2210 (Beispiel)',
    auszug:
      'Referendum gegen die Änderung des Datenschutzgesetzes vom 26. September 2026, insbesondere die Bestimmungen zur Datenbearbeitung durch Bundesstellen …',
    wortlaut:
      'Die unterzeichnenden, in eidgenössischen Angelegenheiten stimmberechtigten Personen verlangen mit Bezug auf Art. 141 der Bundesverfassung, dass die Änderung des Datenschutzgesetzes vom 26. September 2026 der Abstimmung des Volkes unterbreitet werde. Betroffen sind namentlich die neuen Bestimmungen zur Datenbearbeitung durch Bundesstellen und zur Aufsicht.',
  },
  {
    id: 'ref-ahv',
    typ: 'referendum',
    quelle: 'beispiel',
    titel: 'Bundesbeschluss über die Finanzierung der AHV vom 3. Juli 2026',
    frist: '22. Oktober 2026',
    kennung: 'BBl 2026 1655 (Beispiel)',
    auszug: 'Referendum gegen den Bundesbeschluss über die Finanzierung der AHV vom 3. Juli 2026 …',
    wortlaut:
      'Die unterzeichnenden, in eidgenössischen Angelegenheiten stimmberechtigten Personen verlangen mit Bezug auf Art. 141 der Bundesverfassung, dass der Bundesbeschluss über die Finanzierung der AHV vom 3. Juli 2026 der Abstimmung des Volkes unterbreitet werde.',
  },
]

