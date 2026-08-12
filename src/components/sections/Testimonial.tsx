import { Client } from '../../types';

export default function Testimonial() {
  const brandLogos: Client[] = [
    { name: 'Taizenai', file: '/taizenai_logo-removebg-preview.png' },
    { name: 'Alien', file: '/logo_alien-removebg-preview.png' },
    { name: 'OJ', file: '/oj-removebg-preview.png' },
    { name: 'Ipsum', file: '/logo_ipsum-removebg-preview.png' },
    { name: 'Lingkaran', file: '/logo_lingakran-removebg-preview.png' },
    { name: 'VibedevAI', file: '/vibedevai_logo-removebg-preview.png' },
  ];
  return (
    <section className="testimonial-section" id="testimonial">
      <div className="testimonial-container">
        <div className="testimonial-image">
          <img
            src="/logo tesla.jpg"
            alt="Tesla 3D Logo — featured client testimonial"
            className="testimonial-img"
            loading="lazy"
          />
        </div>
        <div className="testimonial-text">
          <span className="quote-mark" aria-hidden="true">"</span>
          <p className="quote">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className="quote-divider" aria-hidden="true" />
          <div className="quote-author">
            Tim Smith <span>— British Dragon Boat Racing Association</span>
          </div>
          <div className="brand-logos">
            {brandLogos.map((b) => (
              <img key={b.name} src={b.file} alt={`${b.name} brand logo`} className="brand-logo-img" loading="lazy" />
            ))}
            <a href="#more" className="meet-clients">Meet all customers →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
