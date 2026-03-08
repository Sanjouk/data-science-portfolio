import { motion } from 'framer-motion';

export default function SectionTitle({ children, subtitle, withLine }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`section-title-wrap ${withLine ? 'has-line' : ''}`}
    >
      <h2 className="section-title">
        <span className="measured-title-text" style={{ display: 'inline-block' }}>{children}</span>
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="section-divider" />
      {withLine && <div className="section-line" />}
    </motion.div>
  );
}
