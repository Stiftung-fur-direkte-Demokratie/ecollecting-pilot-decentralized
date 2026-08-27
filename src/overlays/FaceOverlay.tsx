interface FaceOverlayProps {
  text: string
  gemeindeName: string
}

/** Simulierte Face-ID-Bestätigung vor der Übermittlung. */
export function FaceOverlay({ text, gemeindeName }: FaceOverlayProps) {
  return (
    <div className="overlay overlay--face">
      <span className="faceframe" aria-hidden="true">
        <span className="faceframe__eye faceframe__eye--left" />
        <span className="faceframe__eye faceframe__eye--right" />
        <span className="faceframe__mouth" />
      </span>
      <span className="facetext" aria-live="polite">
        {text}
      </span>
      <span className="facehint">
        Unterschrift auf diesem Gerät · verschlüsselt für {gemeindeName}
      </span>
    </div>
  )
}
