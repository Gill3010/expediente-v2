import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Redes sociales */}
          <div className="flex space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/in/israel-samuels-g-201419197/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/Gill3010"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://wa.me/50765498362"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              href="mailto:desarrolloyoperaciones@relaticpanama.org"
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </div>

          {/* Descripción */}
          <p className="text-center text-gray-400 mb-6 max-w-2xl mx-auto">
            Desarrollador especializado en soluciones digitales para instituciones educativas y centros de investigación
          </p>

          {/* Separador */}
          <div className="w-24 h-px bg-gray-600 mb-6"></div>

          {/* Derechos y enlaces */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Israel Samuels. Todos los derechos reservados.
            </p>
            <a 
              href="https://wa.me/50765498362" 
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Contacto profesional
            </a>
            <a 
              href="/politica-privacidad" 
              className="text-sm text-gray-500 hover:text-gray-400 transition-colors duration-300"
            >
              Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;