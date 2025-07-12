import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/icon/j.png" />

        {/* ✅ THE CRITICAL INLINE SCRIPT */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(_) {}
              })();
            `,
          }}
        />
      </head>
      <body className={urbanist.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
