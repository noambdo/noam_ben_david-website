import { contact } from '../../data/contact';
import './FloatingWhatsAppButton.css';

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={contact.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="float-wa"
      aria-label="צרי קשר בוואטסאפ"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 3.5A10 10 0 0 0 4.2 16.5L3 21l4.6-1.2A10 10 0 1 0 20 3.5zm-8 17.3a8.3 8.3 0 0 1-4.3-1.2l-.3-.2-2.7.7.7-2.7-.2-.3a8.3 8.3 0 1 1 6.8 3.7zm4.6-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7.9-.1.2-.3.2-.5.1-.7-.4-1.4-.8-2-1.5-.5-.5-.8-1.1-1.1-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5s0-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z"/>
      </svg>
    </a>
  );
}
