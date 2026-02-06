import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: '', email: '', message: '' });
  };

  const contactItems = [
    { icon: MapPin, title: t('contact.address'), text: t('contact.addressText') },
    { icon: Phone, title: t('contact.phone'), text: t('contact.phoneText') },
    { icon: Mail, title: t('contact.email'), text: t('contact.emailText') },
    { icon: Clock, title: t('contact.hours'), text: t('contact.hoursText') },
  ];

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[5%] w-80 h-80 bg-accent-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-warm-500/[0.04] rounded-full blur-[100px]" />
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
            {t('contact.title')}
          </h2>
          <p className="text-lg text-white/40">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {contactItems.map((item, index) => (
              <div key={index} className="glass-card p-5 group">
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/20 transition-all">
                    <item.icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1 text-sm">{item.title}</h3>
                    <p className="text-white/40 text-sm whitespace-pre-line leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-white/60 text-sm font-medium mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="glass-input w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-medium mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="glass-input w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="glass-input w-full resize-none"
                    required
                  />
                </div>
                <button type="submit" className="glass-button w-full py-4 text-center">
                  {t('contact.form.send')}
                </button>
              </form>
            </div>

            <div className="glass-card overflow-hidden h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3088892476667!2d19.812389315434896!3d41.32753797927108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5db%3A0x40092af10653720!2sRruga%20Komuna%20e%20Parisit%2C%20Tirana%2C%20Albania!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
