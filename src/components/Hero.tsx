import { useTranslation } from 'react-i18next';
import { ChevronDown, Sparkles } from 'lucide-react';

export function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
    >
      <div className="absolute inset-0 opacity-30" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-300/20 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[10%] w-24 h-24 opacity-10 animate-bounce" style={{ animationDuration: '6s' }}>
          <img
            src="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt=""
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>
        <div className="absolute top-[60%] right-[15%] w-32 h-32 opacity-10 animate-bounce" style={{ animationDuration: '7s', animationDelay: '1s' }}>
          <img
            src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt=""
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>
        <div className="absolute bottom-[20%] left-[20%] w-28 h-28 opacity-10 animate-bounce" style={{ animationDuration: '5.5s', animationDelay: '0.5s' }}>
          <img
            src="https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt=""
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 text-base bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            {t('i18n.language') === 'sq' ? 'Që nga 2010' : 'Since 2010'}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-amber-900 mb-6 leading-tight">
            <span className="inline-block relative">
              {t('hero.headline').split(' ')[0]}
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 transform -skew-x-12" />
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-800 via-amber-900 to-orange-800 bg-clip-text text-transparent">
              {t('hero.headline').split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-amber-800 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            {t('hero.subtext')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('menu')}
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-700 via-amber-800 to-orange-700 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-amber-700 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center space-x-2">
                <span>{t('hero.viewMenu')}</span>
                <ChevronDown className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-white border-2 border-orange-800 text-orange-800 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-orange-800 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 group-hover:text-white transition-colors">
                {t('hero.orderNow')}
              </span>
            </button>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '15+', label: t('i18n.language') === 'sq' ? 'Vite Eksperiencë' : 'Years Experience' },
              { number: '50+', label: t('i18n.language') === 'sq' ? 'Produkte' : 'Products' },
              { number: '1000+', label: t('i18n.language') === 'sq' ? 'Klientë të Lumtur' : 'Happy Customers' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center hover:scale-110 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-amber-900 mb-2">{stat.number}</div>
                <div className="text-amber-800 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-amber-600/50" />
        </div>
      </div>
    </section>
  );
}
