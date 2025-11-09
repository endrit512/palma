import { useTranslation } from 'react-i18next';
import { Heart, Award, Users } from 'lucide-react';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brown mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-brown-dark/70 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-brown-dark/80 leading-relaxed">
              {t('about.story')}
            </p>
            <p className="text-lg text-brown-dark/80 leading-relaxed">
              {t('about.mission')}
            </p>
            <p className="text-lg text-brown-dark/80 leading-relaxed">
              {t('about.quality')}
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-brown/20 to-gold/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <span className="text-9xl">🧁</span>
                <p className="text-brown font-display text-2xl mt-4">
                  {t('about.title')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-brown/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-brown" />
            </div>
            <h3 className="font-display text-xl font-bold text-brown mb-3">
              {t('i18n.language') === 'sq' ? 'Pasion për Cilësi' : 'Passion for Quality'}
            </h3>
            <p className="text-brown-dark/70 leading-relaxed">
              {t('i18n.language') === 'sq'
                ? 'Çdo produkt përgatitet me kujdes dhe përkushtim të plotë'
                : 'Every product is prepared with care and complete dedication'}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-brown/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-brown" />
            </div>
            <h3 className="font-display text-xl font-bold text-brown mb-3">
              {t('i18n.language') === 'sq' ? 'Përbërës Premium' : 'Premium Ingredients'}
            </h3>
            <p className="text-brown-dark/70 leading-relaxed">
              {t('i18n.language') === 'sq'
                ? 'Përdorim vetëm përbërësit më të mirë dhe të freskët'
                : 'We use only the finest and freshest ingredients'}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-brown/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-brown" />
            </div>
            <h3 className="font-display text-xl font-bold text-brown mb-3">
              {t('i18n.language') === 'sq' ? 'Familje e Madhe' : 'Big Family'}
            </h3>
            <p className="text-brown-dark/70 leading-relaxed">
              {t('i18n.language') === 'sq'
                ? 'Ekip i dedikuar që punon me dashuri çdo ditë'
                : 'Dedicated team that works with love every day'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
