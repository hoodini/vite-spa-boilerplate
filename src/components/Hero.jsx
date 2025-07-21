import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = ({ reducedMotion }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  
  // Parallax transforms (disabled if reduced motion is preferred)
  const y1 = useTransform(scrollY, [0, 500], [0, reducedMotion ? 0 : 150])
  const y2 = useTransform(scrollY, [0, 500], [0, reducedMotion ? 0 : -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  useEffect(() => {
    if (reducedMotion) return

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [reducedMotion])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-labelledby="hero-headline"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src="https://www.youtube.com/embed/--iN63lgsc4?autoplay=1&mute=1&loop=1&playlist=--iN63lgsc4&controls=0&showinfo=0&rel=0&modestbranding=1&start=10"
          title="MindWave AI Background - Brain neural network visualization"
          className="w-full h-full object-cover opacity-30"
          allow="autoplay; encrypted-media"
          loading="lazy"
          style={{ 
            filter: 'blur(1px)', 
            transform: `scale(1.1) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/40 via-transparent to-space-black/60" />
      </div>

      {/* Floating Particles */}
      {!reducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan rounded-full opacity-60"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
              style={{
                left: `${10 + (i * 6)}%`,
                top: `${20 + (i * 4)}%`
              }}
            />
          ))}
        </div>
      )}

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left"
            style={{ y: y1, opacity }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: reducedMotion ? 0.01 : 0.8, 
              ease: "easeOut" 
            }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-neon-purple/20 border border-neon-purple/40 rounded-full text-sm font-medium text-neon-cyan mb-6 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: reducedMotion ? 0.01 : 0.6, 
                delay: reducedMotion ? 0 : 0.2 
              }}
              role="status"
              aria-label="Special offer: First 1,000 pre-orders get 40% off"
            >
              <span className="mr-2" role="img" aria-label="Brain emoji">🧠</span>
              First 1,000 Pre-Orders Get 40% OFF
            </motion.div>

            {/* Headline */}
            <motion.h1 
              id="hero-headline"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: reducedMotion ? 0.01 : 0.8, 
                delay: reducedMotion ? 0 : 0.4 
              }}
            >
              Control Reality
              <br />
              <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
                With Your Mind
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-6 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: reducedMotion ? 0.01 : 0.8, 
                delay: reducedMotion ? 0 : 0.6 
              }}
            >
              The world's first consumer brain-computer interface that actually works
            </motion.p>

            {/* Description */}
            <motion.p 
              className="text-gray-400 mb-8 max-w-lg lg:max-w-none text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: reducedMotion ? 0.01 : 0.8, 
                delay: reducedMotion ? 0 : 0.8 
              }}
            >
              Join <strong className="text-neon-cyan">12,847+</strong> pioneers who refuse to accept limitations. 
              MindWave AI doesn't just read your thoughts—it amplifies your human potential.{' '}
              <strong className="text-white">
                Skip the wait. Skip the competition. Be the first to think beyond human.
              </strong>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: reducedMotion ? 0.01 : 0.8, 
                delay: reducedMotion ? 0 : 1 
              }}
            >
              <motion.button
                onClick={() => scrollToSection('pricing')}
                className="btn btn-primary text-lg px-8 py-4"
                whileHover={reducedMotion ? {} : { scale: 1.05, y: -2 }}
                whileTap={reducedMotion ? {} : { scale: 0.95 }}
                aria-label="Secure your MindWave with 40% discount"
              >
                Secure Your MindWave - 40% OFF
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('technology')}
                className="btn btn-secondary text-lg px-8 py-4"
                whileHover={reducedMotion ? {} : { scale: 1.05 }}
                whileTap={reducedMotion ? {} : { scale: 0.95 }}
                aria-label="Watch live demonstration of MindWave AI"
              >
                <span className="mr-2" role="img" aria-label="Play icon">▶️</span>
                Watch Live Demo
              </motion.button>
            </motion.div>

            {/* Urgency Banner */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-lg text-red-300 text-sm font-medium backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: reducedMotion ? 0.01 : 0.6, 
                delay: reducedMotion ? 0 : 1.2 
              }}
              role="status"
              aria-label="Limited time offer: Launch pricing ends in 72 hours"
            >
              <span className="mr-2" role="img" aria-label="Lightning bolt">⚡</span>
              Limited Launch Pricing Ends in 72 Hours
            </motion.div>
          </motion.div>

          {/* Brain Animation */}
          <motion.div 
            className="relative flex items-center justify-center"
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: reducedMotion ? 0.01 : 1, 
              delay: reducedMotion ? 0 : 0.5 
            }}
          >
            <div 
              className="relative w-80 h-80 lg:w-96 lg:h-96"
              style={{ 
                transform: reducedMotion ? 'none' : `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)` 
              }}
            >
              {/* Brain Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-32 h-32 bg-gradient-to-br from-neon-purple via-neon-blue to-neon-cyan rounded-full relative"
                  animate={reducedMotion ? {} : {
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  role="img"
                  aria-label="Neural network brain visualization"
                >
                  {/* Pulsing Rings */}
                  {!reducedMotion && [...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-full border border-neon-purple/30"
                      animate={{
                        scale: [1, 2.5],
                        opacity: [0.8, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                  
                  {/* Brain Icon */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    🧠
                  </div>
                </motion.div>
              </div>

              {/* Neural Network Nodes */}
              {!reducedMotion && [...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-neon-cyan rounded-full"
                  style={{
                    left: `${50 + 35 * Math.cos((i * Math.PI * 2) / 8)}%`,
                    top: `${50 + 35 * Math.sin((i * Math.PI * 2) / 8)}%`,
                  }}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Connecting Lines */}
              {!reducedMotion && (
                <svg className="absolute inset-0 w-full h-full">
                  {[...Array(8)].map((_, i) => (
                    <motion.line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + 35 * Math.cos((i * Math.PI * 2) / 8)}%`}
                      y2={`${50 + 35 * Math.sin((i * Math.PI * 2) / 8)}%`}
                      stroke="url(#neural-gradient)"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                  <defs>
                    <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6A00F4" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00BFFF" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: reducedMotion ? 0.01 : 0.8, 
          delay: reducedMotion ? 0 : 1.5 
        }}
      >
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          role="button"
          aria-label="Scroll down to explore features"
          tabIndex={0}
          onClick={() => scrollToSection('features')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              scrollToSection('features')
            }
          }}
        >
          <motion.div
            animate={reducedMotion ? {} : { y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero