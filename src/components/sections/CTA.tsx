import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="cta-title">Pellentesque suscipit fringilla libero eu.</h2>
        <Button variant="primary" as="a" href="#demo">
          Get a Demo
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Button>
      </div>
    </section>
  );
}
