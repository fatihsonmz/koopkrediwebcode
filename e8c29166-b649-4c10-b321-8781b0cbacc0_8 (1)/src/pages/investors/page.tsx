
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const InvestorsPage = () => {
  const [formData, setFormData] = useState({
    investorName: '',
    organizationType: '',
    contactPerson: '',
    email: '',
    phone: '',
    investmentAmount: '',
    investmentType: '',
    investmentGoals: '',
    esgFocus: '',
    previousExperience: '',
    timeHorizon: '',
    additionalInfo: ''
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

      const response = await fetch('https://readdy.ai/api/form/d3me02les84r01urdhdg', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          investorName: '',
          organizationType: '',
          contactPerson: '',
          email: '',
          phone: '',
          investmentAmount: '',
          investmentType: '',
          investmentGoals: '',
          esgFocus: '',
          previousExperience: '',
          timeHorizon: '',
          additionalInfo: ''
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

  const benefits = [
    {
      icon: 'ri-line-chart-line',
      title: 'Sosyal Etki Odaklı Getiri',
      description: 'Finansal getiri ile birlikte ölçülebilir sosyal etki yaratın.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Düşük Risk Profili',
      description: 'Kooperatif güvencesi ve çeşitlendirilmiş portföy ile güvenli yatırım.'
    },
    {
      icon: 'ri-eye-line',
      title: 'Şeffaf Raporlama',
      description: 'Düzenli etki raporları ve finansal performans takibi.'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Sürdürülebilir Kalkınma',
      description: 'UN SDG hedefleri doğrultusunda sürdürülebilir projelere yatırım.'
    }
  ];

  const impactMetrics = [
    {
      number: '150+',
      label: 'Desteklenen Kooperatif',
      icon: 'ri-building-line'
    },
    {
      number: '₺5.2M',
      label: 'Toplam Kredi Hacmi',
      icon: 'ri-money-dollar-circle-line'
    },
    {
      number: '2,500+',
      label: 'Etkilenen Aile',
      icon: 'ri-group-line'
    },
    {
      number: '%95',
      label: 'Geri Ödeme Oranı',
      icon: 'ri-check-line'
    }
  ];

  const partners = [
    {
      name: 'Etki Yatırım A.Ş.',
      type: 'Kurumsal Yatırımcı',
      investment: '₺2.5M',
      focus: 'Kadın kooperatifleri'
    },
    {
      name: 'Sürdürülebilir Gelecek Fonu',
      type: 'Yatırım Fonu',
      investment: '₺1.8M',
      focus: 'Organik tarım'
    },
    {
      name: 'Sosyal Girişim Vakfı',
      type: 'Vakıf',
      investment: '₺800K',
      focus: 'Kırsal kalkınma'
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
              Yatırımcılar İçin
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sosyal etki yaratırken finansal getiri elde edin. KoopKredi ile dayanışma ekonomisinin bir parçası olun.
            </p>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden KoopKredi'ye Yatırım?
            </h2>
            <p className="text-xl text-gray-600">
              Finansal getiri ile sosyal etkiyi birleştiren yatırım fırsatı
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${benefit.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sosyal Etki Modelimiz
            </h2>
            <p className="text-xl text-blue-100">
              Yatırımınızın yarattığı ölçülebilir etki
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${metric.icon} text-2xl text-white`}></i>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{metric.number}</div>
                <div className="text-blue-100">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG & SROI */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ESG ve SROI Odaklı Yaklaşım
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-leaf-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Çevresel (E)</h3>
                    <p className="text-gray-600">Organik tarım, sürdürülebilir üretim ve çevre dostu projeleri destekliyoruz.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-group-line text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sosyal (S)</h3>
                    <p className="text-gray-600">Kadın istihdamı, kırsal kalkınma ve toplumsal cinsiyet eşitliğini destekliyoruz.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-shield-check-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Yönetişim (G)</h3>
                    <p className="text-gray-600">Şeffaf yönetim, hesap verebilirlik ve etik değerleri benimseriz.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=ESG%20investment%20concept%20visualization%2C%20sustainable%20development%20goals%2C%20environmental%20social%20governance%20icons%2C%20professional%20infographic%20style%2C%20blue%20and%20orange%20colors%2C%20modern%20design%2C%20clean%20background&width=600&height=500&seq=esg&orientation=portrait"
                alt="ESG Yaklaşımı"
                className="rounded-xl shadow-lg object-cover object-top w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Finansal Ortaklarımız
            </h2>
            <p className="text-xl text-gray-600">
              KoopKredi'ye güvenen yatırımcı kuruluşlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{partner.type}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Yatırım:</span>
                    <span className="font-semibold">{partner.investment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Odak:</span>
                    <span className="font-semibold">{partner.focus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Yatırımcı Başvuru Formu
            </h2>
            <p className="text-xl text-gray-600">
              KoopKredi'ye yatırım yapmak için başvuru formunu doldurun
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8">
            <form onSubmit={handleSubmit} data-readdy-form id="yatirimci-basvuru">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yatırımcı/Kuruluş Adı *
                  </label>
                  <input
                    type="text"
                    name="investorName"
                    value={formData.investorName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Yatırımcı adını giriniz"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kuruluş Türü *
                  </label>
                  <select
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm pr-8"
                  >
                    <option value="">Seçiniz</option>
                    <option value="bireysel">Bireysel Yatırımcı</option>
                    <option value="kurumsal">Kurumsal Yatırımcı</option>
                    <option value="fon">Yatırım Fonu</option>
                    <option value="vakif">Vakıf/Dernek</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    İletişim Kişisi *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Ad Soyad"
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
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="0555 123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yatırım Tutarı (₺) *
                  </label>
                  <select
                    name="investmentAmount"
                    value={formData.investmentAmount}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm pr-8"
                  >
                    <option value="">Seçiniz</option>
                    <option value="100000-500000">₺100.000 - ₺500.000</option>
                    <option value="500000-1000000">₺500.000 - ₺1.000.000</option>
                    <option value="1000000-5000000">₺1.000.000 - ₺5.000.000</option>
                    <option value="5000000+">₺5.000.000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yatırım Türü *
                  </label>
                  <select
                    name="investmentType"
                    value={formData.investmentType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm pr-8"
                  >
                    <option value="">Seçiniz</option>
                    <option value="kredi-fonu">Kredi Fonu</option>
                    <option value="hisse-yatirimi">Hisse Yatırımı</option>
                    <option value="hibrit">Hibrit Model</option>
                    <option value="bagis">Bağış</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yatırım Vadesi *
                  </label>
                  <select
                    name="timeHorizon"
                    value={formData.timeHorizon}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm pr-8"
                  >
                    <option value="">Seçiniz</option>
                    <option value="1-2-yil">1-2 Yıl</option>
                    <option value="3-5-yil">3-5 Yıl</option>
                    <option value="5-10-yil">5-10 Yıl</option>
                    <option value="10-yil+">10+ Yıl</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yatırım Hedefleri *
                  </label>
                  <textarea
                    name="investmentGoals"
                    value={formData.investmentGoals}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Yatırım hedeflerinizi açıklayınız (max 500 karakter)"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ESG Odak Alanları
                  </label>
                  <textarea
                    name="esgFocus"
                    value={formData.esgFocus}
                    onChange={handleInputChange}
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Hangi ESG alanlarına odaklanmak istiyorsunuz? (max 500 karakter)"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Önceki Deneyimler
                  </label>
                  <textarea
                    name="previousExperience"
                    value={formData.previousExperience}
                    onChange={handleInputChange}
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Sosyal etki yatırımları konusundaki deneyimleriniz (max 500 karakter)"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ek Bilgiler
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Eklemek istediğiniz diğer bilgiler (max 500 karakter)"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-orange-700 disabled:bg-gray-400 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Başvuru Gönder'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Başvurunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Başvuru gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorsPage;
