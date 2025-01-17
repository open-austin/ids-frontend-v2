// app/layout.tsx
import { Inter } from 'next/font/google'
import type { Metadata } from 'next/types'
import Navbar from './components/navigation/navbar'
import './globals.css'

// Initialize the Inter font with Latin subset
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
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
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
