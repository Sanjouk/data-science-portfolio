import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="timeline-item"
        >
          <div className="timeline-dot" />
          <div className="timeline-card">
            <div className="timeline-header">
              <h3 className="timeline-title">{item.title}</h3>
              {item.company && (
                <span className="timeline-company">{item.company}</span>
              )}
              {item.institution && (
                <span className="timeline-company">{item.institution}</span>
              )}
            </div>
            <div className="timeline-meta">
              <span><Calendar size={13} /> {item.period}</span>
              <span><MapPin size={13} /> {item.location}</span>
            </div>
            <p className="timeline-desc">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
