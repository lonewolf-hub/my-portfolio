'use client'

import { useEffect } from 'react'

const ThemeScript = () => {
  useEffect(() => {
    try {
      const theme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const isDark = theme === 'dark' || (!theme && prefersDark)

      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } catch (_) {}
  }, [])

  return null
}

export default ThemeScript
