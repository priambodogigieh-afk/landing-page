export default function Testimonial() {
  return (
    <section className="testimonial-section" id="testimonial">
      <div className="testimonial-container">
        <div className="testimonial-image">
          <img
            src="/logo%20tesla.jpg"
            alt="Tesla — featured client"
            className="testimonial-img"
          />
        </div>
        <div className="testimonial-text">
          <span className="quote-mark">"</span>
          <p className="quote">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
            sem dui, vel rutrum enim semper in. Integer non ipsum pretium, iaculis
            urna in, aliquam ipsum. Cras sit amet nunc ante.
          </p>
          <div className="quote-divider"/>
          <div className="quote-author">
            Tim Smith
            <span> — British Dragon Boat Racing Association</span>
          </div>
          <div className="brand-logos">
            {[
              { name: 'Taizenai',  file: '/taizenai_logo.jpeg' },
              { name: 'Alien',     file: '/logo%20alien.png'   },
              { name: 'OJ',        file: '/oj.png'             },
              { name: 'Ipsum',     file: '/logo%20ipsum.png'   },
              { name: 'Lingakran', file: '/logo_lingakran-removebg-preview.png' },
              { name: 'VibedevAI', file: '/vibedevai_logo.jpeg' },
            ].map((b) => (
              <img key={b.name} src={b.file} alt={b.name} className="brand-logo-img" loading="lazy"/>
            ))}
            <a href="#more" className="meet-clients">Meet all customers →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
