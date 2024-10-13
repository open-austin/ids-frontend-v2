// app/layout.tsx
import type { Metadata } from 'next'
import Navbar from './components/navigation/navbar'
import './globals.css' // Import your global styles

export const metadata: Metadata = {
  title: 'Texas Defense Data',
  description: 'The only site for public defense data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
