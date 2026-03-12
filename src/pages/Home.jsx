import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { useLang } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { setSEO } from '../utils/seo';
import { useMeasuredLines } from '../hooks/useMeasuredLines';

const dayImg = '/images/main_photo_day.png';
const nightImg = '/images/main_photo_night.png';

import icon1 from '../assets/icons/icon1.svg';
import icon2 from '../assets/icons/icon2.svg';
import icon3 from '../assets/icons/icon3.svg';
import icon4 from '../assets/icons/icon4.svg';
import n2 from '../assets/icons/number2.svg';
import n0 from '../assets/icons/number0.svg';
import n6 from '../assets/icons/number6.svg';

const iconMap = {
  0: icon1,
  1: icon2,
  2: icon3,
  3: icon4,
};

export default function Home() {
  const { t } = useLang();
  const { theme } = useTheme();
  useMeasuredLines([t]);

  useEffect(() => {
    setSEO(t.nav.home, t.profile.summary);
  }, [t]);

  const featured = t.projects.filter((p) => p.featured);

  return (
    <div style={{ position: 'relative' }}>

      {/* Hero in wide container */}
      <div className="page--hero">
        <section className="hero">
          <div className="hero-blur" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-content"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hero-greeting"
            >
              {t.hero.greeting}
            </motion.span>

            <h1 className="hero-name">
              {t.profile.name.split(' ')[0]} <br /> 
              {t.profile.name.split(' ')[1]}
            </h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <p className="hero-desc">{t.hero.description}</p>

            <div className="hero-actions">
              <Button variant="primary">
                <Link to="/projects" className="btn-link">
                  {t.hero.cta1} <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-image-wrapper"
          >
            <img
              src={theme === 'light' ? dayImg : nightImg}
              alt="Hero illustration"
              className="hero-image"
            />
          </motion.div>
        </section>
      </div>

      {/* Rest of page in normal container */}
      <div className="page">
        <section className="section section--decorated">
          <div className="highlights-grid">
            {t.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="highlight-card"
              >
                <span className="highlight-icon">
                  <img src={iconMap[i]} alt="" style={{ height: '3.5rem', width: 'auto' }} />
                </span>
                <h3 className="highlight-title">{h.title}</h3>
                <p className="highlight-desc">{h.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="right-blur"></div>
        </section>


      </div>

      <div className="page--full">
        <section className="section section--year">
          <div className="year-block">
            <div className="year-svg-row">
              <img src={n2} alt="2" className="year-digit" />
              <img src={n0} alt="0" className="year-digit" />
              <img src={n2} alt="2" className="year-digit" />
              <img src={n6} alt="6" className="year-digit" />
            </div>
          </div>
        </section>
      </div>

      <div className="page">

        <section className="section">
          <SectionTitle withLine>{t.featuredTitle}</SectionTitle>
          <div className="projects-grid">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>

          <div className="section-cta">
            <Link to="/projects" className="btn btn--outline">
              {t.sections.projects} <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
