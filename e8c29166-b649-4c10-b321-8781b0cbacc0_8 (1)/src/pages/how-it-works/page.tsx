
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const HowItWorksPage = () => {
  const steps = [
    {
      number: '01',
      title: 'Başvuru',
      description: 'Kooperatifinizin bilgilerini ve finansman ihtiyacınızı online formumuz aracılığıyla paylaşın.',
      icon: 'ri-file-text-line',
      details: [
        'Online başvuru formu doldurma',
        'Gerekli belgelerin yüklenmesi',
        'Kooperatif bilgilerinin doğrulanması',
        'İlk değerlendirme süreci'
      ]
    },
    {
      number: '02',
      title: 'Değerlendirme',
      description: 'Uzman ekibimiz başvurunuzu sosyal etki kriterleri ve finansal uygunluk açısından değerlendirir.',
      icon: 'ri-search-line',
      details: [
        'Sosyal etki analizi',
        'Finansal durum değerlendirmesi',
        'Risk analizi',
        'Kooperatif ziyareti ve görüşme'
      ]
    },
    {
      number: '03',
      title: 'Kredi Onayı',
      description: 'Uygun bulunan başvurular için kredi koşulları belirlenir ve sözleşme imzalanır.',
      icon: 'ri-check-line',
      details: [
        'Kredi tutarı ve vade belirleme',
        'Faiz oranının hesaplanması',
        'Sözleşme hazırlama',
        'Kredi kullandırımı'
      ]
    },
    {
      number: '04',
      title: 'Etki İzleme',
      description: 'Kredi kullanımı sonrası kooperatifinizin gelişimi ve sosyal etkisi düzenli olarak takip edilir.',
      icon: 'ri-line-chart-line',
      details: [
        'Düzenli performans raporları',
        'Sosyal etki ölçümü',
        'Danışmanlık desteği',
        'Sürekli gelişim takibi'
      ]
    }
  ];

  const requirements = [
    'En az 2 yıldır aktif olarak faaliyet göstermek',
    'Yasal olarak kayıtlı kooperatif statüsüne sahip olmak',
    'Sosyal etki yaratma potansiyeline sahip olmak',
    'Mali durumun şeffaf ve düzenli olması',
    'Sürdürülebilir iş modeline sahip olmak',
    'Toplumsal fayda odaklı projeler geliştirmek'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nasıl Çalışır?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              KoopKredi ile finansman süreciniz 4 basit adımda tamamlanır. 
              Şeffaf, hızlı ve kooperatif dostu yaklaşımımızla yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-700">
                        <i className="ri-check-line text-blue-600 mr-3"></i>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-100 to-orange-100 p-12 rounded-2xl">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                      <i className={`${step.icon} text-4xl text-white`}></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infographic */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Süreç Akış Diyagramı
            </h2>
            <p className="text-xl text-gray-600">
              KoopKredi finansman sürecinin görsel özeti
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20business%20process%20flow%20diagram%20showing%204%20connected%20steps%2C%20clean%20modern%20design%2C%20arrows%20connecting%20stages%2C%20cooperative%20finance%20process%20visualization%2C%20infographic%20style%2C%20blue%20and%20orange%20colors%2C%20simple%20background&width=1200&height=600&seq=process-flow&orientation=landscape"
              alt="KoopKredi Süreç Akışı"
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div className="text-center mt-8">
            <a 
              href="#" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-orange-600 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-download-line mr-2"></i>
              Kooperatifler İçin Başvuru Kılavuzu (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Başvuru Kriterleri
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                KoopKredi'den finansman alabilmek için kooperatifinizin aşağıdaki kriterleri karşılaması gerekmektedir.
              </p>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <i className="ri-check-line text-blue-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Turkish%20cooperative%20members%20reviewing%20documents%20and%20criteria%20checklist%2C%20professional%20meeting%20setting%2C%20people%20discussing%20requirements%2C%20modern%20office%20environment%2C%20collaborative%20atmosphere%2C%20realistic%20photography&width=600&height=500&seq=requirements&orientation=portrait"
                alt="Başvuru Kriterleri"
                className="rounded-xl shadow-lg object-cover object-top w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Başvuru yapmaya hazır mısınız?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Kooperatifinizin finansal gücünü artırmak için bugün başvuru yapın. 
            Uzman ekibimiz size rehberlik etmek için hazır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kooperatifler"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Hemen Başvur
            </a>
            <a
              href="/iletisim"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              Daha Fazla Bilgi
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
