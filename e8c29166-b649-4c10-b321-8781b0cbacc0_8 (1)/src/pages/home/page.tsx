
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroSlides = [
    {
      title: "Kooperatifler için finansal dayanışma ağı",
      subtitle: "KoopKredi, üreticilerin ve girişimcilerin finansmana erişimini kolaylaştıran dijital bir platformdur.",
      accent: "dayanışma ağı",
      gradient: "from-blue-500 via-blue-600 to-blue-700"
    },
    {
      title: "Dayanışma ile büyüyen ekonomi",
      subtitle: "Türkiye'nin dört bir yanındaki kooperatiflerle birlikte adil, kapsayıcı ve sürdürülebilir bir ekonomi için çalışıyoruz.",
      accent: "büyüyen ekonomi",
      gradient: "from-blue-600 via-blue-700 to-blue-800"
    }
  ];

  const features = [
    {
      icon: "ri-money-dollar-circle-line",
      title: "Uygun Faizli Krediler",
      description: "Kooperatiflerin koşullarına uygun, düşük faizli finansman çözümleri"
    },
    {
      icon: "ri-shield-check-line",
      title: "Güvenli Yatırım",
      description: "Sosyal etki odaklı, kooperatif güvencesiyle yatırım modeli"
    },
    {
      icon: "ri-smartphone-line",
      title: "Dijital Başvuru",
      description: "Tüm süreç online, şeffaf ve hızlı başvuru sistemi"
    }
  ];

  const stats = [
    { number: "500+", label: "Desteklenen Kooperatif" },
    { number: "₺50M+", label: "Sağlanan Finansman" },
    { number: "15+", label: "İl Genelinde Hizmet" },
    { number: "95%", label: "Başarı Oranı" }
  ];

  const partners = [
    { name: "IDEMA", logo: "https://readdy.ai/api/search-image?query=IDEMA%20logo%20professional%20clean%20design&width=120&height=60&seq=partner1&orientation=landscape" },
    { name: "İhtiyaç Haritası", logo: "https://readdy.ai/api/search-image?query=Ihtiyac%20Haritasi%20logo%20modern%20design&width=120&height=60&seq=partner2&orientation=landscape" },
    { name: "INOGAR", logo: "https://readdy.ai/api/search-image?query=INOGAR%20logo%20corporate%20design&width=120&height=60&seq=partner3&orientation=landscape" },
    { name: "EU Delegation", logo: "https://readdy.ai/api/search-image?query=European%20Union%20delegation%20logo%20official&width=120&height=60&seq=partner4&orientation=landscape" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section - Creative Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].gradient} transition-all duration-1000`}>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          {/* Geometric Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-white/30 rotate-45 animate-pulse"></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 bg-white/10 rounded-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border-2 border-white/25 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Main Title with Creative Typography */}
              <div className="space-y-6">
                <div className="inline-block">
                  <div className="text-sm font-semibold tracking-wider uppercase mb-4 text-white/80">
                    Türkiye'nin İlk Kooperatif Finansman Platformu
                  </div>
                  <h1 className="text-5xl lg:text-8xl font-bold leading-tight">
                    <span className="block">{heroSlides[currentSlide].title.split(' ').slice(0, -2).join(' ')}</span>
                    <span className="block bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent">
                      {heroSlides[currentSlide].accent}
                    </span>
                  </h1>
                </div>
                
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto font-light">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </div>
              
              {/* CTA Buttons with Creative Design */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  to="/kooperatifler" 
                  className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl whitespace-nowrap overflow-hidden"
                >
                  <span className="relative z-10">Hemen Başvur</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </Link>
                <Link 
                  to="/yatirimcilar" 
                  className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm whitespace-nowrap"
                >
                  Ortak Ol
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </Link>
              </div>
              
              {/* Stats Cards with Glass Effect */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
                {stats.map((stat, index) => (
                  <div key={index} className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-white/70 max-w-2xl mx-auto mt-8 italic">
                "Türkiye'nin dört bir yanındaki kooperatiflerle birlikte adil, kapsayıcı ve sürdürülebilir bir ekonomi için çalışıyoruz."
              </p>
            </div>
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-12' : 'bg-white/50 w-3'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 text-white/60 animate-bounce">
          <i className="ri-arrow-down-line text-2xl"></i>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">KoopKredi Nasıl Çalışır?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Birlikte büyüyen ekonomi modeli ile yerel kalkınmayı destekleyen kooperatiflerin finansman ihtiyacına çözüm sunuyoruz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/nasil-calisir" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group"
            >
              Süreç hakkında daha fazla bilgi al
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">4 Adımda Kolay Süreç</h2>
            <p className="text-xl text-gray-600">Başvurudan krediye kadar tüm süreç şeffaf ve hızlı</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Başvuru", desc: "Online form ile hızlı başvuru yapın", icon: "ri-file-text-line" },
              { step: "02", title: "Değerlendirme", desc: "Sosyal etki kriterleri ile değerlendirme", icon: "ri-search-line" },
              { step: "03", title: "Onay", desc: "Kredi onayı ve sözleşme imzalama", icon: "ri-checkbox-circle-line" },
              { step: "04", title: "İzleme", desc: "Etki raporları ve sürekli destek", icon: "ri-line-chart-line" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${item.icon} text-2xl text-white`}></i>
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{item.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Birlikte Daha Güçlüyüz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              KoopKredi, dayanışma temelli bir ekonomik modelin hayata geçmesi için güçlü paydaşlarla iş birliği içinde çalışır.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Kooperatifinizi Güçlendirmek İçin Bir Adım Atın</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Dayanışma ekonomisinin bir parçası olun ve sürdürülebilir büyüme için finansman desteği alın.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/kooperatifler" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Başvuru Yap
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Güncel Haberler ve Duyurular</h2>
            <p className="text-xl text-gray-600">KoopKredi ekosisteminden son gelişmeler</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Yeni Kooperatif Ortaklıkları",
                excerpt: "Bu ay 25 yeni kooperatif KoopKredi ailesine katıldı...",
                date: "15 Ocak 2025",
                image: "https://readdy.ai/api/search-image?query=cooperative%20members%20celebrating%20partnership%20agreement%20in%20modern%20office%2C%20professional%20photography%2C%20bright%20lighting&width=400&height=250&seq=news1&orientation=landscape"
              },
              {
                title: "Sosyal Etki Raporu Yayınlandı",
                excerpt: "2024 yılı sosyal etki raporumuz yayınlandı. Detaylar için...",
                date: "10 Ocak 2025",
                image: "https://readdy.ai/api/search-image?query=business%20report%20charts%20and%20graphs%20on%20desk%2C%20professional%20office%20setting%2C%20clean%20background&width=400&height=250&seq=news2&orientation=landscape"
              },
              {
                title: "Dijital Dönüşüm Eğitimleri",
                excerpt: "Kooperatifler için ücretsiz dijital dönüşüm eğitimleri başlıyor...",
                date: "5 Ocak 2025",
                image: "https://readdy.ai/api/search-image?query=people%20attending%20digital%20training%20workshop%2C%20modern%20classroom%20setting%2C%20technology%20education&width=400&height=250&seq=news3&orientation=landscape"
              }
            ].map((news, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{news.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group">
                    Devamını Oku
                    <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
