import './style.css'

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
      </ul>
      <button class="nav-cta">Pre-order</button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-headline">MindWave AI</h1>
      <p class="hero-subheadline">Your thoughts. Decoded.</p>
      <p class="hero-description">
        Revolutionary brain signal intelligence that translates neural activity 
        into actionable insights. The future of human-computer interaction is here.
      </p>
      <div class="hero-cta-container">
        <button class="cta-primary">Learn more</button>
        <button class="cta-secondary">Watch demo</button>
      </div>
    </div>
    <div class="hero-visual">
      <div class="device-mockup">
        <div class="device-screen">
          <div class="brainwave-visualization">
            <div class="wave wave-1"></div>
            <div class="wave wave-2"></div>
            <div class="wave wave-3"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Grid -->
  <section class="features" id="features">
    <div class="container">
      <h2 class="section-headline">Breakthrough capabilities</h2>
      <p class="section-subheadline">Advanced neural decoding meets intuitive design</p>
      
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <div class="icon-pulse"></div>
          </div>
          <h3>Real-time Analysis</h3>
          <p>Process brain signals with millisecond precision for instant insights</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <div class="icon-brain"></div>
          </div>
          <h3>Neural Mapping</h3>
          <p>Advanced AI algorithms decode complex neural patterns with 99.9% accuracy</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <div class="icon-shield"></div>
          </div>
          <h3>Privacy First</h3>
          <p>Your thoughts stay yours. End-to-end encryption protects your neural data</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <div class="icon-battery"></div>
          </div>
          <h3>All-day Battery</h3>
          <p>24-hour continuous monitoring with wireless charging case</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Technology Showcase -->
  <section class="technology" id="technology">
    <div class="tech-content">
      <div class="tech-text">
        <h2>Pioneering Neural Interface</h2>
        <p class="tech-description">
          Our proprietary quantum sensor array captures brain signals with unprecedented 
          clarity. Machine learning models trained on millions of neural patterns deliver 
          personalized insights that adapt to your unique brain signature.
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
        <div class="chip-mockup">
          <div class="chip-core"></div>
          <div class="chip-circuits"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing -->
  <section class="pricing" id="pricing">
    <div class="container">
      <h2 class="section-headline">Choose your MindWave</h2>
      <div class="pricing-cards">
        <div class="pricing-card">
          <h3>MindWave Essential</h3>
          <p class="price">$999</p>
          <ul class="features-list">
            <li>Basic neural monitoring</li>
            <li>Sleep & focus tracking</li>
            <li>Mobile app included</li>
            <li>1-year warranty</li>
          </ul>
          <button class="cta-secondary">Pre-order</button>
        </div>
        
        <div class="pricing-card featured">
          <div class="badge">Most Popular</div>
          <h3>MindWave Pro</h3>
          <p class="price">$1,499</p>
          <ul class="features-list">
            <li>Advanced neural decoding</li>
            <li>Emotion & cognitive analysis</li>
            <li>API access for developers</li>
            <li>2-year warranty</li>
          </ul>
          <button class="cta-primary">Pre-order</button>
        </div>
        
        <div class="pricing-card">
          <h3>MindWave Ultra</h3>
          <p class="price">$2,499</p>
          <ul class="features-list">
            <li>Research-grade sensors</li>
            <li>Custom AI training</li>
            <li>Enterprise features</li>
            <li>Lifetime warranty</li>
          </ul>
          <button class="cta-secondary">Contact us</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 MindWave AI. All rights reserved.</p>
      <p class="footer-tagline">Think different. Think MindWave.</p>
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

// Initialize effects when DOM is loaded
setTimeout(() => {
  createParticleEffect()
  addInteractiveEffects()
}, 1000)