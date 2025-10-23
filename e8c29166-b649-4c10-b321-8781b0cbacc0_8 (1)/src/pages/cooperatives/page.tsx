
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const CooperativesPage = () => {
  const [formData, setFormData] = useState({
    cooperativeName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    establishmentYear: '',
    memberCount: '',
    activityArea: '',
    loanAmount: '',
    loanPurpose: '',
    projectDescription: '',
    hasBusinessPlan: '',
    hasFinancialStatements: '',
    socialImpact: ''
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

      const response = await fetch('https://readdy.ai/api/form/d3me02les84r01urdhd0', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          cooperativeName: '',
          contactPerson: '',
          email: '',
          phone: '',
          address: '',
          establishmentYear: '',
          memberCount: '',
          activityArea: '',
          loanAmount: '',
          loanPurpose: '',
          projectDescription: '',
          hasBusinessPlan: '',
          hasFinancialStatements: '',
          socialImpact: ''
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

  const successStories = [
    {
      name: 'Kadın Üreticiler Kooperatifi',
      location: 'Antalya',
      story: '50 kadın üreticinin bir araya geldiği kooperatifimiz, KoopKredi desteğiyle modern sera tesisi kurdu. Yıllık gelir %200 arttı.',
      impact: '50 kadın, 200 aile',
      amount: '₺150.000'
    },
    {
      name: 'Organik Tarım Kooperatifi',
      location: 'İzmir',
      story: 'Organik ürün işleme tesisi kurmak için aldığımız kredi sayesinde ürünlerimizi katma değerli hale getirdik.',
      impact: '75 üretici, 300 aile',
      amount: '₺250.000'
    },
    {
      name: 'Arıcılar Kooperatifi',
      location: 'Muğla',
      story: 'Modern bal işleme ve paketleme tesisi kurarak üretimimizi 3 katına çıkardık. İhracat yapmaya başladık.',
      impact: '30 arıcı, 120 aile',
      amount: '₺100.000'
    }
  ];

  const faqs = [
    {
      question: 'Hangi kooperatifler başvuru yapabilir?',
      answer: 'En az 2 yıldır aktif olan, yasal statüye sahip ve sosyal etki yaratma potansiyeli bulunan tüm kooperatifler başvuru yapabilir.'
    },
    {
      question: 'Kredi faiz oranları nasıl belirlenir?',
      answer: 'Faiz oranları kooperatifinizin risk profili, proje türü ve sosyal etki potansiyeline göre belirlenir. Genel olarak piyasa ortalamasının altında tutulmaya çalışılır.'
    },
    {
      question: 'Başvuru süreci ne kadar sürer?',
      answer: 'Başvurunuzun tamamlanmasından itibaren değerlendirme süreci ortalama 2-4 hafta sürmektedir.'
    },
    {
      question: 'Hangi belgeler gereklidir?',
      answer: 'Kooperatif kuruluş belgesi, faaliyet raporu, mali tablolar, proje detayları ve sosyal etki planı gibi belgeler gereklidir.'
    },
    {
      question: 'Geri ödeme koşulları nasıldır?',
      answer: 'Geri ödeme planı kooperatifinizin nakit akışına uygun şekilde esnek olarak düzenlenir. Vade seçenekleri 1-5 yıl arasında değişmektedir.'
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kooperatifler İçin Finansman
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kooperatifinizin büyümesi ve gelişimi için ihtiyaç duyduğu finansal desteği sağlıyoruz. 
              Uygun koşullar, hızlı süreç ve uzman danışmanlık.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Başvuru Formu
            </h2>
            <p className="text-xl text-gray-600">
              Kooperatifiniz için finansman başvurusu yapmak üzere formu doldurun
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8">
            <form onSubmit={handleSubmit} data-readdy-form id="kooperatif-basvuru">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kooperatif Adı *
                  </label>
                  <input
                    type="text"
                    name="cooperativeName"
                    value={formData.cooperativeName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Kooperatif adını giriniz"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-707 mb-2">
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
                  <label className="block text-sm font-medium text-gray-707 mb-2">
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
                  <label className="block text-sm font-medium text-gray-707 mb-2">
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

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-707 mb-2">
                    Adres *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Kooperatif adresi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-707 mb-2">
                    Kuruluş Yılı *
                  </label>
                  <input
                    type="number"
                    name="establishmentYear"
                    value={formData.establishmentYear}
                    onChange={handleInputChange}
                    required
                    min="1900"
                    max="2025"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="2020"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-707 mb-2">
                    Ortak Sayısı *
                  </label>
                  <input
                    type="number"
                    name="memberCount"
                    value={formData.memberCount}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="25"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-707 mb-2">
                    Faaliyet Alanı *
                  </label>
                  <select
                    name="activityArea"
                    value={formData.activityArea}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm pr-8"
                  >
                    <option value="">Seçiniz</option>
                    <option value="tarim">Tarım</option>
                    <option value="hayvancilk">Hayvancılık</option>
                    <option value="el-sanatlari">El Sanatları</option>
                    <option value="turizm">Turizm</option>
                    <option value="gida">Gıda İşleme</option>
                    <option value="tekstil">Tekstil</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-707 mb-2">
                    Talep Edilen Kredi Tutarı (₺) *
                  </label>
                  <input
                    type="number"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    required
                    min="10000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="100000"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-707 mb-2">
                    Kredi Kullanım Amacı *
                  </label>
                  <textarea
                    name="loanPurpose"
                    value={formData.loanPurpose}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Kredinin hangi amaçla kullanılacağını açıklayınız (max 500 karakter)"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-707 mb-2">
                    Proje Detayları *
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Projenizi detaylı olarak açıklayınız (max 500 karakter)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-707 mb-2">
                    İş Planınız Var mı? *
                  </label>
                  <select
                    name="hasBusinessPlan"
                    value={formData.hasBusinessPlan}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm pr-8"
                  >
                    <option value="">Seçiniz</option>
                    <option value="evet">Evet</option>
                    <option value="hayir">Hayır</option>
                    <option value="hazirlaniyor">Hazırlanıyor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-707 mb-2">
                    Mali Tablolarınız Düzenli mi? *
                  </label>
                  <select
                    name="hasFinancialStatements"
                    value={formData.hasFinancialStatements}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm pr-8"
                  >
                    <option value="">Seçiniz</option>
                    <option value="evet">Evet</option>
                    <option value="hayir">Hayır</option>
                    <option value="kismi">Kısmen</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-707 mb-2">
                    Sosyal Etki Hedefleri *
                  </label>
                  <textarea
                    name="socialImpact"
                    value={formData.socialImpact}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Projenizin toplumsal etkilerini açıklayınız (max 500 karakter)"
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

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Başarı Hikayeleri
            </h2>
            <p className="text-xl text-gray-600">
              KoopKredi desteğiyle büyüyen kooperatiflerimizin hikayeleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                  <span className="text-orange-600 font-bold">{story.amount}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  <i className="ri-map-pin-line mr-1"></i>
                  {story.location}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">{story.story}</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-blue-600 font-medium">
                    <i className="ri-group-line mr-1"></i>
                    Etki: {story.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600">
              Kooperatiflerden gelen en yaygın sorular ve cevapları
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <i className={`ri-${openFaq === index ? 'subtract' : 'add'}-line text-blue-600`}></i>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CooperativesPage;
