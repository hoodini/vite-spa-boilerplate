import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Pricing = ({ reducedMotion }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const plans = [
    {
      id: 'essential',
      name: 'MindWave Essential',
      oldPrice: '$1,665',
      price: '$999',
      savings: '$666 OFF',
      features: [
        '3x Faster Decision Making',
        'Enhanced Focus & Flow States',
        'Sleep Optimization AI',
        '365-Day Guarantee'
      ],
      cta: 'Secure Essential - $999',
      popular: false,
      className: 'hover:scale-105'
    },
    {
      id: 'pro',
      name: 'MindWave Pro',
      oldPrice: '$2,498',
      price: '$1,499',
      savings: 'SAVE $999',
      badge: '🏆 Genius Choice',
      features: [
        'Everything in Essential PLUS:',
        '10x Cognitive Amplification',
        'Emotion Mastery System',
        'Predictive Intelligence',
        'Lifetime Updates & Support'
      ],
      cta: 'Claim Pro - $1,499',
      popular: true,
      className: 'scale-110 hover:scale-115 ring-4 ring-neon-purple/50'
    },
    {
      id: 'ultra',
      name: 'MindWave Ultra',
      oldPrice: '$4,165',
      price: '$2,499',
      savings: 'EXCLUSIVE ACCESS',
      badge: '👑 For Visionaries',
      features: [
        'Everything in Pro PLUS:',
        'Scientific-Grade Neural Interface',
        'Custom AI Personality Training',
        'Enterprise Command Center',
        '♾️ Lifetime Everything Guarantee'
      ],
      cta: 'Reserve Ultra - $2,499',
      popular: false,
      className: 'hover:scale-105'
    }
  ]

  return (
    <section 
      id="pricing" 
      className="section bg-gradient-to-b from-transparent via-space-gray/20 to-transparent"
      aria-labelledby="pricing-heading"
    >
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.01 : 0.8 }}
        >
          <h2 
            id="pricing-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Join The{' '}
            <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Neural Elite
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-6">Limited Time Launch Pricing</p>
          
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-red-500/20 border border-red-500/40 rounded-full text-red-300 font-semibold backdrop-blur-sm"
            animate={reducedMotion ? {} : { scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🔥 40% OFF Launch Pricing - Only 247 Units Left
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`card relative ${plan.className} transition-all duration-500`}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: reducedMotion ? 0.01 : 0.8, 
                delay: reducedMotion ? 0 : index * 0.1 + 0.2 
              }}
              whileHover={reducedMotion ? {} : { 
                y: -10,
                rotateY: 5,
                rotateX: 5,
                scale: plan.popular ? 1.02 : 1.05
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-blue text-white text-sm font-bold rounded-full">
                  {plan.badge}
                </div>
              )}

              {/* Card Content */}
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-lg text-gray-400 line-through mr-2">{plan.oldPrice}</span>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  </div>
                  
                  <div className="text-center">
                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                      plan.popular 
                        ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/40' 
                        : 'bg-green-500/20 text-green-400 border border-green-500/40'
                    }`}>
                      {plan.savings}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: reducedMotion ? 0.01 : 0.4, 
                        delay: reducedMotion ? 0 : index * 0.1 + i * 0.1 + 0.5 
                      }}
                    >
                      <span className="text-neon-cyan mr-3 mt-1">
                        {feature.includes('✅') ? feature.charAt(0) : '✅'}
                      </span>
                      <span className={feature.includes(':') ? 'font-semibold text-white' : ''}>
                        {feature.replace('✅ ', '')}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'btn btn-primary'
                      : 'btn btn-secondary'
                  }`}
                  whileHover={reducedMotion ? {} : { scale: 1.02, y: -2 }}
                  whileTap={reducedMotion ? {} : { scale: 0.98 }}
                  onClick={() => {
                    // In a real app, this would trigger checkout
                    const element = document.getElementById('waitlist')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  aria-label={`Select ${plan.name} plan for ${plan.price}`}
                >
                  {plan.cta}
                </motion.button>
              </div>

              {/* 3D Glow Effect */}
              {!reducedMotion && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-blue/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ transform: 'translateZ(-1px)' }}
                />
              )}

              {/* Floating Particles on Hover */}
              {!reducedMotion && (
                <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-neon-cyan rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                      animate={{
                        y: [-20, -60],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
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
        </div>

        {/* Bottom Message */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.01 : 0.8, delay: reducedMotion ? 0 : 0.8 }}
        >
          <p className="text-gray-400 mb-4">
            ⚡ All plans include <strong className="text-white">365-day money-back guarantee</strong>
          </p>
          <p className="text-sm text-gray-500">
            Pricing valid for first 1,000 customers only. Regular pricing applies after launch.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing