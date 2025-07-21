import './style.css'
import '@lottiefiles/lottie-player'

document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="nav-container">
    <div class="nav-wrapper">
      <div class="nav-logo">MindWave AI</div>
      <ul class="nav-menu">
        <li><a href="#overview">Overview</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#technology">Technology</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#qa">Q&A</a></li>
        <li><a href="#waitlist">Waitlist</a></li>
      </ul>
      <button class="nav-cta">🔥 40% OFF - 72hrs Left</button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-background-video">
      <iframe 
        src="https://www.youtube.com/embed/--iN63lgsc4?autoplay=1&mute=1&loop=1&playlist=--iN63lgsc4&controls=0&showinfo=0&rel=0&modestbranding=1" 
        title="Background video" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    </div>
    <div class="hero-content">
      <div class="hero-badge">🧠 First 1,000 Pre-Orders Get 40% OFF</div>
      <h1 class="hero-headline">Control Reality With Your Mind</h1>
      <p class="hero-subheadline">The world's first consumer brain-computer interface that actually works</p>
      <p class="hero-description">
        Join 12,847+ pioneers who refuse to accept limitations. MindWave AI doesn't just read your thoughts—it amplifies your human potential. 
        <strong>Skip the wait. Skip the competition. Be the first to think beyond human.</strong>
      </p>
      <div class="hero-cta-container">
        <button class="cta-primary">Secure Your MindWave - 40% OFF</button>
        <button class="cta-secondary">Watch Live Demo</button>
      </div>
      <div class="hero-urgency">
        <span class="urgency-text">⚡ Limited Launch Pricing Ends in 72 Hours</span>
      </div>
    </div>
    <div class="hero-visual">
      <div class="brain-animation">
        <div class="brain-core"></div>
        <div class="neural-network">
          <div class="neuron neuron-1"></div>
          <div class="neuron neuron-2"></div>
          <div class="neuron neuron-3"></div>
          <div class="neuron neuron-4"></div>
          <div class="neuron neuron-5"></div>
          <div class="connection connection-1"></div>
          <div class="connection connection-2"></div>
          <div class="connection connection-3"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Grid -->
  <section class="features" id="features">
    <div class="container">
      <h2 class="section-headline">Why Genius Minds Choose MindWave</h2>
      <p class="section-subheadline">The technology that separates leaders from followers</p>
      
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <div class="icon-pulse"></div>
          </div>
          <h3>Instant Cognitive Enhancement</h3>
          <p>React faster than humanly possible. Your thoughts travel at light speed while others think in slow motion.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <div class="icon-brain"></div>
          </div>
          <h3>Superhuman Intelligence</h3>
          <p>Access 10x your mental capacity. What used to take hours now happens in minutes. Your competition won't know what hit them.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <div class="icon-shield"></div>
          </div>
          <h3>Military-Grade Security</h3>
          <p>Your mental edge stays protected. Zero-knowledge encryption ensures your competitive advantage never leaks.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <div class="icon-battery"></div>
          </div>
          <h3>Never Offline</h3>
          <p>24/7 mental amplification. While others sleep, you evolve. Continuous optimization means you wake up smarter every day.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Technology Showcase -->
  <section class="technology" id="technology">
    <div class="tech-content">
      <div class="tech-text">
        <h2>The Technology That Changes Everything</h2>
        <p class="tech-description">
          While others dream of the future, we built it. Our quantum neural architecture doesn't just read your mind—it <strong>upgrades it</strong>. 
          This isn't wearable tech. This is human evolution. <em>The question isn't whether you can afford it. It's whether you can afford to be left behind.</em>
        </p>
        <div class="tech-specs">
          <div class="spec">
            <span class="spec-value">64</span>
            <span class="spec-label">Quantum Sensors</span>
          </div>
          <div class="spec">
            <span class="spec-value">1ms</span>
            <span class="spec-label">Response Time</span>
          </div>
          <div class="spec">
            <span class="spec-value">99.9%</span>
            <span class="spec-label">Accuracy</span>
          </div>
        </div>
      </div>
      <div class="tech-visual">
        <lottie-player 
          id="lottie-animation"
          src="https://lottie.host/c611b10d-9389-4fc0-94f2-5c1f1b06a713/fqf7AUwZCK.lottie" 
          background="transparent" 
          speed="1" 
          style="width: 300px; height: 300px; margin: 0 auto;"
          loop 
          autoplay>
        </lottie-player>
      </div>
    </div>
  </section>

  <!-- Pricing -->
  <section class="pricing" id="pricing">
    <div class="container">
      <h2 class="section-headline">Join The Neural Elite (Limited Time)</h2>
      <div class="pricing-urgency">
        <span class="urgency-badge">🔥 40% OFF Launch Pricing - Only 247 Units Left</span>
      </div>
      <div class="pricing-cards">
        <div class="pricing-card">
          <h3>MindWave Essential</h3>
          <p class="price-old">$1,665</p>
          <p class="price">$999</p>
          <ul class="features-list">
            <li>✅ 3x Faster Decision Making</li>
            <li>✅ Enhanced Focus & Flow States</li>
            <li>✅ Sleep Optimization AI</li>
            <li>✅ 365-Day Guarantee</li>
          </ul>
          <button class="cta-secondary">Secure Essential - $999</button>
        </div>
        
        <div class="pricing-card featured">
          <div class="badge">🏆 Genius Choice</div>
          <h3>MindWave Pro</h3>
          <p class="price-old">$2,498</p>
          <p class="price">$1,499</p>
          <div class="savings-badge">SAVE $999</div>
          <ul class="features-list">
            <li>✅ Everything in Essential PLUS:</li>
            <li>⚡ 10x Cognitive Amplification</li>
            <li>🧠 Emotion Mastery System</li>
            <li>🔮 Predictive Intelligence</li>
            <li>🛡️ Lifetime Updates & Support</li>
          </ul>
          <button class="cta-primary">Claim Pro - $1,499</button>
        </div>
        
        <div class="pricing-card ultra">
          <div class="ultra-badge">👑 For Visionaries</div>
          <h3>MindWave Ultra</h3>
          <p class="price-old">$4,165</p>
          <p class="price">$2,499</p>
          <div class="exclusive-badge">EXCLUSIVE ACCESS</div>
          <ul class="features-list">
            <li>✅ Everything in Pro PLUS:</li>
            <li>🚀 Scientific-Grade Neural Interface</li>
            <li>🔬 Custom AI Personality Training</li>
            <li>💼 Enterprise Command Center</li>
            <li>♾️ Lifetime Everything Guarantee</li>
          </ul>
          <button class="cta-secondary">Reserve Ultra - $2,499</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Q&A Section -->
  <section class="qa-section" id="qa">
    <div class="container">
      <h2 class="section-headline">Frequently Asked Questions</h2>
      <div class="qa-grid">
        <div class="qa-item">
          <div class="qa-question">
            <h3>How does MindWave AI actually read brain signals?</h3>
            <span class="qa-toggle">+</span>
          </div>
          <div class="qa-answer">
            <p>MindWave AI uses advanced quantum sensors to detect electrical activity in your brain. Our proprietary algorithms then decode these neural patterns into meaningful insights using machine learning models trained on millions of brain scans.</p>
          </div>
        </div>
        
        <div class="qa-item">
          <div class="qa-question">
            <h3>Is my brain data private and secure?</h3>
            <span class="qa-toggle">+</span>
          </div>
          <div class="qa-answer">
            <p>Absolutely. All neural data is encrypted end-to-end and processed locally on your device. We never store or transmit your raw brain signals to our servers. Your thoughts remain completely private.</p>
          </div>
        </div>
        
        <div class="qa-item">
          <div class="qa-question">
            <h3>How long does the battery last?</h3>
            <span class="qa-toggle">+</span>
          </div>
          <div class="qa-answer">
            <p>MindWave AI provides 24 hours of continuous monitoring on a single charge. The wireless charging case extends this to 7 days of usage with quick 15-minute top-ups throughout the day.</p>
          </div>
        </div>
        
        <div class="qa-item">
          <div class="qa-question">
            <h3>What can I do with the insights?</h3>
            <span class="qa-toggle">+</span>
          </div>
          <div class="qa-answer">
            <p>Track your cognitive performance, optimize your sleep patterns, enhance focus during work, monitor stress levels, and even control smart home devices with your thoughts. The possibilities expand with regular software updates.</p>
          </div>
        </div>
        
        <div class="qa-item">
          <div class="qa-question">
            <h3>When will MindWave AI be available?</h3>
            <span class="qa-toggle">+</span>
          </div>
          <div class="qa-answer">
            <p>We're currently in final testing phases. Pre-orders begin shipping in Q2 2025. Join our waitlist to be among the first to experience the future of brain-computer interfaces.</p>
          </div>
        </div>
        
        <div class="qa-item">
          <div class="qa-question">
            <h3>Do I need any special training to use it?</h3>
            <span class="qa-toggle">+</span>
          </div>
          <div class="qa-answer">
            <p>No training required! MindWave AI learns your unique neural patterns automatically during the first week of use. The intuitive mobile app guides you through the setup process and provides personalized recommendations.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Waitlist Subscription -->
  <section class="waitlist-section" id="waitlist">
    <div class="container">
      <div class="waitlist-content">
        <h2 class="section-headline">The Neural Revolution Starts Now</h2>
        <p class="section-subheadline">Don't watch from the sidelines. Lead the transformation. <strong>Limited spots available.</strong></p>
        
        <div class="waitlist-form-container">
          <form class="waitlist-form" id="waitlistForm">
            <div class="form-group">
              <input 
                type="email" 
                id="emailInput" 
                placeholder="Enter your email address" 
                required 
                class="email-input"
              >
              <button type="submit" class="submit-btn">🚀 Secure My Spot - FREE</button>
            </div>
            <p class="form-disclaimer">⚡ Get exclusive 40% launch discount + first access to limited units. No spam, just neural evolution.</p>
          </form>
          
          <div class="success-message" id="successMessage" style="display: none;">
            <div class="success-icon">✓</div>
            <h3>You're officially part of the neural elite!</h3>
            <p>Check your email for exclusive launch access and your 40% discount code. The future thinks you made the right choice.</p>
          </div>
        </div>
        
        <div class="waitlist-stats">
          <div class="stat">
            <span class="stat-number" id="waitlistCount">12,847</span>
            <span class="stat-label">People waiting</span>
          </div>
          <div class="stat">
            <span class="stat-number">99.9%</span>
            <span class="stat-label">Accuracy rate</span>
          </div>
          <div class="stat">
            <span class="stat-number">Q2 2025</span>
            <span class="stat-label">Expected launch</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer finisher-header" style="width: 100%; height: 300px; position: relative;">
    <div class="footer-content">
      <p>&copy; 2024 MindWave AI. All rights reserved.</p>
      <p class="footer-tagline">Don't just think different. <strong>Think impossible.</strong></p>
      <div class="footer-urgency">
        <span class="footer-cta">⏰ Launch pricing expires in 72 hours. Your mind can't wait.</span>
      </div>
    </div>
  </footer>
`

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

// Add scroll effects and parallax
let lastScroll = 0
const nav = document.querySelector('.nav-container')

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset
  
  if (currentScroll > 50) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }
  
  // Parallax effects
  const heroVisual = document.querySelector('.hero-visual')
  const techVisual = document.querySelector('.tech-visual')
  const sections = document.querySelectorAll('section')
  
  // Hero parallax
  if (heroVisual) {
    const heroOffset = currentScroll * 0.5
    heroVisual.style.transform = `translateY(${heroOffset}px)`
  }
  
  // Technology section parallax
  if (techVisual) {
    const techSection = document.querySelector('.technology')
    const techRect = techSection.getBoundingClientRect()
    if (techRect.top < window.innerHeight && techRect.bottom > 0) {
      const techOffset = (currentScroll - techSection.offsetTop) * 0.3
      techVisual.style.transform = `translateY(${techOffset}px)`
    }
  }
  
  // Add floating animations to feature cards based on scroll
  const featureCards = document.querySelectorAll('.feature-card')
  featureCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const offset = Math.sin((currentScroll + index * 100) * 0.01) * 5
      card.style.transform = `translateY(${offset}px)`
    }
  })
  
  lastScroll = currentScroll
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, observerOptions)

// Observe all sections and cards
document.querySelectorAll('section, .feature-card, .pricing-card').forEach(el => {
  observer.observe(el)
})

// Enhanced brainwave animation
function createParticleEffect() {
  const brainwaveContainer = document.querySelector('.brainwave-visualization')
  if (!brainwaveContainer) return
  
  // Create floating particles
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div')
    particle.style.position = 'absolute'
    particle.style.width = Math.random() * 4 + 2 + 'px'
    particle.style.height = particle.style.width
    particle.style.background = `hsl(${180 + Math.random() * 120}, 70%, 60%)`
    particle.style.borderRadius = '50%'
    particle.style.left = Math.random() * 100 + '%'
    particle.style.top = Math.random() * 100 + '%'
    particle.style.opacity = Math.random() * 0.8 + 0.2
    particle.style.animation = `parallax-float ${3 + Math.random() * 4}s ease-in-out infinite`
    particle.style.animationDelay = Math.random() * 2 + 's'
    particle.style.pointerEvents = 'none'
    particle.style.boxShadow = `0 0 10px currentColor`
    
    brainwaveContainer.appendChild(particle)
  }
}

// Add mouse interaction effects
function addInteractiveEffects() {
  const featureCards = document.querySelectorAll('.feature-card')
  
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)'
      this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    })
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)'
    })
    
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10
      
      this.style.transform = `translateY(-10px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })
  })
}

