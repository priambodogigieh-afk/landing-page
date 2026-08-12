import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="cta-title">Pellentesque suscipit fringilla libero eu.</h2>
        <Button variant="outline" as="a" href="#offer">Get an offer →</Button>
      </div>
    </section>
  );
}
