import { useEffect } from 'react';
import useMobileMenu from '../../hooks/useMobileMenu';
import Button from '../ui/Button';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const { isOpen, toggle, close } = useMobileMenu();

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 960 && isOpen) close(); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, close]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Service', href: '#service' },
    { label: 'Feature', href: '#feature' },
    { label: 'Product', href: '#product' },
    { label: 'Testimonial', href: '#testimonial' },
    { label: 'FAQ', href: '#faq' },
  ];

  const SunIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );

  const MoonIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo" aria-label="Nexcent Home">
            <img src="/image.png" alt="Nexcent Logo" className="logo-icon" />
            <span className="logo-text">Nexcent</span>
          </a>
          <nav className="nav-links" aria-label="Desktop navigation">
            {navLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
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
              <span className="logo-text">Nexcent</span>
            </div>
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
          <nav className="mobile-drawer-links" aria-label="Mobile navigation">
            {navLinks.map((link) => <a key={link.label} href={link.href} onClick={close}>{link.label}</a>)}
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
