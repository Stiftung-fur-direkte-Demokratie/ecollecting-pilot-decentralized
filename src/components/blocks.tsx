import type { ReactNode } from 'react'
import { Icon } from './Icon'

/** Blaue Info-Note mit Akzentbalken – der Hinweis-Baustein des Design-Systems. */
export function Note({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={className ? `note ${className}` : 'note'}>
      <p>{children}</p>
    </div>
  )
}

/** Ruhiger grauer Textblock. */
export function Panel({
  children,
  className,
  tight,
  muted,
}: {
  children: ReactNode
  className?: string
  tight?: boolean
  muted?: boolean
}) {
  const classes = ['panel', tight && 'panel--tight', muted && 'panel--muted', className]
    .filter(Boolean)
    .join(' ')
  return (
    <div className={classes}>
      <p>{children}</p>
    </div>
  )
}

/**
 * Klebender Aktionsbereich am Screen-Ende. Einzelne Primärbuttons sitzen
 * durchgehend hier statt im Fluss des Inhalts.
 */
export function StickyFooter({
  children,
  stretch,
}: {
  children: ReactNode
  stretch?: boolean
}) {
  return (
    <div className={stretch ? 'stickyfooter stickyfooter--stretch' : 'stickyfooter'}>
      {children}
    </div>
  )
}

/** Grüne Erfolgskarte mit Haken, Titel und Metazeile. */
export function SuccessCard({
  title,
  meta,
  compact,
  wide,
  className,
}: {
  title: ReactNode
  meta: ReactNode
  compact?: boolean
  wide?: boolean
  className?: string
}) {
  const classes = ['successcard', compact && 'successcard--compact', className]
    .filter(Boolean)
    .join(' ')
  return (
    <div className={classes}>
      <span className="successcard__icon">
        <Icon name="CheckmarkBold" size={compact ? 16 : 18} />
      </span>
      <span className={wide ? 'successcard__body successcard__body--wide' : 'successcard__body'}>
        <span className="successcard__title">{title}</span>
        <span className="successcard__meta">{meta}</span>
      </span>
    </div>
  )
}

/** Grosser Bestätigungshaken für Abschluss-Screens. */
export function BigCheck({ small }: { small?: boolean }) {
  return (
    <span className={small ? 'bigcheck bigcheck--sm' : 'bigcheck'}>
      <Icon name="CheckmarkBold" size={small ? 38 : 44} />
    </span>
  )
}
