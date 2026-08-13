import useNewsletter from '../../hooks/useNewsletter';
import Button from '../ui/Button';
import Modal from '../ui/Modal';

export default function Footer() {
  const { email, setEmail, status, errorMessage, successMessage, handleSubscribe, reset, isLoading, isSuccess } = useNewsletter();

  return (
    <>
      <footer className="footer" id="faq">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="nav-logo">
              <img src="/image.png" alt="Nexcent Logo" className="logo-icon" />
              <span className="logo-text white">Nexcent</span>
            </div>
            <p className="footer-desc">
              Copyright &copy; 2020 Nexcent ltd.<br />All rights reserved
            </p>
            <div className="social-icons">
              <a href="#ig" aria-label="Instagram" className="social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#dribbble" aria-label="Dribbble" className="social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56"/>
                </svg>
              </a>
              <a href="#tw" aria-label="Twitter / X" className="social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#yt" aria-label="YouTube" className="social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
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
              <form className="subscribe-form" onSubmit={handleSubscribe} aria-label="Newsletter sign up">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address for newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  required
                />
                <button type="submit" aria-label={isLoading ? 'Subscribing' : 'Subscribe'} disabled={isLoading}>
                  {isLoading ? (
                    <span className="btn-spinner" style={{ width: '14px', height: '14px' }} data-testid="footer-spinner" />
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  )}
                </button>
              </form>
              {status === 'error' && errorMessage && (
                <div style={{ color: '#F87171', fontSize: '13px', marginTop: '8px' }} role="alert">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </div>

      </footer>

      <Modal
        isOpen={isSuccess}
        onClose={reset}
        title="Subscription Successful!"
        footer={<Button variant="primary" onClick={reset}>Done</Button>}
      >
        <p style={{ margin: 0 }}>
          {successMessage || 'Thank you for signing up. You will receive updates shortly!'}
        </p>
      </Modal>
    </>
  );
}
