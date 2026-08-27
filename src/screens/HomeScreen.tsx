import type { Ecollecting } from '../state/useEcollecting'
import { Icon } from '../components/Icon'
import { Note, Panel } from '../components/blocks'

/** Startseite: Pilotbetrieb erklären, Verbindungsstatus, eigene Bekundungen. */
export function HomeScreen({ ec }: { ec: Ecollecting }) {
  const { state, actions, find } = ec
  const supportedIds = Object.keys(state.supported)

  return (
    <div className="screen-home" data-screen-label="Start">
      <p className="screen-home__eyebrow">Bundeskanzlei BK</p>
      <h1 className="screen-home__title">Pilotbetrieb E-Collecting</h1>
      <p className="screen-home__lead">
        Der Bund erprobt die digitale Sammlung von Unterschriften für Volksinitiativen und
        Referenden. In diesem Pilotbetrieb kannst du laufende Volksbegehren ansehen und – sobald die
        Verbindung zu deiner Gemeinde eingerichtet ist – digital unterstützen.
      </p>

      {!state.kanalAktiv && (
        <>
          <Note>
            <strong>Es besteht noch keine Verbindung mit einer Gemeinde.</strong> Damit E-Collecting
            möglich ist, muss diese Verbindung zuerst eingerichtet werden. Ansehen kannst du die
            Volksbegehren auch ohne Verbindung.
          </Note>
          <button
            type="button"
            onClick={actions.goOnb1}
            className="btn btn--lg btn--primary screen-home__setup"
          >
            Verbindung einrichten
          </button>
        </>
      )}

      <button
        type="button"
        onClick={actions.goListe}
        className="btn btn--secondary screen-home__browse"
      >
        Volksbegehren ansehen
      </button>

      {supportedIds.length > 0 && (
        <div className="suplist">
          <p className="suplist__title">Meine Willensbekundungen</p>
          {supportedIds.map((id) => {
            const begehren = find(id)
            const empfangen = state.cert[id] === 'empfangen'
            return (
              <button
                key={id}
                type="button"
                onClick={() => actions.openDetail(id)}
                className="suplist__item"
              >
                <span className="suplist__itemtitle">{begehren.titel}</span>
                <span
                  className={`badge badge--status ${empfangen ? 'badge--green' : 'badge--neutral'}`}
                >
                  {empfangen ? 'Empfang bei Gemeinde bestätigt' : 'Empfangsbestätigung ausstehend'}
                </span>
              </button>
            )
          })}
        </div>
      )}

      <div className="homeinfo">
        <h2 className="h2">So funktioniert der Pilotbetrieb</h2>
        <div className="infoblocks">
          <Panel tight>
            <strong>Deine Gemeinde bleibt zuständig.</strong> Die Willensbekundung wird auf deinem
            Gerät signiert und verschlüsselt der zuständigen Gemeinde zugestellt. Lesen kann sie nur
            diese Gemeinde.
          </Panel>
          <Panel tight>
            <strong>Datensparsamkeit.</strong> Die App zeigt keine Unterschriftenzähler und führt
            kein Konto. Nachweise liegen in deiner swiyu-Wallet.
          </Panel>
          <Panel tight>
            <strong>Amtliche Daten.</strong> Volksbegehren und Gemeindezuordnung stammen aus den
            amtlichen Verzeichnissen des Bundes (LINDAS, Gemeindeverzeichnis BFS).
          </Panel>
        </div>

        <h2 className="h2">Die Bundeskanzlei BK</h2>
        <p className="homeinfo__text">
          Die Bundeskanzlei ist die Stabsstelle des Bundesrats. Als Hüterin der Volksrechte
          organisiert sie die eidgenössischen Wahlen und Abstimmungen und prüft Volksinitiativen und
          Referenden. Sie führt auch die Arbeiten zum E-Collecting.
        </p>
        <a
          href="https://www.bk.admin.ch/de"
          target="_blank"
          rel="noreferrer"
          className="extlink"
        >
          <Icon name="ArrowUpRight" size={16} />
          bk.admin.ch – Bundeskanzlei BK
        </a>
        <a
          href="https://www.bk.admin.ch/de/e-collecting"
          target="_blank"
          rel="noreferrer"
          className="extlink"
        >
          <Icon name="ArrowUpRight" size={16} />
          bk.admin.ch/e-collecting – Projekt E-Collecting
        </a>
        <p className="footnote">Pilotbetrieb der Bundeskanzlei</p>
      </div>
    </div>
  )
}
