import Button from '../ui/Button';
import { Post } from '../../types';

export default function Blog() {
  const posts: Post[] = [
    {
      title: 'Creating Streamlined Safeguarding Processes with Nexcent',
      img: '/image 18.jpg',
      alt: 'Person using laptop',
    },
    {
      title: 'What are your safeguarding responsibilities and how can we manage them?',
      img: '/image 19.jpg',
      alt: 'Team meeting around a table',
    },
    {
      title: 'Revamping the Membership Model with Nexcent',
      img: '/image 20.jpg',
      alt: 'Person working on laptop',
    },
  ];
  return (
    <section className="blog-section" id="product">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Latest articles</span>
          <h2 className="section-title">Caring is the new marketing</h2>
          <p className="section-sub">
            The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
          </p>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.title} className="blog-card">
              <img src={post.img} alt={post.alt} className="blog-card-bg" loading="lazy" />
              <div className="blog-card-overlay">
                <h3>{post.title}</h3>
                <Button variant="text" as="a" href="#read">Readmore →</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
