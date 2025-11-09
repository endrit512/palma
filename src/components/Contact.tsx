import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
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
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brown mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-brown-dark/70">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brown/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brown" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown mb-1">{t('contact.address')}</h3>
                  <p className="text-brown-dark/70">{t('contact.addressText')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brown/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brown" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown mb-1">{t('contact.phone')}</h3>
                  <p className="text-brown-dark/70">{t('contact.phoneText')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brown/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-brown" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown mb-1">{t('contact.email')}</h3>
                  <p className="text-brown-dark/70">{t('contact.emailText')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brown/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-brown" />
                </div>
                <div>
                  <h3 className="font-semibold text-brown mb-1">{t('contact.hours')}</h3>
                  <p className="text-brown-dark/70 whitespace-pre-line">{t('contact.hoursText')}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border-2 border-amber-200 mb-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-brown-dark font-medium mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-300 bg-white focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-brown-dark font-medium mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-300 bg-white focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-brown-dark font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-300 bg-white focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  {t('contact.form.send')}
                </button>
              </form>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border-2 border-amber-200 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3088892476667!2d19.812389315434896!3d41.32753797927108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5db%3A0x40092af10653720!2sRruga%20Komuna%20e%20Parisit%2C%20Tirana%2C%20Albania!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
