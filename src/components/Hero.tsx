import { useTranslation } from 'react-i18next';
import { ChevronDown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const { t, i18n } = useTranslation();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-transparent to-dark-950" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-accent-500/10 rounded-full blur-[80px] animate-float" />
        <div className="absolute bottom-1/3 right-[15%] w-72 h-72 bg-warm-500/10 rounded-full blur-[80px] animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 glass rounded-full">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium text-white/80">
              {i18n.language === 'sq' ? 'Qe nga 2010' : 'Since 2010'}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-[1.1]">
            {t('hero.headline').split(' ').slice(0, 2).join(' ')}
            <br />
            <span className="text-gradient">
              {t('hero.headline').split(' ').slice(2).join(' ')}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            {t('hero.subtext')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollToSection('menu')} className="glass-button group">
              <span className="flex items-center gap-2">
                {t('hero.viewMenu')}
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="glass-button-outline">
              {t('hero.orderNow')}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: '15+', label: i18n.language === 'sq' ? 'Vite Eksperience' : 'Years Experience' },
              { number: '50+', label: i18n.language === 'sq' ? 'Produkte' : 'Products' },
              { number: '1000+', label: i18n.language === 'sq' ? 'Kliente te Lumtur' : 'Happy Customers' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-5xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform">
                  {stat.number}
                </div>
                <div className="text-white/40 text-sm font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/20" />
        </motion.div>
      </div>
    </section>
  );
}
