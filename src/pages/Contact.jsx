import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Linkedin, Github, Send } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { setSEO } from '../utils/seo';

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [toast, setToast] = useState('');

  useEffect(() => {
    setSEO(t.nav.contact, t.sections.openToText);
  }, [t]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setToast(t.contactForm.error);
      setTimeout(() => setToast(''), 3000);
      return;
    }
    setToast(t.contactForm.success);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setToast(''), 4000);
  };

  const socials = [
    { key: 'instagram', Icon: Instagram, href: t.contacts.instagram || '#', label: 'Instagram' },
    { key: 'email', Icon: Mail, href: `mailto:${t.contacts.email}`, label: 'Email' },
    { key: 'github', Icon: Github, href: t.contacts.github, label: 'GitHub' },
    { key: 'linkedin', Icon: Linkedin, href: t.contacts.linkedin, label: 'LinkedIn' },
  ];

  return (
    <div className="page contact-page">
      <section className="contact-layout">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="contact-figma-left"
        >
          <h1 className="contact-figma-title">{t.sections.contact}</h1>
          <p className="contact-figma-lead">{t.sections.openToText}</p>

          <div className="contact-figma-socials">
            {socials.map(({ key, Icon, href, label }) => {
              const isExternal = href.startsWith('http');
              return (
                <a
                  key={key}
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="contact-figma-social"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="contact-figma-card"
        >
          <form className="contact-figma-form" onSubmit={handleSubmit}>
            <div className="contact-figma-field">
              <label htmlFor="name">{t.contactForm.name}</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="contact-figma-input"
              />
            </div>

            <div className="contact-figma-field">
              <label htmlFor="email">{t.contactForm.email}</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="contact-figma-input"
              />
            </div>

            <div className="contact-figma-field">
              <label htmlFor="message">{t.contactForm.message}</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="contact-figma-input contact-figma-textarea"
              />
            </div>

            <button type="submit" className="contact-figma-submit">
              <span>{t.contactForm.send}</span>
              <Send size={14} />
            </button>
          </form>

          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`toast ${toast === t.contactForm.error ? 'toast--error' : 'toast--success'}`}
            >
              {toast}
            </motion.div>
          )}
        </motion.div>
      </section>
    </div>
  );
}
