import { Link } from 'react-router-dom';
import { contact } from '../../data/contact';
import { images } from '../../data/images';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo">
            <img src={images.logo} alt="נועם בן דוד" />
          </Link>
          <p className="muted">קליניקה לטיפולי פנים בהתאמה אישית, עם דגש על מקצועיות, יחס אישי ותוצאות טבעיות.</p>
          <div className="social-row" aria-label="רשתות חברתיות">
            <a href={contact.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>
            </a>
            <a href={contact.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 9h2.5V6H14c-2 0-3 1-3 3v2H9v3h2v7h3v-7h2.4l.6-3H14V9z"/></svg>
            </a>
            <a href={contact.social.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 3v3a4 4 0 0 0 4 4v3a7 7 0 0 1-4-1.3V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3h3z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h5>ניווט</h5>
          <ul>
            <li><Link to="/">ראשי</Link></li>
            <li><Link to="/about">אודות</Link></li>
            <li><Link to="/products">מוצרים</Link></li>
            <li><Link to="/testimonials">לקוחות ממליצים</Link></li>
            <li><Link to="/questionnaire">שאלון התאמה אישית</Link></li>
            <li><Link to="/contact">יצירת קשר</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>צור קשר</h5>
          <ul className="contact-list">
            <li><a href={`tel:${contact.phone}`}>{contact.phone}</a></li>
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li>{contact.address}</li>
            <li><a href={contact.mapsLink} target="_blank" rel="noreferrer">פתח ב-Google Maps</a></li>
            <li><a href={contact.wazeLink} target="_blank" rel="noreferrer">ניווט ב-Waze</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© כל הזכויות שמורות לנועם בן דוד 2026</span>
        <div className="footer-links">
          <a href="#accessibility">הצהרת נגישות</a>
          <a href="#privacy">מדיניות פרטיות</a>
        </div>
      </div>
    </footer>
  );
}
