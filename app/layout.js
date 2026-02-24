import './globals.css'
import { useEffect, useState } from 'react'

export const metadata = {
  title: 'Stobo GmbH - Präzision in Technik',
  description: 'Technische Lösungen aus Köln – modern, innovativ, präzise.'
}

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light')

  // System Dark Mode detection
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark')
      document.documentElement.dataset.theme = 'dark'
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.documentElement.dataset.theme = 'dark'
    } else {
      setTheme('light')
      document.documentElement.dataset.theme = 'light'
    }
  }

  return (
    <html lang="de" data-theme={theme}>
      <body>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem 2rem',
            alignItems: 'center',
            borderBottom: '1px solid var(--border)'
          }}
        >
          <h1 style={{ fontWeight: 700, fontSize: '1.5rem' }}>Stobo GmbH</h1>
          <button
            onClick={toggleTheme}
            style={{
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              background: 'var(--btn-bg)',
              color: 'var(--btn-text)',
              border: 'none',
              borderRadius: '4px'
            }}
            aria-label="Toggle Dark Mode"
          >
            {theme === 'light' ? 'Dunkel' : 'Hell'}
          </button>
        </header>
        {children}
        <footer
          style={{
            marginTop: '4rem',
            padding: '2rem',
            textAlign: 'center',
            borderTop: '1px solid var(--border)',
            color: 'var(--text-muted)',
            fontSize: '0.9rem'
          }}
        >
          © 2026 Stobo GmbH, Köln
        </footer>
      </body>
    </html>
  )
}
