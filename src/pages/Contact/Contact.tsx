import Hero from '../../components/Hero/Hero';
import ContactForm from '../../components/ContactForm/ContactForm';
import { contact } from '../../data/contact';
import { images } from '../../data/images';
import './Contact.css';

export default function Contact() {
  return (
    <main className="page contact-page">
      <Hero
        image={images.heroAbout}
        thin
        title="יצירת קשר"
        subtitle="אשמח לשמוע ממך, להתאים יחד את הטיפול הנכון ולקבוע פגישה."
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-form-col reveal">
            <h2>נשמח לחזור אלייך</h2>
            <span className="divider its-divider" />
            <p className="muted">השאירי פרטים ואחזור אלייך בהקדם האפשרי.</p>
            <ContactForm storageKey="noam-contact-page" compact />
          </div>

          <aside className="contact-info-col reveal">
            <h3>פרטי הקליניקה</h3>
            <ul className="info-list">
              <li>
                <span className="info-label">טלפון</span>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </li>
              <li>
                <span className="info-label">אימייל</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <span className="info-label">כתובת</span>
                <span>{contact.address}</span>
              </li>
              <li>
                <a href={contact.mapsLink} target="_blank" rel="noreferrer" className="btn btn-outline">
                  פתח ב-Google Maps
                </a>
              </li>
              <li>
                <a href={contact.wazeLink} target="_blank" rel="noreferrer" className="btn btn-outline">
                  ניווט ב-Waze
                </a>
              </li>
            </ul>

            <div className="contact-social">
              <h4>בואי לעקוב</h4>
              <div className="social-row">
                <a href={contact.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
                <a href={contact.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a>
                <a href={contact.social.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">TikTok</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="contact-map">
        <iframe
          title="מפת הקליניקה"
          src={contact.mapsEmbed}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}
