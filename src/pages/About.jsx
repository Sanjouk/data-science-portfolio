import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Eye, Database, Cloud, Award, Users, Zap, Waves, Gamepad2, Trophy } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';
import Badge from '../components/Badge';
import { useLang } from '../context/LanguageContext';
import { setSEO } from '../utils/seo';
import { useMeasuredLines } from '../hooks/useMeasuredLines';

const iconComponents = {
  Brain: Brain,
  Eye: Eye,
  Database: Database,
  Cloud: Cloud,
  Waves: Waves,
  Gamepad2: Gamepad2,
  Trophy: Trophy,
};

const strengthIcons = [Zap, Award, Users];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

export default function About() {
  const { t } = useLang();
  useMeasuredLines([t]);

  useEffect(() => {
    setSEO(t.nav.about, t.sections.aboutMeText);
  }, [t]);

  return (
    <div className="page">
      {/* About Me */}
      <section className="section">
        <SectionTitle withLine>{t.sections.aboutMe}</SectionTitle>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="about-text"
        >
          {t.sections.aboutMeText}
        </motion.p>
      </section>

      {/* What I Do */}
      <section className="section section--what-i-do">
        <div className="what-section">
          <div className="what-section-blur" aria-hidden="true" />
          <SectionTitle withLine>{t.sections.whatIDo}</SectionTitle>
          <div className="what-grid">
            {t.whatIDo.map((item, i) => {
              const Icon = iconComponents[item.icon] || Brain;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="what-card"
                >
                  <Icon size={28} className="what-icon" />
                  <h3 className="what-title">{item.title}</h3>
                  <p className="what-desc">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <SectionTitle withLine>{t.sections.education}</SectionTitle>
        <Timeline items={t.education} />
      </section>

      {/* Experience */}
      <section className="section">
        <SectionTitle withLine>{t.sections.experience}</SectionTitle>
        <Timeline items={t.experience} />
      </section>

      {/* Skills */}
      <section className="section">
        <SectionTitle withLine>{t.sections.skills}</SectionTitle>
        <div className="skills-groups">
          {t.skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="skill-group"
            >
              <h4 className="skill-group-title">{group.category}</h4>
              <div className="skill-badges">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="section">
        <SectionTitle withLine>{t.sections.languages}</SectionTitle>
        <div className="languages-grid">
          {t.languages.map((lang, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="language-card"
            >
              <div className="language-header">
                <span className="language-name">{lang.name}</span>
                <span className="language-level">{lang.level}</span>
              </div>
              <div className="language-bar-bg">
                <motion.div
                  className="language-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strengths */}
      <section className="section">
        <SectionTitle withLine>{t.sections.strengths}</SectionTitle>
        <div className="strengths-grid">
          {t.strengths.map((s, i) => {
            const SIcon = strengthIcons[i] || Award;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="strength-card"
              >
                <SIcon size={24} className="strength-icon" />
                <h3 className="strength-title">{s.title}</h3>
                <p className="strength-desc">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
      {/* Interests */}
      <section className="section">
        <SectionTitle withLine>{t.sections.interests}</SectionTitle>
        <div className="interests-grid">
          {t.interests.map((item, i) => {
            const Icon = iconComponents[item.icon] || Brain;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="interest-card"
              >
                <Icon size={24} className="interest-icon" />
                <h3 className="interest-title">{item.title}</h3>
                <p className="interest-desc">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
