import { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <header className="bg-white py-16 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                <span className="text-blue-600">Hola, soy Israel Samuels</span>
              </h1>
              
              <div className="w-24 h-1 bg-blue-600 mb-6 mx-auto md:mx-0"></div>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Desarrollador de software enfocado en el diseño de soluciones digitales para la industria tecnológica, el ámbito académico y la investigación científica. Integro inteligencia artificial y tecnologías emergentes para desarrollar plataformas educativas e investigativas robustas, escalables y alineadas con los desafíos del conocimiento contemporáneo.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/israel-samuels-g-201419197/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-500 hover:text-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/Gill3010"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-500 hover:text-gray-800 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://wa.me/50765498362"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-500 hover:text-green-500 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div 
            className="md:w-1/2 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-2 z-0"></div>
              <img
                src="/Israel.jpeg"
                alt="Israel Samuels - Desarrollador de Software"
                className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl object-cover border-4 border-white shadow-md z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;