// Initialize Lottie animation
function initLottieAnimation() {
  const lottiePlayer = document.getElementById('lottie-animation')
  if (lottiePlayer) {
    console.log('Lottie player found, adding event listeners...')
    
    lottiePlayer.addEventListener('ready', () => {
      console.log('Lottie animation is ready and playing')
    })
    
    lottiePlayer.addEventListener('error', (e) => {
      console.error('Lottie player error:', e)
    })
  } else {
    console.error('Lottie player element not found')
  }
}

// Initialize effects when DOM is loaded
setTimeout(() => {
  createParticleEffect()
  addInteractiveEffects()
  initLottieAnimation()
  
  // Initialize FinisherHeader for footer background
  new FinisherHeader({
    "count": 5,
    "size": {
      "min": 717,
      "max": 1037,
      "pulse": 0.5
    },
    "speed": {
      "x": {
        "min": 0.1,
        "max": 0.9
      },
      "y": {
        "min": 0.1,
        "max": 0.5
      }
    },
    "colors": {
      "background": "#9138e5",
      "particles": [
        "#6bd6ff",
        "#ffcb57",
        "#ff333d"
      ]
    },
    "blending": "none",
    "opacity": {
      "center": 1,
      "edge": 0.1
    },
    "skew": -2,
    "shapes": [
      "s",
      "t",
      "c"
    ]
  })
}, 1000)

