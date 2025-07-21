import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Waitlist = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [waitlistCount, setWaitlistCount] = useState(12847)

  // Mock storage for demo purposes
  useEffect(() => {
    const savedCount = localStorage.getItem('waitlistCount')
    if (savedCount) {
      setWaitlistCount(parseInt(savedCount))
    }
  }, [])

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Please enter your email address')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const newCount = waitlistCount + 1
      setWaitlistCount(newCount)
      localStorage.setItem('waitlistCount', newCount.toString())
      
      setIsSubmitted(true)
      setIsSubmitting(false)
      
      // Announce success to screen readers
      const liveRegion = document.getElementById('aria-live-region')
      if (liveRegion) {
        liveRegion.textContent = 'Successfully joined the waitlist! Check your email for confirmation.'
      }

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 5000)
    }, 1500)
  }

  const stats = [
    { number: waitlistCount.toLocaleString(), label: 'People waiting' },
    { number: '99.9%', label: 'Accuracy rate' },
    { number: 'Q2 2025', label: 'Expected launch' }
  ]

  if (isSubmitted) {
    return (
      <section 
        id="waitlist" 
        className="section bg-gradient-to-b from-space-gray/20 to-space-black"
        aria-labelledby="success-heading"
      >
        <div className="container">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </motion.div>
            
            <h2 
              id="success-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              You're officially part of the{' '}
              <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                neural elite!
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Check your email for exclusive launch access and your 40% discount code. 
              The future thinks you made the right choice.
            </p>

            <motion.button
              onClick={() => {
                setIsSubmitted(false)
                setEmail('')
              }}
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Another Email
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section 
      id="waitlist" 
      className="section bg-gradient-to-b from-space-gray/20 to-space-black"
      aria-labelledby="waitlist-heading"
    >
      <div className="container">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <h2 
            id="waitlist-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            The Neural Revolution{' '}
            <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Starts Now
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Don't watch from the sidelines. Lead the transformation.{' '}
            <strong className="text-white">Limited spots available.</strong>
          </p>

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="email-input" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-space-gray/50 border border-neon-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent backdrop-blur-sm"
                  disabled={isSubmitting}
                  aria-describedby={error ? 'email-error' : 'email-help'}
                  required
                />
                {error && (
                  <p id="email-error" className="text-red-400 text-sm mt-2 text-left" role="alert">
                    {error}
                  </p>
                )}
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary px-8 py-4 text-lg whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                aria-label="Secure your spot on the waitlist"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Joining...
                  </span>
                ) : (
                  <>
                    <span className="mr-2" role="img" aria-label="Rocket">🚀</span>
                    Secure My Spot - FREE
                  </>
                )}
              </motion.button>
            </div>
            
            <p id="email-help" className="text-gray-400 text-sm mt-4">
              ⚡ Get exclusive 40% launch discount + first access to limited units. No spam, just neural evolution.
            </p>
          </motion.form>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-neon-cyan mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-12 pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <span className="mr-2" role="img" aria-label="Shield">🛡️</span>
                256-bit SSL encryption
              </div>
              <div className="flex items-center">
                <span className="mr-2" role="img" aria-label="Check">✅</span>
                GDPR compliant
              </div>
              <div className="flex items-center">
                <span className="mr-2" role="img" aria-label="Lock">🔒</span>
                Your data is secure
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Waitlist