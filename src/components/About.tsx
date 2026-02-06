import { useTranslation } from 'react-i18next';
import { Heart, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const { t, i18n } = useTranslation();
  const isSq = i18n.language === 'sq';

  const values = [
    {
      icon: Heart,
      title: isSq ? 'Pasion per Cilesi' : 'Passion for Quality',
      description: isSq
        ? 'Cdo produkt pergatitet me kujdes dhe perkushtim te plote'
        : 'Every product is prepared with care and complete dedication',
    },
    {
      icon: Award,
      title: isSq ? 'Perberesit Premium' : 'Premium Ingredients',
      description: isSq
        ? 'Perdorim vetem perberesit me te mire dhe te fresket'
        : 'We use only the finest and freshest ingredients',
    },
    {
      icon: Users,
      title: isSq ? 'Familje e Madhe' : 'Big Family',
      description: isSq
        ? 'Ekip i dedikuar qe punon me dashuri cdo dite'
        : 'Dedicated team that works with love every day',
    },
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-[5%] w-72 h-72 bg-accent-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-warm-500/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/60 leading-relaxed">
              {t('about.story')}
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              {t('about.mission')}
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              {t('about.quality')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card overflow-hidden rounded-3xl">
              <img
                src="https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pastry"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl p-4">
                  <p className="text-white font-display text-lg font-bold">
                    {t('about.title')}
                  </p>
                  <p className="text-white/50 text-sm mt-1">
                    {isSq ? 'Qe nga 2010' : 'Since 2010'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:bg-accent-500/20 group-hover:border-accent-500/30 transition-all duration-300">
                <item.icon className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
