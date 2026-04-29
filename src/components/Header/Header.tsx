import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { contact } from '../../data/contact';
import { treatments, treatmentColumns } from '../../data/treatments';
import { categories } from '../../data/products';
import { images } from '../../data/images';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const productsTimer = useRef<number | null>(null);
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
    setProductsOpen(false);
  }, [location.pathname, location.search]);

  /* ── Treatments megamenu ── */
  const openMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setTreatmentsOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setTreatmentsOpen(false), 180);
  };

  /* ── Products dropdown ── */
  const openProducts = () => {
    if (productsTimer.current) window.clearTimeout(productsTimer.current);
    setProductsOpen(true);
  };
  const scheduleCloseProducts = () => {
    if (productsTimer.current) window.clearTimeout(productsTimer.current);
    productsTimer.current = window.setTimeout(() => setProductsOpen(false), 180);
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

  const isProductsActive = location.pathname.startsWith('/products');

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

            {/* ── Treatments megamenu ── */}
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

            {/* ── Products dropdown ── */}
            <li
              className="has-products-dropdown"
              onMouseEnter={openProducts}
              onMouseLeave={scheduleCloseProducts}
            >
              <button
                type="button"
                className={`nav-trigger ${productsOpen || isProductsActive ? 'active' : ''}`}
                onClick={() => setProductsOpen(o => !o)}
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                מוצרים
                <span className="caret" aria-hidden="true">▾</span>
              </button>

              <div
                className={`products-dropdown ${productsOpen ? 'open' : ''}`}
                onMouseEnter={openProducts}
                onMouseLeave={scheduleCloseProducts}
              >
                <ul>
                  <li className="pd-all-item">
                    <Link to="/products">כל המוצרים</Link>
                  </li>
                  {categories.map(cat => (
                    <li key={cat}>
                      <Link to={`/products?category=${encodeURIComponent(cat)}`}>{cat}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

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
