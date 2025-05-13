import { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const linkedinColor = '#0077B5';
  const githubColor = '#181717';
  const whatsappColor = '#25D366';

  return (
    <header className="bg-[#222222] text-[#ffff] py-20 relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between md:items-center">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl font-bold flex items-center justify-center md:justify-start">
            <span style={{ color: '#2CFF05' }}>¡Hola!</span>
            <span
              role="img"
              aria-label="hand-wave"
              className="ml-2 animate-wave"
            >
              👋🏻
            </span>
          </h1>
          <p className="text-lg mt-4 max-w-md mx-auto md:mx-0">
            Soy Israel Samuels, un desarrollador de software con experiencia en la creación de aplicaciones interactivas y escalables. Me especializo en utilizar tecnologías modernas y herramientas de inteligencia artificial para diseñar soluciones innovadoras que se adaptan a las necesidades específicas de cada proyecto.
          </p>

          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a
              href="https://www.linkedin.com/in/israel-samuels-g-201419197/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white hover:bg-gray-100 transition duration-300 shadow"
            >
              <FaLinkedin size={24} color={linkedinColor} />
            </a>
            <a
              href="https://github.com/Gill3010"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white hover:bg-gray-100 transition duration-300 shadow"
            >
              <FaGithub size={24} color={githubColor} />
            </a>
            <a
              href="https://wa.me/50765498362"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white hover:bg-gray-100 transition duration-300 shadow"
            >
              <FaWhatsapp size={24} color={whatsappColor} />
            </a>
          </div>
        </div>

        <div className="flex space-x-4 mt-8 md:mt-0 justify-center">
          <img
            src="/Israel.jpeg"
            alt="Israel Samuels"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full object-cover transform -translate-y-8 border-4 border-[#2CFF05]"
            style={{ borderColor: '#2CFF05' }}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="false"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;