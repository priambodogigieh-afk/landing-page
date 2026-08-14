import ScrollAnimate from '../ui/ScrollAnimate';
import { Feature } from '../../types';

export default function Community() {
  const features: Feature[] = [
    {
      icon: <img src="/3 orang.svg" alt="" className="community-icon-img" aria-hidden="true" />,
      title: 'Membership Organisations',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      icon: <img src="/gedung.svg" alt="" className="community-icon-img" aria-hidden="true" />,
      title: 'National Associations',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      icon: <img src="/tangan.svg" alt="" className="community-icon-img" aria-hidden="true" />,
      title: 'Clubs And Groups',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
    },
  ];

  return (
    <section className="community-section" id="feature">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Manage your entire community in a single system</h2>
          <p className="section-sub">Who is Nexcent suitable for?</p>
        </div>
        <div className="community-grid">
          {features.map((f, index) => (
            <ScrollAnimate
              key={f.title}
              className="card card-interactive community-card"
              delayClass={`delay-${index + 1}`}
            >
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
