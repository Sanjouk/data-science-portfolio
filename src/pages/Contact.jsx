import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, Send, Briefcase } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { useLang } from '../context/LanguageContext';
import { setSEO } from '../utils/seo';

const contactIcons = {
  phone: Phone,
  email: Mail,
  linkedin: Linkedin,
  github: Github,
};

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

  const contacts = [
    { key: 'phone', value: t.contacts.phone, href: `tel:${t.contacts.phone}` },
    { key: 'email', value: t.contacts.email, href: `mailto:${t.contacts.email}` },
    { key: 'linkedin', value: 'LinkedIn', href: t.contacts.linkedin },
    { key: 'github', value: 'GitHub', href: t.contacts.github },
  ];

  return (
    <div className="page">
      {/* Contact Cards */}
      <section className="section">
        <SectionTitle>{t.sections.contact}</SectionTitle>
        <div className="contacts-grid">
          {contacts.map((c, i) => {
            const Icon = contactIcons[c.key];
            return (
              <motion.a
                key={c.key}
                href={c.href}
                target={c.key === 'linkedin' || c.key === 'github' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="contact-card"
              >
                <Icon size={22} className="contact-icon" />
                <span className="contact-value">{c.value}</span>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section className="section">
        <div className="contact-form-wrap">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.contactForm.name}</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.contactForm.email}</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.contactForm.message}</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="form-input"
              />
            </div>
            <Button type="submit" variant="primary">
              <Send size={16} /> {t.contactForm.send}
            </Button>
          </form>

          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`toast ${toast === t.contactForm.error ? 'toast--error' : 'toast--success'}`}
            >
              {toast}
            </motion.div>
          )}
        </div>
      </section>

      {/* Open to opportunities */}
      <section className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="opportunity-banner"
        >
          <Briefcase size={28} className="opportunity-icon" />
          <div>
            <h3 className="opportunity-title">{t.sections.openTo}</h3>
            <p className="opportunity-text">{t.sections.openToText}</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
