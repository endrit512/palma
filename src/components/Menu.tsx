import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

const menuData = {
  cakes: [
    { nameEn: 'Chocolate Cake', nameSq: 'Torte Cokollatë', descEn: 'Rich cake with Belgian chocolate', descSq: 'Torte e pasur me cokollatë belge', price: '25', image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nameEn: 'Fruit Cake', nameSq: 'Torte Frutash', descEn: 'Fresh seasonal fruits', descSq: 'Fruta te fresketa sezonale', price: '22', image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nameEn: 'Tiramisu Cake', nameSq: 'Torte Tiramisu', descEn: 'Traditional Italian recipe', descSq: 'Recete tradicionale italiane', price: '24', image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nameEn: 'Almond Cake', nameSq: 'Torte Bajame', descEn: 'Made with ground almonds', descSq: 'E bere me bajame te bluar', price: '23', image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ],
  croissants: [
    { nameEn: 'Classic Croissant', nameSq: 'Kroasan Klasik', descEn: 'Baked fresh every morning', descSq: 'I pjekur te fresket cdo mengjes', price: '2.50', image: 'https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nameEn: 'Chocolate Croissant', nameSq: 'Kroasan me Cokollatë', descEn: 'Filled with soft chocolate', descSq: 'Mbushur me cokollatë te bute', price: '3', image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nameEn: 'Almond Croissant', nameSq: 'Kroasan me Bajame', descEn: 'With sweet almond filling', descSq: 'Me mbushje bajamesh te embel', price: '3.50', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ],
  traditional: [
    { nameEn: 'Baklava', nameSq: 'Bakllava', descEn: 'Traditional recipe with walnuts', descSq: 'Recete tradicionale me arra', price: '5', image: 'https://images.pexels.com/photos/8104280/pexels-photo-8104280.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nameEn: 'Tulumba', nameSq: 'Tulumba', descEn: 'Sweet with syrup', descSq: 'E embel me shurup', price: '4', image: 'https://images.pexels.com/photos/7363676/pexels-photo-7363676.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nameEn: 'Kadaif', nameSq: 'Kadaif', descEn: 'With walnuts and cinnamon', descSq: 'Me arra dhe kanelle', price: '4.50', image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nameEn: 'Revani', nameSq: 'Revani', descEn: 'Dessert with coconut', descSq: 'Embelsire me kokos', price: '4.20', image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ],
  drinks: [
    { nameEn: 'Espresso', nameSq: 'Espresso', descEn: 'Strong Italian coffee', descSq: 'Kafe e forte italiane', price: '1.50', image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nameEn: 'Cappuccino', nameSq: 'Cappuccino', descEn: 'With frothed milk', descSq: 'Me qumesht te shkumezuar', price: '2', image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nameEn: 'Latte Macchiato', nameSq: 'Latte Macchiato', descEn: 'Layers of milk and coffee', descSq: 'Shtresa te qumeshtit dhe kafese', price: '2.50', image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { nameEn: 'Herbal Tea', nameSq: 'Caj i Bimeve', descEn: 'Selection of natural herbs', descSq: 'Perzgjedhje e bimeve natyrale', price: '2', image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ],
};

type Category = keyof typeof menuData;

export function Menu() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<Category>('cakes');
  const isSq = i18n.language === 'sq';

  const tabs: Array<{ key: Category; label: string }> = [
    { key: 'cakes', label: t('menu.tabs.cakes') },
    { key: 'croissants', label: t('menu.tabs.croissants') },
    { key: 'traditional', label: t('menu.tabs.traditional') },
    { key: 'drinks', label: t('menu.tabs.drinks') },
  ];

  const items: MenuItem[] = menuData[activeTab].map((item) => ({
    name: isSq ? item.nameSq : item.nameEn,
    description: isSq ? item.descSq : item.descEn,
    price: item.price,
    image: item.image,
  }));

  return (
    <section id="menu" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] w-80 h-80 bg-accent-500/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-warm-500/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            {t('menu.title')}
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            {t('menu.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeTab === tab.key
                  ? 'glass-button'
                  : 'text-white/50 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card group overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent z-10" />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 z-20 px-3 py-1.5 glass rounded-lg">
                    <span className="text-accent-400 font-bold text-sm">{item.price}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white mb-1.5 group-hover:text-accent-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <button className="w-full py-2.5 text-sm font-medium text-accent-400 border border-accent-500/20 rounded-lg hover:bg-accent-500/10 hover:border-accent-500/30 transition-all duration-300">
                    {isSq ? 'Porosit' : 'Order'}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
