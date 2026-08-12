export default function Hero() {
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
