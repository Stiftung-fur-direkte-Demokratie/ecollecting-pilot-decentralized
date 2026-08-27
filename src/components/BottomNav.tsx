import { Icon, type IconName } from './Icon'
import type { Screen } from '../state/types'

interface BottomNavProps {
  screen: Screen
  onHome: () => void
  onListe: () => void
  onProfil: () => void
}

const ITEMS: { screen: Screen; label: string; icon: IconName }[] = [
  { screen: 'home', label: 'Start', icon: 'Home' },
  { screen: 'liste', label: 'Begehren', icon: 'Menu' },
  { screen: 'profil', label: 'Profil', icon: 'User' },
]

/** Einzige Navigation der App – der Header trägt bewusst kein Menü. */
export function BottomNav({ screen, onHome, onListe, onProfil }: BottomNavProps) {
  const handlers: Record<string, () => void> = {
    home: onHome,
    liste: onListe,
    profil: onProfil,
  }

  return (
    <nav className="bottomnav" aria-label="Hauptnavigation">
      {ITEMS.map((item) => (
        <button
          key={item.screen}
          type="button"
          onClick={handlers[item.screen]}
          aria-current={screen === item.screen ? 'page' : undefined}
          className="navbtn"
        >
          <Icon name={item.icon} size={22} />
          {item.label}
        </button>
      ))}
    </nav>
  )
}
