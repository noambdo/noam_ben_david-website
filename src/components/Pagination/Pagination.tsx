import './Pagination.css';

interface Props {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

function buildPages(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | '...')[] = [];
  pages.push(1);
  if (current > 3) pages.push('...');
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (current < total - 2) pages.push('...');
  pages.push(total);
  return pages;
}

export default function Pagination({ current, total, onChange }: Props) {
  if (total <= 1) return null;
  const pages = buildPages(current, total);
  return (
    <nav className="pagination" aria-label="עימוד">
      <button
        className="pg-btn"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
      >
        הקודם
      </button>
      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`e-${i}`} className="pg-ellipsis">…</span>
        ) : (
          <button
            key={p}
            className={`pg-num ${p === current ? 'active' : ''}`}
            onClick={() => onChange(p)}
            aria-current={p === current ? 'page' : undefined}
          >
            {p}
          </button>
        )
      )}
      <button
        className="pg-btn"
        onClick={() => onChange(current + 1)}
        disabled={current === total}
      >
        הבא
      </button>
    </nav>
  );
}
