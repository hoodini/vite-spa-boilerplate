import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AccessibilityControls = ({ 
  theme, 
  toggleTheme, 
  highContrast, 
  toggleHighContrast, 
  reducedMotion, 
  setReducedMotion 
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const announceChange = (message) => {
    const liveRegion = document.getElementById('aria-live-region')
    if (liveRegion) {
      liveRegion.textContent = message
      setTimeout(() => {
        liveRegion.textContent = ''
      }, 1000)
    }
  }

  const handleThemeToggle = () => {
    toggleTheme()
    announceChange(`Switched to ${theme === 'dark' ? 'light' : 'dark'} mode`)
  }

  const handleContrastToggle = () => {
    toggleHighContrast()
    announceChange(`${highContrast ? 'Disabled' : 'Enabled'} high contrast mode`)
  }

  const handleMotionToggle = () => {
    setReducedMotion(!reducedMotion)
    announceChange(`${reducedMotion ? 'Enabled' : 'Disabled'} animations`)
  }

  return (
    <div className="fixed top-20 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-neon-purple/20 border border-neon-purple rounded-full flex items-center justify-center backdrop-blur-lg hover:bg-neon-purple/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-purple"
        aria-label="Open accessibility controls"
        aria-expanded={isOpen}
        aria-controls="accessibility-menu"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-white"
          aria-hidden="true"
        >
          <path 
            d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 9.5V10.5L21 13V11L19 10.24V9.76L21 9ZM7.5 7C8.33 7 9 7.67 9 8.5S8.33 10 7.5 10 6 9.33 6 8.5 6.67 7 7.5 7ZM5.5 17C6.33 17 7 17.67 7 18.5S6.33 20 5.5 20 4 19.33 4 18.5 4.67 17 5.5 17ZM16.5 17C17.33 17 18 17.67 18 18.5S17.33 20 16.5 20 15 19.33 15 18.5 15.67 17 16.5 17ZM12 7L13.5 10H10.5L12 7Z" 
            fill="currentColor"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-menu"
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-14 right-0 w-64 bg-space-gray/90 backdrop-blur-lg border border-neon-purple/30 rounded-lg p-4 shadow-xl"
            role="menu"
            aria-label="Accessibility options"
          >
            <h3 className="text-white font-semibold mb-4 text-sm">
              Accessibility Controls
            </h3>

            <div className="space-y-3">
              <div 
                className="flex items-center justify-between"
                role="menuitem"
              >
                <label 
                  htmlFor="theme-toggle"
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  {theme === 'dark' ? '🌙' : '☀️'} {theme === 'dark' ? 'Dark' : 'Light'} Mode
                </label>
                <button
                  id="theme-toggle"
                  onClick={handleThemeToggle}
                  className="w-10 h-6 bg-neon-purple/30 rounded-full relative focus:outline-none focus:ring-2 focus:ring-neon-purple transition-all duration-300"
                  aria-pressed={theme === 'light'}
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full absolute top-1"
                    animate={{ x: theme === 'light' ? 18 : 2 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </div>

              <div 
                className="flex items-center justify-between"
                role="menuitem"
              >
                <label 
                  htmlFor="contrast-toggle"
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  🔆 High Contrast
                </label>
                <button
                  id="contrast-toggle"
                  onClick={handleContrastToggle}
                  className="w-10 h-6 bg-neon-purple/30 rounded-full relative focus:outline-none focus:ring-2 focus:ring-neon-purple transition-all duration-300"
                  aria-pressed={highContrast}
                  aria-label={`${highContrast ? 'Disable' : 'Enable'} high contrast mode`}
                >
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full absolute top-1"
                    animate={{ x: highContrast ? 18 : 2 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </div>

              <div 
                className="flex items-center justify-between"
                role="menuitem"
              >
                <label 
                  htmlFor="motion-toggle"
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  🚫 Reduce Motion
                </label>
                <button
                  id="motion-toggle"
                  onClick={handleMotionToggle}
                  className="w-10 h-6 bg-neon-purple/30 rounded-full relative focus:outline-none focus:ring-2 focus:ring-neon-purple transition-all duration-300"
                  aria-pressed={reducedMotion}
                  aria-label={`${reducedMotion ? 'Enable' : 'Disable'} animations`}
                >
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full absolute top-1"
                    animate={{ x: reducedMotion ? 18 : 2 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neon-purple/20">
              <p className="text-xs text-gray-400">
                Use keyboard navigation (Tab) to browse the site
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AccessibilityControls