import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a href={t.contacts.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={t.contacts.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${t.contacts.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
        <p className="footer-copy">
          {t.footer.rights} <Heart size={12} className="inline-heart" />
        </p>
      </div>
    </footer>
  );
}
