/** Nachgebildete Gerät-Statusleiste des Mockups. */
export function StatusBar() {
  return (
    <div className="statusbar" aria-hidden="true">
      <span className="statusbar__time">9:41</span>
      <span className="statusbar__bars">
        <span className="statusbar__bar" />
        <span className="statusbar__bar" />
        <span className="statusbar__bar" />
      </span>
    </div>
  )
}
