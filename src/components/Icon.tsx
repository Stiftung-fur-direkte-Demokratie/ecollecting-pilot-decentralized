export type IconName =
  | 'ArrowUpRight'
  | 'Building'
  | 'Cancel'
  | 'Checkmark'
  | 'CheckmarkBold'
  | 'ChevronDown'
  | 'ChevronLeft'
  | 'ChevronRight'
  | 'FileUser'
  | 'Home'
  | 'Info'
  | 'Key'
  | 'Lock'
  | 'MapMarker'
  | 'Menu'
  | 'Mobile'
  | 'User'
  | 'UserCheckmark'
  | 'Warning'

interface IconProps {
  name: IconName
  /** Kantenlänge in px – die Icons sind quadratisch. */
  size: number
  className?: string
  style?: React.CSSProperties
}

/**
 * Rendert ein Icon des Design-Systems als CSS-Maske, damit es die
 * Textfarbe (`currentColor`) des Elternelements übernimmt.
 */
export function Icon({ name, size, className, style }: IconProps) {
  const mask = `url(/icons/${name}.svg)`
  return (
    <span
      aria-hidden="true"
      className={className ? `icon ${className}` : 'icon'}
      style={{
        width: size,
        height: size,
        WebkitMaskImage: mask,
        maskImage: mask,
        ...style,
      }}
    />
  )
}
