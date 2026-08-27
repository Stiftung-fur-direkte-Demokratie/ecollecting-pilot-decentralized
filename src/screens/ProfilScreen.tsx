import type { Ecollecting } from '../state/useEcollecting'
import { Icon } from '../components/Icon'
import { Note, Panel } from '../components/blocks'

/** Profil: E-ID-Attribute, Gemeindeverbindung und Prototyp-Reset. */
export function ProfilScreen({ ec }: { ec: Ecollecting }) {
  const { state, actions, gemeindeLabel, bfs, kanalSeit } = ec
  const gemeindeZeile = state.kanalAktiv ? `${gemeindeLabel} · BFS ${bfs}` : 'Noch nicht verbunden'

  return (
    <div className="screen-profil" data-screen-label="Profil">
      <h1 className="screen-profil__title">Profil</h1>

      <div className="card">
        <div className="datarow">
          <span className="datarow__key">Name</span>
          <span className="datarow__val datarow__val--lg">Anna Beispiel</span>
        </div>
        <div className="datarow">
          <span className="datarow__key">Geburtsdatum</span>
          <span className="datarow__val datarow__val--lg">12.04.1991</span>
        </div>
        <div className="datarow">
          <span className="datarow__key">AHV-Nr.</span>
          <span className="datarow__val datarow__val--lg">756.•••.••••.••</span>
        </div>
        <div className="datarow">
          <span className="datarow__key">Gemeinde</span>
          <span className="datarow__val datarow__val--lg">{gemeindeZeile}</span>
        </div>
      </div>

      <Panel>
        Attribute stammen aus der E-ID und bleiben auf dem Gerät. Die App führt kein Konto und keine
        zentrale Nutzerliste.
      </Panel>

      <h2 className="h2">Meine Verbindung</h2>

      {state.kanalAktiv ? (
        <>
          <div className="conncard">
            <div className="conncard__head">
              <span className="conncard__icon">
                <Icon name="CheckmarkBold" size={22} />
              </span>
              <span className="conncard__body">
                <span className="conncard__title">Verbunden mit {gemeindeLabel}</span>
                <span className="conncard__meta">
                  BFS-Gemeindenummer {bfs}
                  <br />
                  Verbindung aktiv seit {kanalSeit}
                </span>
              </span>
            </div>
            <div className="conncard__badges">
              <span className="badge badge--green">E-ID geprüft</span>
              <span className="badge badge--neutral">Nur auf diesem Gerät</span>
            </div>
          </div>
          <button
            type="button"
            onClick={actions.openVerbindung}
            className="btn btn--secondary screen-profil__action"
          >
            Verbindung verwalten
          </button>
        </>
      ) : (
        <>
          <Note>
            Es besteht noch keine Verbindung mit einer Gemeinde. Ohne Verbindung kannst du
            Volksbegehren ansehen, aber nicht digital unterstützen.
          </Note>
          <button
            type="button"
            onClick={actions.goOnb1}
            className="btn btn--primary screen-profil__action"
          >
            Verbindung einrichten
          </button>
        </>
      )}

      <button type="button" onClick={actions.resetAll} className="btn btn--sm btn--secondary">
        Prototyp zurücksetzen
      </button>
    </div>
  )
}
