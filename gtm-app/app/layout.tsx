import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WoterClip — Tu estrategia de ventas basada en señales',
  description: 'Detecta quién necesita lo que tú vendes, ahora mismo. Sin Clay, sin Sales Navigator, sin complicaciones.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
