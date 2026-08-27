import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

// Design-System-Tokens zuerst, dann die eigenen Schichten.
import './styles/tokens/fonts.css'
import './styles/tokens/colors.css'
import './styles/tokens/typography.css'
import './styles/tokens/spacing.css'
import './styles/tokens/radii.css'
import './styles/tokens/shadows.css'
import './styles/tokens/motion.css'
import './styles/base.css'
import './styles/components.css'
import './styles/screens.css'

const root = document.getElementById('root')
if (!root) throw new Error('Root-Element #root fehlt')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
