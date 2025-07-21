import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Technology from './components/Technology'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'
import AccessibilityControls from './components/AccessibilityControls'

function App() {
  const [theme, setTheme] = useState('dark')
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    // Check user preferences on initial load only
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    // Default to dark mode for the sci-fi theme unless explicitly set to light
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
    // Keep dark as default since it's a sci-fi brain interface theme
    
    setHighContrast(prefersHighContrast)
    setReducedMotion(prefersReducedMotion)
  }, [])

  useEffect(() => {
    // Apply theme to body whenever theme or highContrast changes
    document.body.className = `${theme === 'light' ? 'light-mode' : 'dark-mode'} ${highContrast ? 'high-contrast' : ''}`
  }, [theme, highContrast])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev)
  }

  return (
    <div className="min-h-screen">
      {/* Skip to content link for screen readers */}
      <a 
        href="#main-content" 
        className="skip-to-content"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>

      {/* ARIA live region for dynamic announcements */}
      <div 
        id="aria-live-region" 
        aria-live="polite" 
        aria-atomic="true" 
        className="aria-live-region"
      />

      <AccessibilityControls 
        theme={theme}
        toggleTheme={toggleTheme}
        highContrast={highContrast}
        toggleHighContrast={toggleHighContrast}
        reducedMotion={reducedMotion}
        setReducedMotion={setReducedMotion}
      />

      <Navigation />

      <main id="main-content" role="main">
        <AnimatePresence mode="wait">
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.5 }}
          >
            <Hero reducedMotion={reducedMotion} />
            <Features reducedMotion={reducedMotion} />
            <Technology reducedMotion={reducedMotion} />
            <Pricing reducedMotion={reducedMotion} />
            <FAQ />
            <Waitlist />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default App