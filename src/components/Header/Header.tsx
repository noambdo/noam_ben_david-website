import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { contact } from '../../data/contact';
import { treatments, treatmentColumns } from '../../data/treatments';
import { images } from '../../data/images';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setTreatmentsOpen(false);
  }, [location.pathname]);

  const openMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setTreatmentsOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setTreatmentsOpen(false), 180);
  };

  const renderColumn = (key: keyof typeof treatmentColumns) => {
    const col = treatmentColumns[key];
    return (
      <div className="megamenu-col" key={key}>
        <h4>{col.title}</h4>
        <ul>
          {col.slugs.map(slug => {
            const t = treatments.find(x => x.slug === slug);
            if (!t) return null;
            return (
              <li key={slug}>
                <Link to={`/treatments/${slug}`}>{t.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner container">
        <Link to="/" className="logo" aria-label="לעמוד הבית">
          <img src={images.logo} alt="נועם בן דוד" />
        </Link>

        <nav className={`primary-nav ${isOpen ? 'open' : ''}`} aria-label="תפריט ראשי">
          <ul>
            <li><NavLink to="/" end>ראשי</NavLink></li>
            <li><NavLink to="/about">אודות</NavLink></li>
            <li
              className="has-mega"
              onMouseEnter={openMenu}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                className={`nav-trigger ${treatmentsOpen ? 'active' : ''}`}
                onClick={() => setTreatmentsOpen(o => !o)}
                aria-expanded={treatmentsOpen}
                aria-haspopup="true"
              >
                טיפולים
                <span className="caret" aria-hidden="true">▾</span>
              </button>
              <div
                className={`megamenu ${treatmentsOpen ? 'open' : ''}`}
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                <div className="megamenu-grid">
                  {renderColumn('facial')}
                  {renderColumn('tech')}
                  {renderColumn('special')}
                </div>
              </div>
            </li>
            <li><NavLink to="/testimonials">לקוחות ממליצים</NavLink></li>
            <li><NavLink to="/products">מוצרים</NavLink></li>
            <li><NavLink to="/questionnaire">שאלון התאמה אישית</NavLink></li>
            <li><NavLink to="/contact">יצירת קשר</NavLink></li>
          </ul>
        </nav>

        <div className="header-side">
          <a href={`tel:${contact.phone}`} className="phone-link">{contact.phone}</a>
          <button
            className={`burger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(o => !o)}
            aria-label="פתח תפריט"
            aria-expanded={isOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
