import './SectionTitle.css';

interface Props {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
}

export default function SectionTitle({ eyebrow, title, text, centered = true }: Props) {
  return (
    <div className={`section-title reveal ${centered ? 'centered' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {centered && <span className="divider" />}
      {text && <p className="muted">{text}</p>}
    </div>
  );
}
