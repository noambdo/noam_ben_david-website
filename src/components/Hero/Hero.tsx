import { ReactNode } from 'react';
import './Hero.css';

interface HeroProps {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: ReactNode;
  thin?: boolean;
  align?: 'center' | 'start';
}

export default function Hero({ image, eyebrow, title, subtitle, cta, thin = false, align = 'center' }: HeroProps) {
  return (
    <section
      className={`hero ${thin ? 'hero-thin' : ''} hero-${align}`}
      style={{ backgroundImage: `url(${image})` }}
      aria-label={title}
    >
      <div className="hero-overlay" />
      <div className="container hero-content reveal">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {cta && <div className="hero-cta">{cta}</div>}
      </div>
    </section>
  );
}
