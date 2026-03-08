import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';
import Badge from '../components/Badge';
import { useLang } from '../context/LanguageContext';
import { setSEO } from '../utils/seo';
import { Waves, Gamepad2, Trophy } from 'lucide-react';

const interestIcons = [Waves, Gamepad2, Trophy];

export default function Resume() {
  const { t } = useLang();

  useEffect(() => {
    setSEO(t.nav.resume, t.profile.summary);
  }, [t]);

  return (
    <div className="page">
      {/* Education */}
      <section className="section">
        <SectionTitle>{t.sections.education}</SectionTitle>
        <Timeline items={t.education} />
      </section>

      {/* Experience */}
      <section className="section">
        <SectionTitle>{t.sections.experience}</SectionTitle>
        <Timeline items={t.experience} />
      </section>

      {/* Skills Grid */}
      <section className="section">
        <SectionTitle>{t.sections.skills}</SectionTitle>
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

      {/* Interests */}
      <section className="section">
        <SectionTitle>{t.sections.interests}</SectionTitle>
        <div className="interests-grid">
          {t.interests.map((interest, i) => {
            const IIcon = interestIcons[i] || Car;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="interest-card"
              >
                <IIcon size={24} className="interest-icon" />
                <h3 className="interest-title">{interest.title}</h3>
                <p className="interest-desc">{interest.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
