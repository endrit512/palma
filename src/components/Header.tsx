import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Cake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'sq' ? 'en' : 'sq');
  };

  const navItems = ['home', 'menu', 'about', 'careers', 'contact'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-glass-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent-500/20 rounded-full blur-lg group-hover:bg-accent-500/40 transition-all" />
              <Cake className="w-8 h-8 text-accent-400 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            </div>
            <span className="font-display text-xl md:text-2xl font-bold text-white">
              Pasticeria <span className="text-gradient">Palma</span>
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative px-4 py-2 text-white/60 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide group"
              >
                <span className="relative z-10">{t(`nav.${section}`)}</span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent-500 group-hover:w-2/3 transition-all duration-300" />
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white border border-white/[0.1] rounded-lg hover:border-white/[0.2] hover:bg-white/[0.05] transition-all duration-300"
            >
              {i18n.language === 'sq' ? 'EN' : 'SQ'}
            </button>
            <button
              onClick={() => scrollToSection('careers')}
              className="glass-button text-sm px-6 py-2.5"
            >
              {t('nav.apply')}
            </button>
          </div>

          <button
            className="lg:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-950/95 backdrop-blur-2xl border-t border-white/[0.06]"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all font-medium"
                >
                  {t(`nav.${section}`)}
                </button>
              ))}
              <div className="flex items-center space-x-3 pt-4 px-4">
                <button
                  onClick={toggleLanguage}
                  className="flex-1 py-2.5 text-sm font-medium text-white/70 border border-white/[0.1] rounded-xl text-center hover:bg-white/[0.05] transition-all"
                >
                  {i18n.language === 'sq' ? 'EN' : 'SQ'}
                </button>
                <button
                  onClick={() => scrollToSection('careers')}
                  className="flex-1 glass-button text-sm py-2.5 text-center"
                >
                  {t('nav.apply')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
