import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  cv: File | null;
  privacy: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  position?: string;
  cv?: string;
  privacy?: string;
}

export function Careers() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    cv: null,
    privacy: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = t('careers.form.required');
    if (!formData.lastName.trim()) newErrors.lastName = t('careers.form.required');
    if (!formData.email.trim()) {
      newErrors.email = t('careers.form.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('careers.form.invalidEmail');
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t('careers.form.required');
    } else if (!/^\+?[\d\s-]{8,}$/.test(formData.phone)) {
      newErrors.phone = t('careers.form.invalidPhone');
    }
    if (!formData.position) newErrors.position = t('careers.form.required');
    if (formData.cv && formData.cv.size > 5 * 1024 * 1024) newErrors.cv = t('careers.form.fileTooLarge');
    if (formData.cv && !['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(formData.cv.type)) {
      newErrors.cv = t('careers.form.invalidFileType');
    }
    if (!formData.privacy) newErrors.privacy = t('careers.form.required');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('message', formData.message);
      if (formData.cv) formDataToSend.append('cv', formData.cv);

      const response = await fetch('/api/apply', { method: 'POST', body: formDataToSend });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', position: '', message: '', cv: null, privacy: false });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `glass-input w-full ${errors[field] ? 'border-red-500/50 focus:border-red-500/50' : ''}`;

  return (
    <section id="careers" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[15%] w-72 h-72 bg-accent-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-warm-500/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            {t('careers.title')}
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto mb-2">
            {t('careers.subtitle')}
          </p>
          <p className="text-white/30 text-sm">{t('careers.description')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-10"
        >
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <p className="text-emerald-300 text-sm">{t('careers.form.success')}</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <p className="text-red-300 text-sm">{t('careers.form.error')}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-white/60 text-sm font-medium mb-2">
                  {t('careers.form.firstName')} *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className={inputClass('firstName')}
                />
                {errors.firstName && <p className="text-red-400 text-xs mt-1.5">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-white/60 text-sm font-medium mb-2">
                  {t('careers.form.lastName')} *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className={inputClass('lastName')}
                />
                {errors.lastName && <p className="text-red-400 text-xs mt-1.5">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-white/60 text-sm font-medium mb-2">
                  {t('careers.form.email')} *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass('email')}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-white/60 text-sm font-medium mb-2">
                  {t('careers.form.phone')} *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass('phone')}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-white/60 text-sm font-medium mb-2">
                {t('careers.form.position')} *
              </label>
              <select
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className={inputClass('position')}
              >
                <option value="" className="bg-dark-900">{t('careers.form.position')}</option>
                <option value="waiter" className="bg-dark-900">{t('careers.form.positions.waiter')}</option>
                <option value="confectioner" className="bg-dark-900">{t('careers.form.positions.confectioner')}</option>
                <option value="baker" className="bg-dark-900">{t('careers.form.positions.baker')}</option>
                <option value="salesperson" className="bg-dark-900">{t('careers.form.positions.salesperson')}</option>
                <option value="intern" className="bg-dark-900">{t('careers.form.positions.intern')}</option>
                <option value="other" className="bg-dark-900">{t('careers.form.positions.other')}</option>
              </select>
              {errors.position && <p className="text-red-400 text-xs mt-1.5">{errors.position}</p>}
            </div>

            <div>
              <label className="block text-white/60 text-sm font-medium mb-2">
                {t('careers.form.message')}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="glass-input w-full resize-none"
              />
            </div>

            <div>
              <label className="block text-white/60 text-sm font-medium mb-2">
                {t('careers.form.cv')}
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setFormData({ ...formData, cv: e.target.files?.[0] || null })}
                className="hidden"
                id="cv-upload"
              />
              <label
                htmlFor="cv-upload"
                className={`flex items-center justify-center w-full px-5 py-4 border border-dashed ${
                  errors.cv ? 'border-red-500/40' : 'border-white/[0.12]'
                } rounded-xl cursor-pointer hover:border-accent-500/30 hover:bg-white/[0.03] transition-all`}
              >
                <Upload className="w-5 h-5 text-white/30 mr-3" />
                <span className="text-white/40 text-sm">
                  {formData.cv ? formData.cv.name : t('careers.form.cv')}
                </span>
              </label>
              {errors.cv && <p className="text-red-400 text-xs mt-1.5">{errors.cv}</p>}
            </div>

            <div>
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.privacy}
                  onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-accent-500 focus:ring-accent-500/30"
                />
                <span className={`text-sm ${errors.privacy ? 'text-red-400' : 'text-white/40'}`}>
                  {t('careers.form.privacy')} *
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="glass-button w-full py-4 text-center disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('careers.form.uploading') : t('careers.form.submit')}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
