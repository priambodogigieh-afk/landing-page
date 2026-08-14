import { useEffect, useState } from 'react';
import useMobileMenu from '../../hooks/useMobileMenu';
import Button from '../ui/Button';

export default function Navbar() {
  const { isOpen, toggle, close } = useMobileMenu();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 960 && isOpen) close(); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, close]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'service', 'feature', 'product', 'testimonial', 'faq'];
      const scrollPosition = window.scrollY + 120; // offset for navbar height + buffer

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger scroll handler once initially to set the correct active state on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Service', href: '#service' },
    { label: 'Feature', href: '#feature' },
    { label: 'Product', href: '#product' },
    { label: 'Testimonial', href: '#testimonial' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo" aria-label="Nexcent Home">
            <img src="/image.png" alt="Nexcent Logo" className="logo-icon" />
            <img src="/Nexcent.svg" alt="Nexcent" className="logo-text-svg" />
          </a>
          <nav className="nav-links" aria-label="Desktop navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={isActive ? 'active' : ''}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="nav-actions">
            <Button variant="ghost" as="a" href="#login" className="btn-login">Login</Button>
            <Button variant="primary" as="a" href="#signup" className="btn-signup">Sign up</Button>
          </div>
          <button
            className={`nav-hamburger ${isOpen ? 'open' : ''}`}
            onClick={toggle}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
 
      <div className={`mobile-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={close} data-testid="mobile-drawer-overlay">
        <div className="mobile-drawer" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
          <div className="mobile-drawer-header">
            <div className="nav-logo">
              <img src="/image.png" alt="Nexcent Logo" className="logo-icon" />
              <img src="/Nexcent.svg" alt="Nexcent" className="logo-text-svg" />
            </div>
          </div>
          <nav className="mobile-drawer-links" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={isActive ? 'active' : ''}
                  onClick={close}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="mobile-drawer-actions">
            <Button variant="outline" as="a" href="#login" onClick={close}>Login</Button>
            <Button variant="primary" as="a" href="#signup" onClick={close}>Sign up</Button>
          </div>
        </div>
      </div>
    </>
  );
}
