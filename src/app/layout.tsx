import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import ThemeScript from './core/helpers/ThemeScript'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Jai | Full Stack Developer',
  description: 'Have a Great Day 👋',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/icon/j.png" />
      </head>
      <body className={urbanist.className}>
        <ThemeScript />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
