import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Features = ({ reducedMotion }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      id: 'cognitive-enhancement',
      title: 'Instant Cognitive Enhancement',
      description: 'React faster than humanly possible. Your thoughts travel at light speed while others think in slow motion.',
      icon: '⚡',
      gradient: 'from-yellow-400 to-orange-500',
      delay: 0
    },
    {
      id: 'superhuman-intelligence',
      title: 'Superhuman Intelligence',
      description: 'Access 10x your mental capacity. What used to take hours now happens in minutes. Your competition won\'t know what hit them.',
      icon: '🧠',
      gradient: 'from-purple-400 to-pink-500',
      delay: 0.1
    },
    {
      id: 'military-security',
      title: 'Military-Grade Security',
      description: 'Your mental edge stays protected. Zero-knowledge encryption ensures your competitive advantage never leaks.',
      icon: '🛡️',
      gradient: 'from-green-400 to-blue-500',
      delay: 0.2
    },
    {
      id: 'always-online',
      title: 'Never Offline',
      description: '24/7 mental amplification. While others sleep, you evolve. Continuous optimization means you wake up smarter every day.',
      icon: '🔋',
      gradient: 'from-cyan-400 to-blue-500',
      delay: 0.3
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.1,
        delayChildren: reducedMotion ? 0 : 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: reducedMotion ? 0.01 : 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      id="features" 
      className="section bg-gradient-to-b from-transparent via-space-gray/20 to-transparent"
      aria-labelledby="features-heading"
    >
      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: reducedMotion ? 0.01 : 0.8,
            ease: "easeOut"
          }}
        >
          <h2 
            id="features-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Why Genius Minds Choose{' '}
            <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
              MindWave
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The technology that separates leaders from followers
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="group card hover:scale-105 transition-all duration-500 cursor-pointer"
              variants={cardVariants}
              whileHover={reducedMotion ? {} : { 
                y: -12,
                rotateY: 5,
                scale: 1.05
              }}
              whileTap={reducedMotion ? {} : { scale: 0.98 }}
              role="article"
              aria-labelledby={`feature-${feature.id}-title`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  // Could trigger a modal or navigation here
                }
              }}
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  animate={reducedMotion ? {} : {
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: feature.delay * 2
                  }}
                  role="img"
                  aria-label={`${feature.title} icon`}
                >
                  {feature.icon}
                </motion.div>
                
                {/* Glow Effect */}
                {!reducedMotion && (
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: feature.delay
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div>
                <h3 
                  id={`feature-${feature.id}-title`}
                  className="text-xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors duration-300"
                >
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <motion.div 
                className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-neon-purple/50 transition-all duration-300 pointer-events-none"
                whileHover={reducedMotion ? {} : {
                  borderColor: "rgba(106, 0, 244, 0.8)",
                  boxShadow: "0 0 20px rgba(106, 0, 244, 0.3)"
                }}
              />

              {/* Interactive Particles */}
              {!reducedMotion && (
                <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                      initial={{ 
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        opacity: 0
                      }}
                      animate={{
                        y: [null, '-20px'],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: reducedMotion ? 0.01 : 0.8,
            delay: reducedMotion ? 0 : 0.8,
            ease: "easeOut"
          }}
        >
          <motion.button
            onClick={() => {
              const element = document.getElementById('pricing')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="btn btn-primary text-lg px-8 py-4"
            whileHover={reducedMotion ? {} : { scale: 1.05, y: -2 }}
            whileTap={reducedMotion ? {} : { scale: 0.95 }}
            aria-label="Explore pricing options for MindWave AI"
          >
            <span className="mr-2" role="img" aria-label="Rocket">🚀</span>
            Unlock Your Potential Now
          </motion.button>
          
          <p className="text-gray-400 mt-4 text-sm">
            Join <strong className="text-neon-cyan">12,847+</strong> early adopters already transforming their minds
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Features