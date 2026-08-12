import Button from '../ui/Button';

export interface FeatureHighlightProps {
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
  reverse?: boolean;
  bgLight?: boolean;
  id?: string;
}

export default function FeatureHighlight({
  tag, title, description, imageSrc, imageAlt,
  ctaText, ctaHref, reverse = false, bgLight = false, id,
}: FeatureHighlightProps) {
  return (
    <section id={id} className={`feature-highlight${bgLight ? ' bg-light' : ''}`}>
      <div className={`feature-container${reverse ? ' reverse' : ''}`}>
        <div className="feature-image">
          <img
            src={imageSrc}
            alt={imageAlt}
            className={reverse ? 'feature2-svg' : 'feature1-svg'}
            loading="lazy"
          />
        </div>
        <div className="feature-text">
          <span className="feature-tag">{tag}</span>
          <h2>{title}</h2>
          <p>{description}</p>
          <Button variant="primary" as="a" href={ctaHref}>{ctaText}</Button>
        </div>
      </div>
    </section>
  );
}
