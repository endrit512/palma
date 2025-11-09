import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Cake } from 'lucide-react';

export function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'sq' ? 'en' : 'sq';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-vanilla-50/98 backdrop-blur-xl shadow-4d-lg'
        : 'bg-vanilla-50/95 backdrop-blur-md shadow-4d'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-vanilla-100/30 via-transparent to-gold-100/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gold-400/30 rounded-full blur-xl group-hover:bg-gold-400/50 transition-all" />
              <Cake className="w-9 h-9 text-brown-700 relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            </div>
            <span className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-r from-brown-800 via-brown-700 to-brown-800 bg-clip-text text-transparent">
              Pasticeria Palma
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {['home', 'menu', 'about', 'careers', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative px-4 py-2 text-brown-800 hover:text-gold-600 transition-all duration-300 font-medium group"
              >
                <span className="relative z-10">{t(`nav.${section}`)}</span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-600 group-hover:w-3/4 transition-all duration-300" />
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="relative px-4 py-2 text-sm font-semibold text-brown-700 hover:text-gold-600 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 border-2 border-brown-300/40 rounded-xl group-hover:border-gold-400/60 transition-colors" />
              <div className="absolute inset-0 bg-gradient-to-r from-gold-100/0 via-gold-100/20 to-gold-100/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">{i18n.language === 'sq' ? 'EN' : 'SQ'}</span>
            </button>
            <button
              onClick={() => scrollToSection('careers')}
              className="relative px-6 py-2.5 bg-gradient-to-r from-brown-700 via-brown-600 to-brown-700 text-vanilla-50 rounded-xl font-semibold shadow-4d hover:shadow-4d-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brown-600 via-brown-500 to-brown-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">{t('nav.apply')}</span>
            </button>
          </div>

          <button
            className="lg:hidden text-brown-700 hover:text-gold-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-vanilla-50/98 backdrop-blur-xl border-t border-brown-200/30 shadow-4d">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {['home', 'menu', 'about', 'careers', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 text-brown-800 hover:text-gold-600 hover:bg-gold-100/30 rounded-xl transition-all font-medium"
              >
                {t(`nav.${section}`)}
              </button>
            ))}
            <div className="flex items-center space-x-3 pt-3">
              <button
                onClick={toggleLanguage}
                className="flex-1 px-4 py-2.5 text-sm font-semibold text-brown-700 border-2 border-brown-300/40 rounded-xl text-center hover:bg-gold-100/30 transition-all"
              >
                {i18n.language === 'sq' ? 'EN' : 'SQ'}
              </button>
              <button
                onClick={() => scrollToSection('careers')}
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-brown-700 to-brown-600 text-vanilla-50 rounded-xl font-semibold text-center shadow-4d hover:shadow-4d-lg transition-all"
              >
                {t('nav.apply')}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
