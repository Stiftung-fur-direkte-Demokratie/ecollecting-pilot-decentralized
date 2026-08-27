# E-Collecting – Pilotbetrieb Bund

Klickbarer Mobile-Prototyp (390 × 844, Deutsch) für die digitale Unterstützung von
Volksinitiativen und Referenden. Umgesetzt nach dem Design-Handoff aus Claude Design,
auf Basis des **Design Systems der Schweizer Bundesverwaltung**.

> Prototyp des Pilotbetriebs. Keine echte Kryptografie, kein sedex, keine echte
> swiyu-Anbindung – alle Vorgänge sind simuliert.

## Entwicklung

```bash
npm install
npm run dev        # Vite-Devserver auf http://localhost:5173
npm run build      # Typecheck + Produktionsbuild nach dist/
npm run preview    # Produktionsbuild lokal ausliefern
npm run typecheck  # nur TypeScript prüfen
```

## Flow

```
Willkommen → Einführung → Verbindung einrichten (3 Schritte) → Verbindung aktiv → Start
                                                                                    │
                            Volksbegehren ─→ Detail ─→ Hinweis + Slide-to-confirm ─→ Face ID
                                                                                    │
                                                          Übermittlung (Animation) ─→ Quittung
```

- **Verbindung einrichten** – E-ID über ein simuliertes swiyu-Sheet vorweisen
  (AHV-Nr., Name, Geburtsdatum), Wohnadresse selbst deklarieren, Gemeinde bestätigen.
  Der Weiter-Button in Schritt 2 bleibt gesperrt, bis die politische Gemeinde
  aufgelöst ist (`Muri bei Bern (BE) · BFS-Nr. 356`).
- **Volksbegehren** – Tabs *Alle / Initiativen / Referenden*. Bewusst **ohne
  Unterschriftenzähler** (Datensparsamkeit).
- **Unterstützen** – zweistufig: Hinweis-Modal mit Bestätigungs-Checkbox
  (Art. 281 f. StGB) plus Slide-to-confirm, das erst nach dem Ankreuzen scharf
  geschaltet wird, danach Face-ID-Simulation.
- **Quittung** – Die Gemeinde bestätigt nur den **Empfang der Anfrage** zur
  Bescheinigung, nicht die Bescheinigung selbst. Der Hinweis, dass die Quittung
  ausschliesslich in der swiyu-Wallet liegt, erscheint erst mit dieser Bestätigung.
- Bereits unterstützte Begehren zeigen «Bereits unterstützt» statt des Buttons.
  Der Zustand hält für die Dauer der Session.

## Aufbau

```
src/
├─ App.tsx                 Gerätrahmen, Screen-Routing, Overlays
├─ state/
│  ├─ useEcollecting.ts    gesamter Prototyp-Zustand und alle Aktionen
│  ├─ types.ts             Screens, Dialoge, Konfiguration
│  └─ format.ts            Datums- und Kennungsformate
├─ data/
│  ├─ begehren.ts          Beispieldaten der Volksbegehren
│  └─ adressen.ts          Strassen-Autocomplete und Gemeindeverzeichnis
├─ screens/                ein Modul pro Screen
├─ overlays/               Sheets, Modals, Face ID
├─ components/             Header, Navigation, Stepper, Bausteine
└─ styles/
   ├─ tokens/              Design-System-Tokens (unverändert übernommen)
   ├─ base.css             Reset, Rahmen, Keyframes
   ├─ components.css       wiederverwendete Bausteine
   └─ screens.css          Screen-spezifische Layouts
```

Farben, Typografie, Radien, Schatten und Motion kommen ausschliesslich aus den
Tokens des Design-Systems: Noto Sans, Primärrot `#d8232a`, Secondary `#2f4356`,
2px-Radius auf Buttons, Badges als Pills, violetter Fokusring.

## Amtliche Daten (LINDAS)

Die Volksbegehren werden beim Start aus dem SPARQL-Endpunkt von LINDAS geholt.
Die beiden Abfragen liegen unverändert unter `src/data/queries/` und stammen aus
den Cubes `popular-initiative` und `referendum`:

- **Initiativen** – Status *hängig*; die App zeigt davon nur die Phase
  *im Sammelstadium*, weil nur dort noch unterschrieben werden kann.
  Sammelfrist = `sammelbeginn` + 18 Monate (Art. 71 Abs. 1 BPR).
- **Referenden** – gefiltert auf *laufende Referendumsfrist*.

Ist der Endpunkt nicht erreichbar (Netzsperre, CORS, Wartung) oder liefert er
nichts, bleiben die Beispieldaten aus `src/data/begehren.ts` stehen; die
Fusszeile der Liste weist die Quelle entsprechend aus. Im Dev-Betrieb läuft die
Abfrage über den Vite-Proxy `/lindas`, für einen Build kann der Endpunkt über
`VITE_LINDAS_ENDPOINT` auf einen eigenen Proxy gelegt werden.

Zwei Dinge bewusst nicht übernommen:

- **Unterschriftenzahlen.** Beide Cubes liefern sie mit; die App zeigt aus
  Datensparsamkeit keine Zähler.
- **Referendumsfrist als Datum.** Die Frist beträgt 100 Tage ab Publikation im
  Bundesblatt (Art. 141 BV); die Abfrage liefert nur das Beschlussdatum des
  Parlaments. Statt ein auf Wochen geschätztes Datum anzuzeigen, steht dort
  «Referendumsfrist läuft».

LINDAS liefert keinen Gesetzestext. Für amtlich bezogene Begehren entfällt der
Wortlaut-Auszug; das Detail verweist stattdessen auf die BBl-Fundstelle.

## Konfiguration

`App` nimmt optional eine `PrototypConfig` entgegen – dieselben Stellschrauben wie
im Design-Prototyp:

| Feld                | Standard          | Wirkung                                            |
| ------------------- | ----------------- | -------------------------------------------------- |
| `startScreen`       | `welcome`         | Einstiegs-Screen für Demos                          |
| `certDelaySeconds`  | `5`               | Verzögerung bis zur Empfangsbestätigung             |
| `gemeindeName`      | `Muri bei Bern`   | Gemeinde, solange keine Adresse aufgelöst ist       |

## Barrierefreiheit

Kontraste nach Design-System, Touch-Targets ≥ 44 px (automatisch geprüft),
sichtbarer Fokusring, `aria-live` für Statuswechsel, Slide-to-confirm auch per
Tastatur (Pfeiltasten / Enter), Overlays schliessen mit Escape,
`prefers-reduced-motion` wird respektiert.

## Design-Handoff

Der ursprüngliche Export aus Claude Design liegt unverändert unter `project/`
(Prototyp, Design-System, Icons, Mockups), die Gesprächsverläufe unter `chats/`.
`project/HANDOFF.md` ist die Anleitung, die dem Export beilag.
