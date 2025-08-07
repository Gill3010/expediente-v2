import { useState } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTimes, FaBars } from 'react-icons/fa';
import logo from '../assets/logoinnova.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100 py-3 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo y nombre */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="h-14 w-auto" /> {/* Cambiado de h-10 a h-14 */}
              <span className="text-2xl font-semibold text-gray-800">Innova Proyectos</span>
            </a>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <a 
                href="#inicio" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                Inicio
              </a>
              <a 
                href="#nosotros" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                Sobre mí
              </a>
              <a 
                href="#servicios" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                Servicios
              </a>
              <a 
                href="#contacto" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                Contacto
              </a>
            </div>
            
            {/* Separador visual */}
            <div className="h-6 w-px bg-gray-200 mx-2"></div>
            
            {/* Iconos redes sociales */}
            <div className="flex space-x-4 ml-4">
              <a
                href="https://www.linkedin.com/in/israel-samuels-g-201419197/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/Gill3010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://wa.me/50765498362"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-500 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none transition duration-300"
              aria-expanded="false"
            >
              {isOpen ? (
                <FaTimes size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#inicio"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Sobre mí
            </a>
            <a
              href="#servicios"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Contacto
            </a>
            
            {/* Iconos redes sociales - Móvil */}
            <div className="flex justify-center space-x-6 pt-4 pb-3">
              <a
                href="https://www.linkedin.com/in/israel-samuels-g-201419197/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/Gill3010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://wa.me/50765498362"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-500 transition-colors duration-300"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;