import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/ui/theme-provider.tsx'
import { ModeToggle } from './components/ui/mode-toggle.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme"><ModeToggle/><App /></ThemeProvider>
  </StrictMode>,
)
