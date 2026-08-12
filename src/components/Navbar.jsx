export default function Navbar() {
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
