/** Bundes-Lockup, Trenner, Anwendungsname und Pilot-Kennzeichnung. */
export function AppHeader() {
  return (
    <header className="appheader">
      <img
        src="/BundLogo.svg"
        alt="Schweizerische Eidgenossenschaft"
        className="appheader__logo"
      />
      <span className="appheader__divider" aria-hidden="true" />
      <span className="appheader__titles">
        <span className="appheader__title">E-Collecting</span>
        <span className="badge badge--pilot badge--neutral">Pilot</span>
      </span>
    </header>
  )
}
