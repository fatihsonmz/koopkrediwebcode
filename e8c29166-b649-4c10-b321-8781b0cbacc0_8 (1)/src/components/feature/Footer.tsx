
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Nasıl Çalışır', href: '/nasil-calisir' },
    { name: 'Kooperatifler', href: '/kooperatifler' }
  ];

  const services = [
    { name: 'Kredi Başvurusu', href: '/kooperatifler' },
    { name: 'Yatırımcı Ol', href: '/yatirimcilar' },
    { name: 'Danışmanlık', href: '/iletisim' },
    { name: 'Eğitim', href: '/iletisim' }
  ];

  const support = [
    { name: 'İletişim', href: '/iletisim' },
    { name: 'SSS', href: '/iletisim' },
    { name: 'Destek', href: '/iletisim' },
    { name: 'Gizlilik', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="https://static.readdy.ai/image/65e9f4d1c5a32759e2332b337cc266f1/04e72538b28497576d69b1adddf616c7.png" 
                alt="KoopKredi Logo" 
                className="h-8 w-auto mr-3"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Türkiye'nin ilk kooperatif finansman platformu. Dayanışma ekonomisini güçlendiriyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <i className="ri-twitter-x-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <i className="ri-youtube-line text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destek</h3>
            <ul className="space-y-2 mb-6">
              {support.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="space-y-2">
              <p className="text-gray-300 flex items-center">
                <i className="ri-mail-line mr-2 text-blue-400"></i>
                info@koopkredi.org
              </p>
              <p className="text-gray-300 flex items-center">
                <i className="ri-phone-line mr-2 text-blue-400"></i>
                +90 216 123 45 67
              </p>
              <p className="text-gray-300 flex items-start">
                <i className="ri-map-pin-line mr-2 text-blue-400 mt-1"></i>
                Ataşehir, İstanbul
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 KoopKredi. Tüm hakları saklıdır.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="https://readdy.ai/?origin=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
