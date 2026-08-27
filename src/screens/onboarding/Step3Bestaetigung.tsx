import { Note, StickyFooter } from '../../components/blocks'

interface Step3Props {
  gemeindeLabel: string
  bfs: string
  onAktivieren: () => void
}

/** Schritt 3: Angaben prüfen und die Verbindung zur Gemeinde aufbauen. */
export function Step3Bestaetigung({ gemeindeLabel, bfs, onAktivieren }: Step3Props) {
  return (
    <>
      <h1 className="screen-onb__title">Verbindung zu deiner Gemeinde aufbauen</h1>
      <p className="screen-onb__lead">Bitte prüfe die Angaben</p>

      <div className="card">
        <div className="datarow">
          <span className="datarow__key">Identität</span>
          <span className="datarow__val">E-ID geprüft (swiyu)</span>
        </div>
        <div className="datarow">
          <span className="datarow__key">Gemeinde</span>
          <span className="datarow__val">
            {gemeindeLabel} · BFS {bfs}
          </span>
        </div>
        <div className="datarow">
          <span className="datarow__key">Unterschrift</span>
          <span className="datarow__val">Erfolgt auf diesem Gerät</span>
        </div>
        <div className="datarow">
          <span className="datarow__key">Zustellung</span>
          <span className="datarow__val">An deine Gemeinde</span>
        </div>
      </div>

      <Note>
        Übermittelt wird nur, welche Gemeinde für dich zuständig ist. Was du unterstützt, erfährt
        niemand ausser deiner Gemeinde.
      </Note>

      <StickyFooter>
        <button type="button" onClick={onAktivieren} className="btn btn--primary">
          Verbindung aufbauen
        </button>
      </StickyFooter>
    </>
  )
}
