import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      url: '#', 
      ariaLabel: 'Follow MindWave AI on LinkedIn' 
    },
    { 
      name: 'Twitter', 
      icon: '🐦', 
      url: '#', 
      ariaLabel: 'Follow MindWave AI on Twitter' 
    },
    { 
      name: 'GitHub', 
      icon: '💻', 
      url: '#', 
      ariaLabel: 'View MindWave AI on GitHub' 
    },
    { 
      name: 'Discord', 
      icon: '💬', 
      url: '#', 
      ariaLabel: 'Join MindWave AI Discord community' 
    }
  ]

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Technology', href: '#technology' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'Contact', href: '#waitlist' },
        { name: 'Status', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'GDPR', href: '#' }
      ]
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer 
      className="relative bg-gradient-to-b from-space-black to-space-gray border-t border-neon-purple/20"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(106, 0, 244, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 191, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(0, 255, 255, 0.2) 0%, transparent 50%)
            `,
            backgroundSize: '100% 100%'
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="py-16">
          {/* Top Section */}
          <div className="grid lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 
                id="footer-heading"
                className="text-2xl font-bold font-mono text-neon-cyan mb-4"
              >
                MindWave AI
              </h3>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                The world's first consumer brain-computer interface that actually works. 
                <strong className="text-white block mt-2">
                  Don't just think different. Think impossible.
                </strong>
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 bg-space-gray/50 border border-neon-purple/30 rounded-lg flex items-center justify-center text-xl hover:border-neon-purple hover:bg-neon-purple/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.ariaLabel}
                    onClick={(e) => {
                      e.preventDefault()
                      // In a real app, these would be actual social links
                    }}
                  >
                    <span role="img" aria-hidden="true">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => {
                          if (link.href.startsWith('#')) {
                            scrollToSection(link.href)
                          }
                        }}
                        className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 focus:outline-none focus:text-neon-cyan text-left"
                        aria-label={`Navigate to ${link.name}`}
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Urgency Banner */}
          <motion.div 
            className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/40 rounded-lg p-6 mb-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(239, 68, 68, 0.3)',
                '0 0 40px rgba(239, 68, 68, 0.5)',
                '0 0 20px rgba(239, 68, 68, 0.3)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <p className="text-red-300 font-semibold text-lg">
              <span className="mr-2" role="img" aria-label="Clock">⏰</span>
              Launch pricing expires in 72 hours. Your mind can't wait.
            </p>
            <motion.button
              onClick={() => scrollToSection('#waitlist')}
              className="mt-4 btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Secure Your Spot Now
            </motion.button>
          </motion.div>

          {/* Bottom Section */}
          <motion.div 
            className="border-t border-gray-700/50 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 MindWave AI. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center">
                  <span className="mr-2" role="img" aria-label="Shield">🛡️</span>
                  Enterprise Security
                </span>
                <span className="flex items-center">
                  <span className="mr-2" role="img" aria-label="Globe">🌍</span>
                  Global Shipping
                </span>
                <span className="flex items-center">
                  <span className="mr-2" role="img" aria-label="Support">🎧</span>
                  24/7 Support
                </span>
              </div>
            </div>

            {/* Accessibility Statement */}
            <div className="mt-6 pt-6 border-t border-gray-700/30">
              <p className="text-gray-500 text-xs text-center">
                This website is designed to be accessible to all users. 
                We are committed to providing an inclusive experience that complies with WCAG 2.2 guidelines.
                <br />
                <button 
                  onClick={() => {
                    // Could open accessibility help modal
                    alert('Accessibility features: Use Tab to navigate, Space/Enter to activate, screen reader compatible')
                  }}
                  className="text-neon-purple hover:text-neon-cyan underline ml-1 focus:outline-none focus:ring-1 focus:ring-neon-purple"
                >
                  Learn about our accessibility features
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer