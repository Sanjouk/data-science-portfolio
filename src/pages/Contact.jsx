import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Linkedin, Github, Send } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { setSEO } from '../utils/seo';

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '', botField: '' });
  const [toast, setToast] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setSEO(t.nav.contact, t.sections.openToText);
  }, [t]);

  const encodeForm = (data) => new URLSearchParams(data).toString();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setToast(t.contactForm.error);
      setTimeout(() => setToast(''), 3000);
      return;
    }

    if (form.botField) return;

    setIsSubmitting(true);

    try {
      if (import.meta.env.DEV) {
        await new Promise((resolve) => setTimeout(resolve, 450));
      } else {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encodeForm({
            'form-name': 'contact',
            name: form.name,
            email: form.email,
            message: form.message,
            'bot-field': form.botField,
          }),
        });

        if (!response.ok) {
          throw new Error('Netlify form submission failed');
        }
      }

      setToast(t.contactForm.success);
      setForm({ name: '', email: '', message: '', botField: '' });
      setTimeout(() => setToast(''), 4000);
    } catch {
      setToast(t.contactForm.submitError || t.contactForm.error);
      setTimeout(() => setToast(''), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { key: 'instagram', Icon: Instagram, href: t.contacts.instagram || '#', label: 'Instagram' },
    { key: 'email', Icon: Mail, href: `mailto:${t.contacts.email}`, label: 'Email' },
    { key: 'github', Icon: Github, href: t.contacts.github, label: 'GitHub' },
    { key: 'linkedin', Icon: Linkedin, href: t.contacts.linkedin, label: 'LinkedIn' },
  ];
  const isErrorToast = toast === t.contactForm.error || toast === t.contactForm.submitError;

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
          <form
            className="contact-figma-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="bot-field"
              className="contact-figma-honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={form.botField}
              onChange={(e) => setForm({ ...form, botField: e.target.value })}
            />

            <div className="contact-figma-field">
              <label htmlFor="name">{t.contactForm.name}</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="contact-figma-input"
                required
              />
            </div>

            <div className="contact-figma-field">
              <label htmlFor="email">{t.contactForm.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="contact-figma-input"
                required
              />
            </div>

            <div className="contact-figma-field">
              <label htmlFor="message">{t.contactForm.message}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="contact-figma-input contact-figma-textarea"
                required
              />
            </div>

            <button type="submit" className="contact-figma-submit" disabled={isSubmitting}>
              <span>{isSubmitting ? (t.contactForm.sending || t.contactForm.send) : t.contactForm.send}</span>
              <Send size={14} />
            </button>
          </form>

          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`toast ${isErrorToast ? 'toast--error' : 'toast--success'}`}
            >
              {toast}
            </motion.div>
          )}
        </motion.div>
      </section>
    </div>
  );
}
