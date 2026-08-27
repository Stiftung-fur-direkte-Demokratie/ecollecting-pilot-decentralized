import { AppHeader } from './components/AppHeader'
import { BottomNav } from './components/BottomNav'
import { StatusBar } from './components/StatusBar'
import { findBegehren } from './data/begehren'
import { FaceOverlay } from './overlays/FaceOverlay'
import { NoKanalDialog } from './overlays/NoKanalDialog'
import { ReceiptDialog } from './overlays/ReceiptDialog'
import { StrafDialog } from './overlays/StrafDialog'
import { SwiyuSheet } from './overlays/SwiyuSheet'
import { VerbindungSheet } from './overlays/VerbindungSheet'
import { WortlautSheet } from './overlays/WortlautSheet'
import { AktivScreen } from './screens/AktivScreen'
import { DetailScreen } from './screens/DetailScreen'
import { HomeScreen } from './screens/HomeScreen'
import { IntroScreen } from './screens/IntroScreen'
import { ListeScreen } from './screens/ListeScreen'
import { OnboardingScreen } from './screens/OnboardingScreen'
import { ProfilScreen } from './screens/ProfilScreen'
import { QuittungScreen } from './screens/QuittungScreen'
import { SendenScreen } from './screens/SendenScreen'
import { WelcomeScreen } from './screens/WelcomeScreen'
import { useEcollecting } from './state/useEcollecting'
import type { PrototypConfig, Screen } from './state/types'

/** Screens, die den App-Header tragen. Übermittlung und Quittung laufen ohne. */
const MIT_HEADER: Screen[] = ['welcome', 'intro', 'onb1', 'onb2', 'onb3', 'home', 'liste', 'profil']
/** Screens mit Fusszeilen-Navigation. */
const MIT_NAV: Screen[] = ['home', 'liste', 'profil']

export function App({ config }: { config?: PrototypConfig }) {
  const ec = useEcollecting(config)
  const { state, actions, gemeindeLabel, gemeindeName } = ec
  const aktuellesBegehren = findBegehren(state.currentId)

  return (
    <div className="stage">
      <div className="phone" data-screen-label="App">
        <StatusBar />
        {MIT_HEADER.includes(state.screen) && <AppHeader />}

        <div className="screenarea">
          {state.screen === 'welcome' && (
            <WelcomeScreen onStart={actions.goIntro} onListe={actions.goListe} />
          )}
          {state.screen === 'intro' && (
            <IntroScreen onSetup={actions.goOnb1} onListe={actions.goListe} />
          )}
          {(state.screen === 'onb1' || state.screen === 'onb2' || state.screen === 'onb3') && (
            <OnboardingScreen ec={ec} />
          )}
          {state.screen === 'aktiv' && (
            <AktivScreen gemeindeLabel={gemeindeLabel} onWeiter={actions.goHome} />
          )}
          {state.screen === 'home' && <HomeScreen ec={ec} />}
          {state.screen === 'liste' && <ListeScreen ec={ec} />}
          {state.screen === 'detail' && <DetailScreen ec={ec} />}
          {state.screen === 'senden' && (
            <SendenScreen stage={state.sendStage} gemeindeName={gemeindeName} />
          )}
          {state.screen === 'quittung' && <QuittungScreen ec={ec} />}
          {state.screen === 'profil' && <ProfilScreen ec={ec} />}
        </div>

        {MIT_NAV.includes(state.screen) && (
          <BottomNav
            screen={state.screen}
            onHome={actions.goHome}
            onListe={actions.goListe}
            onProfil={actions.goProfil}
          />
        )}

        {state.sheetOpen && (
          <SwiyuSheet onConfirm={actions.confirmEid} onClose={actions.closeSheet} />
        )}
        {state.dialog === 'straf' && <StrafDialog ec={ec} />}
        {state.dialog === 'face' && (
          <FaceOverlay text={state.faceText} gemeindeName={gemeindeName} />
        )}
        {state.dialog === 'wortlaut' && (
          <WortlautSheet wortlaut={aktuellesBegehren.wortlaut} onClose={actions.closeDialog} />
        )}
        {state.dialog === 'receipt' && (
          <ReceiptDialog titel={aktuellesBegehren.titel} onClose={actions.closeDialog} />
        )}
        {state.dialog === 'nokanal' && (
          <NoKanalDialog onSetup={actions.goOnb1} onClose={actions.closeDialog} />
        )}
        {state.dialog === 'verbindung' && (
          <VerbindungSheet
            gemeindeLabel={gemeindeLabel}
            onAufheben={actions.kanalAufheben}
            onClose={actions.closeDialog}
          />
        )}
      </div>
    </div>
  )
}
