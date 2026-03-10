import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLang } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const routes = [
  { path: '/', key: 'home' },
  { path: '/about', key: 'about' },
  { path: '/projects', key: 'projects' },
  { path: '/resume', key: 'resume' },
  // { path: '/contact', key: 'contact' },
];

export default function Navbar() {
  const { t } = useLang();
  const { theme } = useTheme();
  const location = useLocation();
  const navbarRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoSrc = theme === 'light'
    ? '/branding/logo/logo_night.svg'
    : '/branding/logo/logo_day.svg';

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const navbarNode = navbarRef.current;
    if (!navbarNode) return undefined;

    let rafId = 0;
    let lastProgress = -1;
    let isFloating = false;
    let isShortPage = false;
    const animationScrollRange = 220;

    const setShortPageMode = (enabled) => {
      if (enabled !== isShortPage) {
        navbarNode.classList.toggle('navbar--short-page', enabled);
        isShortPage = enabled;
      }
    };

    const updateNavbarOnScroll = () => {
      rafId = 0;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const maxScrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
      const canAnimate = maxScrollable > animationScrollRange;

      if (!canAnimate) {
        setShortPageMode(true);
        if (lastProgress !== 0) {
          navbarNode.style.setProperty('--navbar-scroll-progress', '0');
          lastProgress = 0;
        }
        if (isFloating) {
          navbarNode.classList.remove('navbar--floating');
          isFloating = false;
        }
        return;
      }

      if (isShortPage) {
        setShortPageMode(false);
      }

      const progress = Math.min(Math.min(scrollY, maxScrollable) / animationScrollRange, 1);

      const shouldSyncEdgeProgress =
        (progress === 0 && lastProgress !== 0) || (progress === 1 && lastProgress !== 1);

      if (Math.abs(progress - lastProgress) >= 0.01 || shouldSyncEdgeProgress) {
        navbarNode.style.setProperty('--navbar-scroll-progress', progress.toFixed(3));
        lastProgress = progress;
      }

      const shouldFloat = scrollY > 8;
      if (shouldFloat !== isFloating) {
        navbarNode.classList.toggle('navbar--floating', shouldFloat);
        isFloating = shouldFloat;
      }
    };

    const queueScrollUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateNavbarOnScroll);
    };

    updateNavbarOnScroll();
    window.addEventListener('scroll', queueScrollUpdate, { passive: true });
    window.addEventListener('resize', queueScrollUpdate);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', queueScrollUpdate);
      window.removeEventListener('resize', queueScrollUpdate);
      navbarNode.style.removeProperty('--navbar-scroll-progress');
      navbarNode.classList.remove('navbar--floating');
      navbarNode.classList.remove('navbar--short-page');
    };
  }, [location.pathname]);

  return (
    <header className={`navbar ${isMobileMenuOpen ? 'navbar--menu-open' : ''}`} ref={navbarRef}>
      <div className="navbar-inner">
        <NavLink
          to="/"
          end
          className="navbar-logo-link"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Go to home page"
        >
          <img src={logoSrc} alt="Vlasov logo" className="navbar-logo" />
        </NavLink>

        {/* Nav Links */}
        <div className="navbar-menu-shell">
          <nav className="navbar-links navbar-links--desktop">
            {routes.map((r) => (
              <NavLink
                key={r.path}
                to={r.path}
                end={r.path === '/'}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? 'navbar-link--active' : ''}`
                }
              >
                {t.nav[r.key]}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Actions (Lang, Theme) */}
        <div className="navbar-actions">
          <div className="navbar-action-group">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <button
            type="button"
            className="navbar-mobile-toggle"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div
          id="mobile-nav-menu"
          className={`navbar-mobile-panel ${isMobileMenuOpen ? 'navbar-mobile-panel--open' : ''}`}
        >
          <nav className="navbar-links-mobile">
            {routes.map((r) => (
              <NavLink
                key={`mobile-${r.path}`}
                to={r.path}
                end={r.path === '/'}
                className={({ isActive }) =>
                  `navbar-mobile-link ${isActive ? 'navbar-mobile-link--active' : ''}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav[r.key]}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
