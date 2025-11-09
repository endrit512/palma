import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

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

    if (!formData.firstName.trim()) {
      newErrors.firstName = t('careers.form.required');
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = t('careers.form.required');
    }
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
    if (!formData.position) {
      newErrors.position = t('careers.form.required');
    }
    if (formData.cv && formData.cv.size > 5 * 1024 * 1024) {
      newErrors.cv = t('careers.form.fileTooLarge');
    }
    if (formData.cv && !['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(formData.cv.type)) {
      newErrors.cv = t('careers.form.invalidFileType');
    }
    if (!formData.privacy) {
      newErrors.privacy = t('careers.form.required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, cv: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
      if (formData.cv) {
        formDataToSend.append('cv', formData.cv);
      }

      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          message: '',
          cv: null,
          privacy: false,
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
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
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brown mb-4">
            {t('careers.title')}
          </h2>
          <p className="text-lg text-brown-dark/70 max-w-2xl mx-auto mb-2">
            {t('careers.subtitle')}
          </p>
          <p className="text-brown-dark/60">
            {t('careers.description')}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-amber-200 p-8 md:p-10">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-green-800">{t('careers.form.success')}</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <p className="text-red-800">{t('careers.form.error')}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-brown-dark font-medium mb-2">
                  {t('careers.form.firstName')} *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white ${
                    errors.firstName ? 'border-red-500' : 'border-amber-300'
                  } focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all`}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-brown-dark font-medium mb-2">
                  {t('careers.form.lastName')} *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white ${
                    errors.lastName ? 'border-red-500' : 'border-amber-300'
                  } focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all`}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-brown-dark font-medium mb-2">
                  {t('careers.form.email')} *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white ${
                    errors.email ? 'border-red-500' : 'border-amber-300'
                  } focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-brown-dark font-medium mb-2">
                  {t('careers.form.phone')} *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white ${
                    errors.phone ? 'border-red-500' : 'border-amber-300'
                  } focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-brown-dark font-medium mb-2">
                {t('careers.form.position')} *
              </label>
              <select
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border-2 bg-white ${
                  errors.position ? 'border-red-500' : 'border-amber-300'
                } focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all`}
              >
                <option value="">{t('careers.form.position')}</option>
                <option value="waiter">{t('careers.form.positions.waiter')}</option>
                <option value="confectioner">{t('careers.form.positions.confectioner')}</option>
                <option value="baker">{t('careers.form.positions.baker')}</option>
                <option value="salesperson">{t('careers.form.positions.salesperson')}</option>
                <option value="intern">{t('careers.form.positions.intern')}</option>
                <option value="other">{t('careers.form.positions.other')}</option>
              </select>
              {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
            </div>

            <div>
              <label className="block text-brown-dark font-medium mb-2">
                {t('careers.form.message')}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 border-amber-300 bg-white focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all resize-none"
              />
            </div>

            <div>
              <label className="block text-brown-dark font-medium mb-2">
                {t('careers.form.cv')}
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="cv-upload"
                />
                <label
                  htmlFor="cv-upload"
                  className={`flex items-center justify-center w-full px-4 py-4 border-2 border-dashed ${
                    errors.cv ? 'border-red-500' : 'border-amber-400'
                  } rounded-lg cursor-pointer hover:border-orange-500 transition-all bg-amber-50`}
                >
                  <Upload className="w-5 h-5 text-brown mr-2" />
                  <span className="text-brown-dark">
                    {formData.cv ? formData.cv.name : t('careers.form.cv')}
                  </span>
                </label>
              </div>
              {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv}</p>}
            </div>

            <div>
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.privacy}
                  onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                  className="mt-1 w-5 h-5 rounded border-brown/20 text-brown focus:ring-brown"
                />
                <span className={`text-sm ${errors.privacy ? 'text-red-500' : 'text-brown-dark/70'}`}>
                  {t('careers.form.privacy')} *
                </span>
              </label>
              {errors.privacy && <p className="text-red-500 text-sm mt-1">{errors.privacy}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? t('careers.form.uploading') : t('careers.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
