import Card from '../ui/Card';
import { Feature } from '../../types';

export default function Community() {
  const features: Feature[] = [
    {
      icon: <img src="/Icon.png" alt="" className="community-icon-img" aria-hidden="true" />,
      title: 'Membership Organisations',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      icon: <img src="/Icon%20(1).png" alt="" className="community-icon-img" aria-hidden="true" />,
      title: 'National Associations',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      icon: <img src="/Icon%20(2).png" alt="" className="community-icon-img" aria-hidden="true" />,
      title: 'Clubs And Groups',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
    },
  ];

  return (
    <section className="community-section" id="feature">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why Nexcent</span>
          <h2 className="section-title">Manage your entire community<br />in a single system</h2>
          <p className="section-sub">Who is Nexcent suitable for?</p>
        </div>
        <div className="community-grid">
          {features.map((f) => (
            <Card key={f.title} className="community-card" interactive={true}>
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
