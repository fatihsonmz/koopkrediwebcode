
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const AboutPage = () => {
  const values = [
    {
      icon: 'ri-eye-line',
      title: 'Şeffaflık',
      description: 'Tüm süreçlerimizde açık ve şeffaf bir yaklaşım benimser, hesap verebilirliği ön planda tutarız.'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Dayanışma',
      description: 'Kooperatiflerin birbirleriyle ve toplumla dayanışma içinde büyümesini destekleriz.'
    },
    {
      icon: 'ri-group-line',
      title: 'Kapsayıcılık',
      description: 'Herkesi kucaklayan, ayrımcılık yapmayan bir ekonomik model için çalışırız.'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Sürdürülebilirlik',
      description: 'Çevresel ve sosyal sürdürülebilirliği gözeten projeler ve kooperatifleri destekleriz.'
    }
  ];

  const founders = [
    {
      name: 'IDEMA',
      role: 'İktisadi Kalkınma ve Araştırma Merkezi',
      description: 'Ekonomik kalkınma ve araştırma alanında öncü kuruluş'
    },
    {
      name: 'İhtiyaç Haritası',
      role: 'Sosyal Yardım Platformu',
      description: 'Toplumsal ihtiyaçları karşılama konusunda uzman platform'
    },
    {
      name: 'INOGAR',
      role: 'İnovasyon ve Girişimcilik',
      description: 'Girişimcilik ve inovasyon ekosisteminin güçlendirilmesi'
    }
  ];

  const team = [
    {
      name: 'Dr. Ayşe Kaya',
      role: 'Genel Koordinatör',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Turkish%20businesswoman%20in%20her%2040s%2C%20confident%20smile%2C%20business%20attire%2C%20office%20background%2C%20professional%20headshot%20photography%2C%20high%20quality%2C%20realistic%2C%20warm%20lighting&width=300&height=300&seq=team1&orientation=squarish'
    },
    {
      name: 'Mehmet Özkan',
      role: 'Finansal Direktör',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Turkish%20businessman%20in%20his%2040s%2C%20confident%20expression%2C%20business%20suit%2C%20office%20background%2C%20professional%20headshot%20photography%2C%20high%20quality%2C%20realistic%2C%20warm%20lighting&width=300&height=300&seq=team2&orientation=squarish'
    },
    {
      name: 'Zeynep Demir',
      role: 'Kooperatif İlişkileri Uzmanı',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Turkish%20businesswoman%20in%20her%2030s%2C%20friendly%20smile%2C%20business%20attire%2C%20office%20background%2C%20professional%20headshot%20photography%2C%20high%20quality%2C%20realistic%2C%20warm%20lighting&width=300&height=300&seq=team3&orientation=squarish'
    },
    {
      name: 'Ali Yılmaz',
      role: 'Teknoloji Direktörü',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Turkish%20tech%20executive%20in%20his%2030s%2C%20confident%20smile%2C%20casual%20business%20attire%2C%20modern%20office%20background%2C%20professional%20headshot%20photography%2C%20high%20quality%2C%20realistic&width=300&height=300&seq=team4&orientation=squarish'
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
              Biz Kimiz?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              KoopKredi, Türkiye'deki kooperatiflerin finansal gücünü artırmak ve dayanışma ekonomisini yaygınlaştırmak amacıyla kurulmuş bir dijital platformdur.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kuruluş Hikayemiz</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  KoopKredi, Türkiye'deki kooperatiflerin karşılaştığı finansman zorluklarını gözlemleyerek doğdu. 
                  Geleneksel bankacılık sisteminin kooperatiflerin ihtiyaçlarına tam olarak cevap veremediğini fark ettik.
                </p>
                <p>
                  2023 yılında, sosyal etki odaklı finansman modelleri konusunda uzman kuruluşlar bir araya gelerek 
                  KoopKredi'yi hayata geçirdi. Amacımız, kooperatiflerin sürdürülebilir büyümesini desteklemek ve 
                  dayanışma ekonomisini güçlendirmektir.
                </p>
                <p>
                  Bugün, yüzlerce kooperatifle çalışarak onların finansal dayanıklılığını artırıyor, 
                  binlerce üreticinin hayatına dokunuyoruz.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Turkish%20cooperative%20members%20working%20together%20in%20meeting%20room%2C%20diverse%20group%20of%20people%20discussing%20business%20plans%2C%20collaborative%20atmosphere%2C%20modern%20office%20setting%2C%20professional%20photography%2C%20warm%20lighting%2C%20realistic&width=600&height=400&seq=story&orientation=landscape"
                alt="KoopKredi Hikayesi"
                className="rounded-xl shadow-lg object-cover object-top w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-target-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
              <p className="text-gray-600 leading-relaxed">
                Türkiye'deki kooperatiflerin finansal kaynaklara erişimini kolaylaştırarak, 
                dayanışma ekonomisini güçlendirmek ve sürdürülebilir kalkınmaya katkı sağlamak.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
              <p className="text-gray-600 leading-relaxed">
                Kooperatiflerin finansal özgürlüğe kavuştuğu, dayanışma ekonomisinin yaygınlaştığı 
                ve herkesin eşit fırsatlara sahip olduğu bir Türkiye yaratmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600">
              KoopKredi'yi yönlendiren temel ilkeler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-3xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kurucu Kurumlar
            </h2>
            <p className="text-xl text-gray-600">
              KoopKredi'yi hayata geçiren güçlü ortaklık
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{founder.name}</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{founder.role}</h4>
                <p className="text-gray-600 leading-relaxed">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Yönetim Ekibi
            </h2>
            <p className="text-xl text-gray-600">
              KoopKredi'yi yöneten deneyimli ekip
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
