import { Client } from '../../types';

export default function Clients() {
  const clients: Client[] = [
    { name: 'Taizenai', file: '/taizenai_logo-removebg-preview.png' },
    { name: 'Alien', file: '/logo_alien-removebg-preview.png' },
    { name: 'OJ', file: '/oj-removebg-preview.png' },
    { name: 'Ipsum', file: '/logo_ipsum-removebg-preview.png' },
    { name: 'Lingkaran', file: '/logo_lingakran-removebg-preview.png' },
    { name: 'VibedevAI', file: '/vibedevai_logo-removebg-preview.png' },
  ];
  return (
    <section className="clients-section" id="service">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Trusted worldwide</span>
          <h2 className="section-title">Our Clients</h2>
          <p className="section-sub">We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="clients-logos">
          {clients.map((c) => (
            <div key={c.name} className="client-logo" title={c.name}>
              <img
                src={c.file}
                alt={`${c.name} brand logo`}
                className={`client-logo-img logo-${c.name.toLowerCase()}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
