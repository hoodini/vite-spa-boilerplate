import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Disclosure } from '@headlessui/react'

const FAQ = () => {
  const faqs = [
    {
      id: 'how-it-works',
      question: 'How does MindWave AI actually read brain signals?',
      answer: 'MindWave AI uses advanced quantum sensors to detect electrical activity in your brain. Our proprietary algorithms then decode these neural patterns into meaningful insights using machine learning models trained on millions of brain scans.'
    },
    {
      id: 'privacy-security',
      question: 'Is my brain data private and secure?',
      answer: 'Absolutely. All neural data is encrypted end-to-end and processed locally on your device. We never store or transmit your raw brain signals to our servers. Your thoughts remain completely private.'
    },
    {
      id: 'battery-life',
      question: 'How long does the battery last?',
      answer: 'MindWave AI provides 24 hours of continuous monitoring on a single charge. The wireless charging case extends this to 7 days of usage with quick 15-minute top-ups throughout the day.'
    },
    {
      id: 'use-cases',
      question: 'What can I do with the insights?',
      answer: 'Track your cognitive performance, optimize your sleep patterns, enhance focus during work, monitor stress levels, and even control smart home devices with your thoughts. The possibilities expand with regular software updates.'
    },
    {
      id: 'availability',
      question: 'When will MindWave AI be available?',
      answer: 'We\'re currently in final testing phases. Pre-orders begin shipping in Q2 2025. Join our waitlist to be among the first to experience the future of brain-computer interfaces.'
    },
    {
      id: 'training-required',
      question: 'Do I need any special training to use it?',
      answer: 'No training required! MindWave AI learns your unique neural patterns automatically during the first week of use. The intuitive mobile app guides you through the setup process and provides personalized recommendations.'
    }
  ]

  return (
    <section 
      id="faq" 
      className="section bg-gradient-to-b from-transparent via-space-gray/10 to-transparent"
      aria-labelledby="faq-heading"
    >
      <div className="container">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            id="faq-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about MindWave AI
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <Disclosure>
                {({ open }) => (
                  <div className="card hover:border-neon-purple/50 transition-all duration-300">
                    <Disclosure.Button 
                      className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-neon-purple rounded-lg p-2 -m-2"
                      aria-expanded={open}
                      aria-controls={`faq-${faq.id}-content`}
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: open ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <svg 
                          className="w-6 h-6 text-neon-purple" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                          />
                        </svg>
                      </motion.div>
                    </Disclosure.Button>

                    <AnimatePresence>
                      {open && (
                        <Disclosure.Panel
                          static
                          as={motion.div}
                          id={`faq-${faq.id}-content`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 border-t border-gray-700/50 mt-4">
                            <p className="text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </Disclosure.Panel>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help.
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('waitlist')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="btn btn-secondary px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2" role="img" aria-label="Email">📧</span>
            Contact Our Experts
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