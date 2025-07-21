import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Technology = ({ reducedMotion }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const specs = [
    { value: '64', label: 'Quantum Sensors', unit: '' },
    { value: '1', label: 'Response Time', unit: 'ms' },
    { value: '99.9', label: 'Accuracy', unit: '%' }
  ]

  return (
    <section 
      id="technology" 
      className="section bg-gradient-to-b from-space-gray/10 via-space-black/50 to-space-gray/10"
      aria-labelledby="technology-heading"
    >
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: reducedMotion ? 0.01 : 0.8 }}
          >
            <h2 
              id="technology-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              The Technology That{' '}
              <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                Changes Everything
              </span>
            </h2>
            
            <div className="text-lg text-gray-300 mb-8 leading-relaxed">
              <p className="mb-4">
                While others dream of the future, we built it. Our quantum neural architecture doesn't just read your mind—it{' '}
                <strong className="text-white">upgrades it</strong>.
              </p>
              <p className="mb-4">
                This isn't wearable tech. This is human evolution.{' '}
                <em className="text-neon-cyan">
                  The question isn't whether you can afford it. It's whether you can afford to be left behind.
                </em>
              </p>
            </div>

            {/* Tech Specs */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  className="text-center p-4 bg-gradient-to-br from-space-gray/40 to-space-black/40 rounded-xl border border-neon-purple/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: reducedMotion ? 0.01 : 0.6, 
                    delay: reducedMotion ? 0 : index * 0.1 + 0.3 
                  }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-neon-cyan mb-1">
                    {spec.value}
                    <span className="text-lg text-gray-400">{spec.unit}</span>
                  </div>
                  <div className="text-sm text-gray-400">{spec.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => {
                const element = document.getElementById('pricing')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="btn btn-secondary text-lg px-8 py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: reducedMotion ? 0.01 : 0.6, delay: reducedMotion ? 0 : 0.8 }}
              whileHover={reducedMotion ? {} : { scale: 1.05 }}
              whileTap={reducedMotion ? {} : { scale: 0.95 }}
            >
              Experience The Future
            </motion.button>
          </motion.div>

          {/* Brain Visualization */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: reducedMotion ? 0.01 : 0.8, delay: reducedMotion ? 0 : 0.2 }}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Central Brain */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={reducedMotion ? {} : { rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="relative w-40 h-40 bg-gradient-to-br from-neon-purple via-neon-blue to-neon-cyan rounded-full flex items-center justify-center">
                  {/* Pulsing Rings */}
                  {!reducedMotion && [...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-full border-2 border-neon-purple/40"
                      animate={{
                        scale: [1, 2, 3],
                        opacity: [0.8, 0.4, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                  
                  <span className="text-6xl" role="img" aria-label="Brain">🧠</span>
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              {!reducedMotion && [...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-6 h-6 bg-neon-cyan rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: '0 0'
                  }}
                  animate={{
                    rotate: [0, 360],
                    x: [0, 120 * Math.cos((i * Math.PI * 2) / 6)],
                    y: [0, 120 * Math.sin((i * Math.PI * 2) / 6)]
                  }}
                  transition={{
                    duration: 8 + i,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}

              {/* Data Streams */}
              {!reducedMotion && (
                <svg className="absolute inset-0 w-full h-full">
                  {[...Array(4)].map((_, i) => (
                    <motion.path
                      key={i}
                      d={`M ${50 + 30 * Math.cos((i * Math.PI * 2) / 4)}% ${50 + 30 * Math.sin((i * Math.PI * 2) / 4)}% Q 50% 50% ${50 - 30 * Math.cos((i * Math.PI * 2) / 4)}% ${50 - 30 * Math.sin((i * Math.PI * 2) / 4)}%`}
                      stroke="url(#tech-gradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.8 }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  ))}
                  <defs>
                    <linearGradient id="tech-gradient">
                      <stop offset="0%" stopColor="#6A00F4" />
                      <stop offset="100%" stopColor="#00BFFF" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Technology