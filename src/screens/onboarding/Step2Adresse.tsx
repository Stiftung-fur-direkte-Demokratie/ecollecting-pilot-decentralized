import type { StrassenEintrag } from '../../data/adressen'
import { Note, StickyFooter, SuccessCard } from '../../components/blocks'

interface Step2Props {
  strasse: string
  plz: string
  ort: string
  suggestions: StrassenEintrag[]
  resolving: boolean
  gemeindeLabel: string
  bfs: string
  kanton: string
  /** Erst wenn die politische Gemeinde aufgelöst ist, geht es weiter. */
  resolved: boolean
  onStrasse: (value: string) => void
  onStrasseFocus: () => void
  onPlz: (value: string) => void
  onOrt: (value: string) => void
  onPick: (eintrag: StrassenEintrag) => void
  onWeiter: () => void
}

/** Schritt 2: Wohnadresse selbst deklarieren, Gemeinde wird daraus ermittelt. */
export function Step2Adresse({
  strasse,
  plz,
  ort,
  suggestions,
  resolving,
  gemeindeLabel,
  bfs,
  kanton,
  resolved,
  onStrasse,
  onStrasseFocus,
  onPlz,
  onOrt,
  onPick,
  onWeiter,
}: Step2Props) {
  return (
    <>
      <h1 className="screen-onb__title">Mit deiner Gemeinde verbinden</h1>
      <p className="screen-onb__lead">Selbstdeklaration – wie auf dem Papierbogen</p>

      <label htmlFor="ec-str" className="field__label field__label--block">
        Strasse und Hausnummer
      </label>
      <div className="autocomplete screen-onb__strasse">
        <input
          id="ec-str"
          type="text"
          autoComplete="off"
          className="input"
          value={strasse}
          onChange={(e) => onStrasse(e.target.value)}
          onFocus={onStrasseFocus}
          placeholder="z. B. Thunstrasse 2"
        />
        {suggestions.length > 0 && (
          <ul className="suggestions" role="listbox" aria-label="Adressvorschläge">
            {suggestions.map((sug) => (
              <li key={sug.strasse}>
                <button type="button" className="suggestion" onClick={() => onPick(sug)}>
                  <span>{sug.strasse}</span>
                  <span className="suggestion__meta">
                    {sug.plz} {sug.ort}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="screen-onb__plzort">
        <span className="field">
          <label htmlFor="ec-plz" className="field__label">
            Postleitzahl
          </label>
          <input
            id="ec-plz"
            type="text"
            inputMode="numeric"
            maxLength={4}
            className="input"
            value={plz}
            onChange={(e) => onPlz(e.target.value)}
          />
        </span>
        <span className="field">
          <label htmlFor="ec-ort" className="field__label">
            Ort
          </label>
          <input
            id="ec-ort"
            type="text"
            className="input"
            value={ort}
            onChange={(e) => onOrt(e.target.value)}
          />
        </span>
      </div>

      {resolving && (
        <div className="resolving">
          <span className="spinner" aria-hidden="true" />
          <span className="resolving__text">Gemeinde wird im amtlichen Verzeichnis ermittelt …</span>
        </div>
      )}

      {resolved && (
        <SuccessCard
          className="screen-onb__gemeinde"
          wide
          title={`Politische Gemeinde: ${gemeindeLabel}`}
          meta={
            <>
              BFS-Nr. {bfs} · {kanton}
              <br />
              Quelle: amtliches Gemeindeverzeichnis
            </>
          }
        />
      )}

      <Note>
        Die Adresse steuert nur die Zustellung an die zuständige Gemeinde. Verbindlich geprüft wird
        sie – wie beim Papierbogen – erst durch das Stimmregister deiner Gemeinde.
      </Note>

      <StickyFooter>
        <button
          type="button"
          onClick={onWeiter}
          disabled={!resolved}
          className="btn btn--primary"
        >
          Mit Gemeinde verbinden
        </button>
      </StickyFooter>
    </>
  )
}
