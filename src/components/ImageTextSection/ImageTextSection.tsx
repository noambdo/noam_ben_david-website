import { ReactNode } from 'react';
import './ImageTextSection.css';

interface Props {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  reverse?: boolean;
  cta?: ReactNode;
}

export default function ImageTextSection({ image, imageAlt = '', eyebrow, title, children, reverse, cta }: Props) {
  return (
    <section className={`image-text-section ${reverse ? 'reverse' : ''}`}>
      <div className="container its-grid">
        <div className="its-image reveal">
          <img src={image} alt={imageAlt} loading="lazy" />
        </div>
        <div className="its-text reveal">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          <span className="divider its-divider" />
          <div className="its-body">{children}</div>
          {cta && <div className="its-cta">{cta}</div>}
        </div>
      </div>
    </section>
  );
}
