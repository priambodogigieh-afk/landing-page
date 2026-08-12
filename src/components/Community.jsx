export default function Community() {
  const features = [
    {
      icon: (
      	<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <path d="M14 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-8 9a8 8 0 0 1 16 0" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Membership Organisations',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <rect x="4" y="8" width="20" height="14" rx="3" stroke="#4CAF50" strokeWidth="2"/>
          <path d="M9 8V6a5 5 0 0 1 10 0v2" stroke="#4CAF50" strokeWidth="2"/>
          <circle cx="14" cy="15" r="2" fill="#4CAF50"/>
        </svg>
      ),
      title: 'National Associations',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <circle cx="14" cy="10" r="4" stroke="#4CAF50" strokeWidth="2"/>
          <circle cx="5"  cy="12" r="3" stroke="#4CAF50" strokeWidth="2"/>
          <circle cx="23" cy="12" r="3" stroke="#4CAF50" strokeWidth="2"/>
          <path d="M6 22a8 8 0 0 1 16 0" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
          <path d="M1 22a5 5 0 0 1 7-4.6" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M27 22a5 5 0 0 0-7-4.6" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Clubs And Groups',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
    },
  ]
  return (
    <section className="community-section" id="feature">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Why Nexcent</p>
          <h2 className="section-title">Manage your entire community<br/>in a single system</h2>
          <p className="section-sub">Who is Nexcent suitable for?</p>
        </div>
        <div className="community-grid">
          {features.map((f) => (
            <div key={f.title} className="community-card">
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
