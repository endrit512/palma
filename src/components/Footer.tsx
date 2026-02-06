import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Mail, Phone, Cake } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-dark-950/80 backdrop-blur-xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Cake className="w-6 h-6 text-accent-400" />
              <span className="font-display text-lg font-bold text-white">
                Pasticeria <span className="text-gradient">Palma</span>
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              {t('hero.subtext')}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-white/70 mb-4 text-sm tracking-wide uppercase">
              {t('contact.title')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/40 text-sm">
                <Phone className="w-4 h-4 text-accent-500/50" />
                <span>{t('contact.phoneText')}</span>
              </div>
              <div className="flex items-center space-x-3 text-white/40 text-sm">
                <Mail className="w-4 h-4 text-accent-500/50" />
                <span>{t('contact.emailText')}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-white/70 mb-4 text-sm tracking-wide uppercase">Social Media</h4>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:bg-accent-500/10 hover:border-accent-500/20 transition-all duration-300"
              >
                <Facebook className="w-4 h-4 text-white/50" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:bg-accent-500/10 hover:border-accent-500/20 transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-white/50" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/25">
          <p>{t('footer.copyright')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white/50 transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-white/50 transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
