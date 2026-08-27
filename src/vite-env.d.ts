/// <reference types="vite/client" />

declare module '*.sparql?raw' {
  const content: string
  export default content
}

interface ImportMetaEnv {
  /** Abweichender SPARQL-Endpunkt, z. B. ein eigener LINDAS-Proxy. */
  readonly VITE_LINDAS_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
