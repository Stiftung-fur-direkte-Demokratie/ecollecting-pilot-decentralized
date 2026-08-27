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
