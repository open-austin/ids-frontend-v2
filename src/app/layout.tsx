// app/layout.tsx
import { Inter, Cormorant_Garamond } from 'next/font/google'
import type { Metadata } from 'next/types'
import Navbar from './components/navigation/navbar'
import './globals.css'

// Initialize the Inter font for body text
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Initialize Cormorant Garamond for headings
const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
})

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
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
