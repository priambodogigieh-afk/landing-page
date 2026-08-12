import './App.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="#4CAF50" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="logo-text">Nexcent</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#feature">Feature</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className="nav-actions">
          <a href="#login" className="btn-login">Login</a>
          <a href="#signup" className="btn-signup">Sign up</a>
        </div>
        <button className="nav-hamburger" aria-label="Open menu">
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">Welcome to Nexcent</span>
          <h1 className="hero-title">
            Lessons and insights{' '}
            <span className="text-green">from 8 years</span>
          </h1>
          <p className="hero-desc">
            Where to grow your business as a photographer: site or social media?
          </p>
          <a href="#register" className="btn-primary">Register</a>
        </div>
        <div className="hero-image">
          <img
            src="/laptop.png"
            alt="Developer working at a monitor with flowchart and code"
            className="hero-svg"
          />
        </div>
      </div>
      <div className="hero-dots">
        <span className="dot active"/>
        <span className="dot"/>
        <span className="dot"/>
      </div>
    </section>
  )
}

function Clients() {
  const clients = [
    { name: 'Taizenai',  file: '/taizenai_logo.jpeg' },
    { name: 'Alien',     file: '/logo%20alien.png'   },
    { name: 'OJ',        file: '/oj.png'             },
    { name: 'Ipsum',     file: '/logo%20ipsum.png'   },
    { name: 'Lingakran', file: '/logo_lingakran-removebg-preview.png' },
    { name: 'VibedevAI', file: '/vibedevai_logo.jpeg' },
  ]
  return (
    <section className="clients-section">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Trusted worldwide</p>
          <h2 className="section-title">Our Clients</h2>
          <p className="section-sub">We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="clients-logos">
          {clients.map((c) => (
            <div key={c.name} className="client-logo" title={c.name}>
              <img
                src={c.file}
                alt={c.name}
                className={`client-logo-img${c.name === 'Lingakran' ? ' client-logo-lg' : ''}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Community() {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <path d="M14 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-8 9a8 8 0 0 1 16 0" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Membership Organisations',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <rect x="4" y="8" width="20" height="14" rx="3" stroke="#4CAF50" strokeWidth="2"/>
          <path d="M9 8V6a5 5 0 0 1 10 0v2" stroke="#4CAF50" strokeWidth="2"/>
          <circle cx="14" cy="15" r="2" fill="#4CAF50"/>
        </svg>
      ),
      title: 'National Associations',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <circle cx="14" cy="10" r="4" stroke="#4CAF50" strokeWidth="2"/>
          <circle cx="5"  cy="12" r="3" stroke="#4CAF50" strokeWidth="2"/>
          <circle cx="23" cy="12" r="3" stroke="#4CAF50" strokeWidth="2"/>
          <path d="M6 22a8 8 0 0 1 16 0" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
          <path d="M1 22a5 5 0 0 1 7-4.6" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M27 22a5 5 0 0 0-7-4.6" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Clubs And Groups',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
    },
  ]
  return (
    <section className="community-section" id="feature">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Why Nexcent</p>
          <h2 className="section-title">Manage your entire community<br/>in a single system</h2>
          <p className="section-sub">Who is Nexcent suitable for?</p>
        </div>
        <div className="community-grid">
          {features.map((f) => (
            <div key={f.title} className="community-card">
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureHighlight1() {
  return (
    <section className="feature-highlight bg-light">
      <div className="feature-container">
        <div className="feature-image">
          <img
            src="/mobile%20login.png"
            alt="Two people presenting a mobile login form"
            className="feature1-svg"
          />
        </div>
        <div className="feature-text">
          <span className="feature-tag">Our story</span>
          <h2>The unseen of spending three years at Pixelgrade</h2>
          <p>
            Lost the plot lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <a href="#learn" className="btn-primary">Learn more</a>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { value: '2,245,341', label: 'Members',        icon: '👥' },
    { value: '46,328',    label: 'Clubs',           icon: '🏛' },
    { value: '828,867',   label: 'Event Bookings',  icon: '📅' },
    { value: '1,926,436', label: 'Payments',        icon: '💳' },
  ]
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-text">
          <h2>
            Helping a local{' '}
            <span className="text-green">business reinvent itself</span>
          </h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-icon" role="img" aria-label={s.label}>{s.icon}</span>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureHighlight2() {
  return (
    <section className="feature-highlight">
      <div className="feature-container reverse">
        <div className="feature-text">
          <span className="feature-tag">Design tips</span>
          <h2>How to design your site footer like we did</h2>
          <p>
            Wheels in motion lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore. Neque porro quisquam
            est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.
            Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <a href="#learn" className="btn-primary">Learn more</a>
        </div>
        <div className="feature-image">
          <img
            src="/monile%20login%202.png"
            alt="Character presenting a mobile sign-up form with padlock security"
            className="feature2-svg"
          />
        </div>
      </div>
    </section>
  )
}

function Testimonial() {
  return (
    <section className="testimonial-section" id="testimonial">
      <div className="testimonial-container">
        <div className="testimonial-image">
          <img
            src="/logo%20tesla.jpg"
            alt="Tesla — featured client"
            className="testimonial-img"
          />
        </div>
        <div className="testimonial-text">
          <span className="quote-mark">"</span>
          <p className="quote">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
            sem dui, vel rutrum enim semper in. Integer non ipsum pretium, iaculis
            urna in, aliquam ipsum. Cras sit amet nunc ante.
          </p>
          <div className="quote-divider"/>
          <div className="quote-author">
            Tim Smith
            <span> — British Dragon Boat Racing Association</span>
          </div>
          <div className="brand-logos">
            {[
              { name: 'Taizenai',  file: '/taizenai_logo.jpeg' },
              { name: 'Alien',     file: '/logo%20alien.png'   },
              { name: 'OJ',        file: '/oj.png'             },
              { name: 'Ipsum',     file: '/logo%20ipsum.png'   },
              { name: 'Lingakran', file: '/logo_lingakran-removebg-preview.png' },
              { name: 'VibedevAI', file: '/vibedevai_logo.jpeg' },
            ].map((b) => (
              <img key={b.name} src={b.file} alt={b.name} className="brand-logo-img" loading="lazy"/>
            ))}
            <a href="#more" className="meet-clients">Meet all customers →</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Blog() {
  const posts = [
    {
      title: 'Creating Streamlined Safeguarding Processes with Nexcent',
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=380&fit=crop',
      alt: 'Person using laptop',
    },
    {
      title: 'What are your safeguarding responsibilities and how can we manage them?',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=380&fit=crop',
      alt: 'Team meeting around a table',
    },
    {
      title: 'Revamping the Membership Model with Nexcent',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=380&fit=crop',
      alt: 'Person working on laptop',
    },
  ]
  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Latest articles</p>
          <h2 className="section-title">Caring is the new marketing</h2>
          <p className="section-sub">
            The Nexcent blog is the best place to read about the latest membership insights,
            trends and more. See who&rsquo;s joining the community and how they grow.
          </p>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.title} className="blog-card">
              <div style={{ overflow: 'hidden' }}>
                <img src={post.img} alt={post.alt} className="blog-img" loading="lazy"/>
              </div>
              <div className="blog-body">
                <h3>{post.title}</h3>
                <a href="#read" className="btn-text">Read more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="cta-title">Pellentesque suscipit fringilla libero eu.</h2>
        <a href="#offer" className="btn-outline">Get an offer →</a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="nav-logo">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="#4CAF50" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="logo-text white">Nexcent</span>
          </div>
          <p className="footer-desc">
            Copyright &copy; 2020 Nexcent ltd.<br/>All rights reserved
          </p>
          <div className="social-icons">
            <a href="#ig" aria-label="Instagram" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#tw" aria-label="Twitter" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="#yt" aria-label="YouTube" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </a>
            <a href="#li" aria-label="LinkedIn" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact us</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#testimonial">Testimonials</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help center</a></li>
              <li><a href="#terms">Terms of service</a></li>
              <li><a href="#legal">Legal</a></li>
              <li><a href="#privacy">Privacy policy</a></li>
              <li><a href="#status">Status</a></li>
            </ul>
          </div>
          <div className="footer-col subscribe">
            <h4>Stay up to date</h4>
            <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" aria-label="Email address"/>
              <button type="submit" aria-label="Subscribe">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2020 Nexcent ltd. All rights reserved.</span>
        <span>Made with ♥ for communities</span>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <Clients/>
        <Community/>
        <FeatureHighlight1/>
        <Stats/>
        <FeatureHighlight2/>
        <Testimonial/>
        <Blog/>
        <CTA/>
      </main>
      <Footer/>
    </>
  )
}

export default App
