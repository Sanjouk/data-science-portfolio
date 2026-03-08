import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', href, onClick, ...props }) {
  const cls = `btn btn--${variant}`;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        href={href}
        className={cls}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cls}
      {...props}
    >
      {children}
    </motion.button>
  );
}
