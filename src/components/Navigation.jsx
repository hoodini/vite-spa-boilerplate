import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'hero', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'technology', label: 'Technology' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'Q&A' },
    { id: 'waitlist', label: 'Waitlist' },
  ]

  return (
    <nav 
      className={`nav-container ${isScrolled ? 'scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav-wrapper">
        <button
          onClick={() => scrollToSection('hero')}
          className="nav-logo focus:outline-none focus:ring-2 focus:ring-neon-purple rounded"
          aria-label="MindWave AI - Go to homepage"
        >
          MindWave AI
        </button>

        {/* Desktop Menu */}
        <ul className="nav-menu hidden md:flex" role="menubar">
          {navItems.map((item) => (
            <li key={item.id} role="none">
              <button
                onClick={() => scrollToSection(item.id)}
                className="nav-menu-item"
                role="menuitem"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          onClick={() => scrollToSection('waitlist')}
          className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-blue text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-purple"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Get 40% off - limited time offer"
        >
          🔥 40% OFF - 72hrs Left
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1 focus:outline-none focus:ring-2 focus:ring-neon-purple rounded"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        className="md:hidden bg-space-black/95 backdrop-blur-lg border-t border-neon-purple/20"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMobileMenuOpen ? 'auto' : 0, 
          opacity: isMobileMenuOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
        role="menu"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="container py-4">
          <ul className="space-y-4" role="menubar">
            {navItems.map((item) => (
              <li key={item.id} role="none">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-white hover:text-neon-cyan transition-colors duration-300 py-2 focus:outline-none focus:ring-2 focus:ring-neon-purple rounded"
                  role="menuitem"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li role="none">
              <motion.button
                onClick={() => scrollToSection('waitlist')}
                className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                whileTap={{ scale: 0.95 }}
                role="menuitem"
                aria-label="Get 40% off - limited time offer"
              >
                🔥 40% OFF - 72hrs Left
              </motion.button>
            </li>
          </ul>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navigation