// Q&A Toggle functionality
function initQAToggles() {
  const qaItems = document.querySelectorAll('.qa-item')
  
  qaItems.forEach(item => {
    const question = item.querySelector('.qa-question')
    const answer = item.querySelector('.qa-answer')
    const toggle = item.querySelector('.qa-toggle')
    
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open')
      
      // Close all other Q&A items
      qaItems.forEach(otherItem => {
        otherItem.classList.remove('open')
        otherItem.querySelector('.qa-toggle').textContent = '+'
      })
      
      // Toggle current item
      if (!isOpen) {
        item.classList.add('open')
        toggle.textContent = '−'
      }
    })
  })
}

// Waitlist form submission with mock data
function initWaitlistForm() {
  const form = document.getElementById('waitlistForm')
  const emailInput = document.getElementById('emailInput')
  const successMessage = document.getElementById('successMessage')
  const waitlistCount = document.getElementById('waitlistCount')
  
  // Mock data storage
  let mockWaitlistEmails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]')
  let currentCount = parseInt(localStorage.getItem('waitlistCount') || '12847')
  
  // Update displayed count
  waitlistCount.textContent = currentCount.toLocaleString()
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const email = emailInput.value.trim()
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      emailInput.style.borderColor = '#ff4444'
      emailInput.focus()
      return
    }
    
    // Check if email already exists in mock data
    if (mockWaitlistEmails.includes(email)) {
      emailInput.style.borderColor = '#ff4444'
      emailInput.placeholder = 'Email already registered!'
      emailInput.value = ''
      setTimeout(() => {
        emailInput.placeholder = 'Enter your email address'
        emailInput.style.borderColor = ''
      }, 3000)
      return
    }
    
    // Simulate API call delay
    const submitBtn = form.querySelector('.submit-btn')
    const originalText = submitBtn.textContent
    submitBtn.textContent = 'Joining...'
    submitBtn.disabled = true
    
    setTimeout(() => {
      // Add email to mock storage
      mockWaitlistEmails.push(email)
      currentCount++
      
      // Update localStorage
      localStorage.setItem('waitlistEmails', JSON.stringify(mockWaitlistEmails))
      localStorage.setItem('waitlistCount', currentCount.toString())
      
      // Update UI
      waitlistCount.textContent = currentCount.toLocaleString()
      
      // Show success message
      form.style.display = 'none'
      successMessage.style.display = 'block'
      
      // Add celebration animation
      successMessage.classList.add('animate-in')
      
      // Reset form after 5 seconds
      setTimeout(() => {
        form.style.display = 'block'
        successMessage.style.display = 'none'
        successMessage.classList.remove('animate-in')
        emailInput.value = ''
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }, 5000)
      
    }, 1500) // Simulate network delay
  })
  
  // Reset border color on input
  emailInput.addEventListener('input', () => {
    emailInput.style.borderColor = ''
  })
}

// Initialize new functionality
setTimeout(() => {
  initQAToggles()
  initWaitlistForm()
}, 1100)