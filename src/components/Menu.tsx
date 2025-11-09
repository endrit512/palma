import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'cakes' | 'croissants' | 'traditional' | 'drinks';
}

export function Menu() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<'cakes' | 'croissants' | 'traditional' | 'drinks'>('cakes');

  const menuItems: Record<string, MenuItem[]> = {
    cakes: [
      {
        name: i18n.language === 'sq' ? 'Torte Çokollatë' : 'Chocolate Cake',
        description: i18n.language === 'sq' ? 'Torte e pasur me çokollatë belge' : 'Rich cake with Belgian chocolate',
        price: '€25',
        image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'cakes',
      },
      {
        name: i18n.language === 'sq' ? 'Torte Frutash' : 'Fruit Cake',
        description: i18n.language === 'sq' ? 'Fruta të freskëta sezonale' : 'Fresh seasonal fruits',
        price: '€22',
        image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'cakes',
      },
      {
        name: i18n.language === 'sq' ? 'Torte Tiramisu' : 'Tiramisu Cake',
        description: i18n.language === 'sq' ? 'Recetë tradicionale italiane' : 'Traditional Italian recipe',
        price: '€24',
        image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'cakes',
      },
      {
        name: i18n.language === 'sq' ? 'Torte Bajame' : 'Almond Cake',
        description: i18n.language === 'sq' ? 'E bërë me bajame të bluar' : 'Made with ground almonds',
        price: '€23',
        image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'cakes',
      },
    ],
    croissants: [
      {
        name: i18n.language === 'sq' ? 'Kroasan Klasik' : 'Classic Croissant',
        description: i18n.language === 'sq' ? 'I pjekur të freskët çdo mëngjes' : 'Baked fresh every morning',
        price: '€2.50',
        image: 'https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'croissants',
      },
      {
        name: i18n.language === 'sq' ? 'Kroasan me Çokollatë' : 'Chocolate Croissant',
        description: i18n.language === 'sq' ? 'Mbushur me çokollatë të butë' : 'Filled with soft chocolate',
        price: '€3',
        image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'croissants',
      },
      {
        name: i18n.language === 'sq' ? 'Kroasan me Bajame' : 'Almond Croissant',
        description: i18n.language === 'sq' ? 'Me mbushje bajamesh të ëmbël' : 'With sweet almond filling',
        price: '€3.50',
        image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'croissants',
      },
    ],
    traditional: [
      {
        name: i18n.language === 'sq' ? 'Bakllava' : 'Baklava',
        description: i18n.language === 'sq' ? 'Recetë tradicionale me arra' : 'Traditional recipe with walnuts',
        price: '€5',
        image: 'https://images.pexels.com/photos/8104280/pexels-photo-8104280.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'traditional',
      },
      {
        name: i18n.language === 'sq' ? 'Tulumba' : 'Tulumba',
        description: i18n.language === 'sq' ? 'E ëmbël me shurup' : 'Sweet with syrup',
        price: '€4',
        image: 'https://images.pexels.com/photos/7363676/pexels-photo-7363676.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'traditional',
      },
      {
        name: i18n.language === 'sq' ? 'Kadaif' : 'Kadaif',
        description: i18n.language === 'sq' ? 'Me arra dhe kanellë' : 'With walnuts and cinnamon',
        price: '€4.50',
        image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'traditional',
      },
      {
        name: i18n.language === 'sq' ? 'Revani' : 'Revani',
        description: i18n.language === 'sq' ? 'Ëmbëlsirë me kokos' : 'Dessert with coconut',
        price: '€4.20',
        image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'traditional',
      },
    ],
    drinks: [
      {
        name: i18n.language === 'sq' ? 'Espresso' : 'Espresso',
        description: i18n.language === 'sq' ? 'Kafe e fortë italiane' : 'Strong Italian coffee',
        price: '€1.50',
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'drinks',
      },
      {
        name: i18n.language === 'sq' ? 'Cappuccino' : 'Cappuccino',
        description: i18n.language === 'sq' ? 'Me qumësht të shkumëzuar' : 'With frothed milk',
        price: '€2',
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'drinks',
      },
      {
        name: i18n.language === 'sq' ? 'Latte Macchiato' : 'Latte Macchiato',
        description: i18n.language === 'sq' ? 'Shtresa të qumështit dhe kafesë' : 'Layers of milk and coffee',
        price: '€2.50',
        image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'drinks',
      },
      {
        name: i18n.language === 'sq' ? 'Çaj i Bimëve' : 'Herbal Tea',
        description: i18n.language === 'sq' ? 'Përzgjedhje e bimëve natyrale' : 'Selection of natural herbs',
        price: '€2',
        image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'drinks',
      },
    ],
  };

  const tabs: Array<{ key: typeof activeTab; label: string }> = [
    { key: 'cakes', label: t('menu.tabs.cakes') },
    { key: 'croissants', label: t('menu.tabs.croissants') },
    { key: 'traditional', label: t('menu.tabs.traditional') },
    { key: 'drinks', label: t('menu.tabs.drinks') },
  ];

  return (
    <section id="menu" className="relative py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-brown-800 mb-4">
            {t('menu.title')}
          </h2>
          <p className="text-lg text-brown-600 max-w-2xl mx-auto font-medium">
            {t('menu.subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-8 py-3.5 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
                activeTab === tab.key
                  ? 'shadow-4d-lg transform scale-105'
                  : 'shadow-4d hover:shadow-4d-lg hover:-translate-y-1'
              }`}
            >
              {activeTab === tab.key ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-brown-700 via-brown-600 to-brown-700" />
                  <span className="relative z-10 text-vanilla-50">{tab.label}</span>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-white" />
                  <span className="relative z-10 text-brown-700">{tab.label}</span>
                </>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems[activeTab].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-4d hover:shadow-4d-xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/70 via-brown-900/30 to-transparent z-10" />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-vanilla-50">
                <h3 className="font-display text-xl font-bold text-brown-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-brown-600 text-sm mb-4 leading-relaxed h-10">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                    {item.price}
                  </span>
                  <button className="px-5 py-2.5 bg-gradient-to-r from-brown-700 to-brown-600 text-vanilla-50 rounded-xl hover:from-brown-600 hover:to-brown-500 transition-all duration-300 text-sm font-semibold shadow-4d hover:shadow-4d-lg transform hover:-translate-y-1">
                    {i18n.language === 'sq' ? 'Porosit' : 'Order'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
