
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactReason: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d3me02les84r01urdhe0', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          contactReason: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'ri-map-pin-line',
      title: 'Adres',
      details: ['DasDas, Ataşehir', 'İstanbul, Türkiye']
    },
    {
      icon: 'ri-mail-line',
      title: 'E-posta',
      details: ['info@koopkredi.org', 'destek@koopkredi.org']
    },
    {
      icon: 'ri-phone-line',
      title: 'Telefon',
      details: ['+90 216 123 45 67', '+90 216 123 45 68']
    },
    {
      icon: 'ri-time-line',
      title: 'Çalışma Saatleri',
      details: ['Pazartesi - Cuma: 09:00 - 18:00', 'Cumartesi: 09:00 - 13:00']
    }
  ];

  const departments = [
    {
      title: 'Kooperatif Başvuruları',
      email: 'basvuru@koopkredi.org',
      description: 'Kredi başvuruları ve kooperatif kayıtları'
    },
    {
      title: 'Yatırımcı İlişkileri',
      email: 'yatirimci@koopkredi.org',
      description: 'Yatırım fırsatları ve ortaklık teklifleri'
    },
    {
      title: 'Teknik Destek',
      email: 'destek@koopkredi.org',
      description: 'Platform kullanımı ve teknik sorunlar'
    },
    {
      title: 'Genel Bilgi',
      email: 'info@koopkredi.org',
      description: 'Genel sorular ve bilgi talepleri'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              İletişim
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sorularınız için bize ulaşın. KoopKredi ekibi size yardımcı olmak için burada.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${info.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Bize Yazın</h2>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <form onSubmit={handleSubmit} data-readdy-form id="iletisim-formu">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Adınızı ve soyadınızı giriniz"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="ornek@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-5

                      focus:border-blue-500 text-sm"
                        placeholder="0555 123 45 67"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        İletişim Nedeni *
                      </label>
                      <select
                        name="contactReason"
                        value={formData.contactReason}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm pr-8"
                      >
                        <option value="">Seçiniz</option>
                        <option value="kooperatif-basvuru">Kooperatif Başvurusu</option>
                        <option value="yatirimci-bilgi">Yatırımcı Bilgileri</option>
                        <option value="teknik-destek">Teknik Destek</option>
                        <option value="genel-bilgi">Genel Bilgi</option>
                        <option value="ortaklik">Ortaklık Teklifi</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Konu *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Mesajınızın konusu"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mesaj *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Mesajınızı buraya yazınız (max 500 karakter)"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-orange-700 disabled:bg-gray-400 transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                      {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                    </button>

                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                        Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Konum</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2441!2d29.1244!3d40.9769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac82d4e0d7c45%3A0x123456789!2sAta%C5%9Fehir%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KoopKredi Ofis Konumu"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Departmanlarımız
            </h2>
            <p className="text-xl text-gray-600">
              Doğru departmana ulaşarak daha hızlı yanıt alın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{dept.title}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <a 
                  href={`mailto:${dept.email}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors cursor-pointer"
                >
                  <i className="ri-mail-line mr-2"></i>
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sosyal Medyada Takip Edin
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            KoopKredi'nin son gelişmelerini ve kooperatif hikayelerini sosyal medya hesaplarımızdan takip edebilirsiniz.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
            >
              <i className="ri-linkedin-fill text-2xl text-white"></i>
            </a>
            <a 
              href="#" 
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
            >
              <i className="ri-instagram-line text-2xl text-white"></i>
            </a>
            <a 
              href="#" 
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
            >
              <i className="ri-twitter-x-line text-2xl text-white"></i>
            </a>
            <a 
              href="#" 
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
            >
              <i className="ri-youtube-line text-2xl text-white"></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
