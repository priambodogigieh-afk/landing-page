import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Lessons and insights{' '}
            <span className="text-green">from 8 years</span>
          </h1>
          <p className="hero-desc">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button variant="primary" as="a" href="#register">Register</Button>
        </div>
        <div className="hero-image">
          <img
            src="/Illustration.svg"
            alt="Developer working at a monitor with flowchart and code"
            className="hero-svg float-illustration"
            width="391"
            height="407"
          />
        </div>
      </div>
      <div className="hero-dots" aria-hidden="true">
        <span className="dot active" /><span className="dot" /><span className="dot" />
      </div>
    </section>
  );
}
