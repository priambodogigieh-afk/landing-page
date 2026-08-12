export default function Blog() {
  const posts = [
    {
      title: 'Creating Streamlined Safeguarding Processes with Nexcent',
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=380&fit=crop',
      alt: 'Person using laptop',
    },
    {
      title: 'What are your safeguarding responsibilities and how can we manage them?',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=380&fit=crop',
      alt: 'Team meeting around a table',
    },
    {
      title: 'Revamping the Membership Model with Nexcent',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=380&fit=crop',
      alt: 'Person working on laptop',
    },
  ]
  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Latest articles</p>
          <h2 className="section-title">Caring is the new marketing</h2>
          <p className="section-sub">
            The Nexcent blog is the best place to read about the latest membership insights,
            trends and more. See who&rsquo;s joining the community and how they grow.
          </p>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.title} className="blog-card">
              <div style={{ overflow: 'hidden' }}>
                <img src={post.img} alt={post.alt} className="blog-img" loading="lazy"/>
              </div>
              <div className="blog-body">
                <h3>{post.title}</h3>
                <a href="#read" className="btn-text">Read more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
