export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/image.png" alt="Nexcent Logo" className="logo-icon" />
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
