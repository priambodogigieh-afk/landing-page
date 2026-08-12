export default function Clients() {
  const clients = [
    { name: 'Taizenai',  file: '/taizenai_logo.jpeg' },
    { name: 'Alien',     file: '/logo%20alien.png'   },
    { name: 'OJ',        file: '/oj.png'             },
    { name: 'Ipsum',     file: '/logo%20ipsum.png'   },
    { name: 'Lingakran', file: '/logo_lingakran-removebg-preview.png' },
    { name: 'VibedevAI', file: '/vibedevai_logo.jpeg' },
  ]
  return (
    <section className="clients-section">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Trusted worldwide</p>
          <h2 className="section-title">Our Clients</h2>
          <p className="section-sub">We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="clients-logos">
          {clients.map((c) => (
            <div key={c.name} className="client-logo" title={c.name}>
              <img
                src={c.file}
                alt={c.name}
                className={`client-logo-img${c.name === 'Lingakran' ? ' client-logo-lg' : ''}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
