import { useState } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logotipo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkedinColor = '#0077B5';
  const githubColor = '#181717';
  const whatsappColor = '#25D366';

  return (
    <nav className="bg-[#111111] text-[#2CFF05] hover:text-[#ffff] py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <a href="https://www.innovaproyectos.org" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <span className="text-2xl font-bold">Innova Proyectos</span>
        </a>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#inicio" className="hover:text-[#FFFF] transition-colors duration-300">Inicio</a>
          <a href="#nosotros" className="hover:text-[#FFFF] transition-colors duration-300">Sobre mí</a>
          <a href="#servicios" className="hover:text-[#FFFF] transition-colors duration-300">Servicios</a>
          <a href="#contacto" className="hover:text-[#FFFF] transition-colors duration-300">Contacto</a>
        </div>

        {/* Botón menú móvil */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 focus:outline-none text-2xl">&#9776;</button>
        </div>

        {/* Iconos redes sociales - Desktop */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://www.linkedin.com/in/israel-samuels-g-201419197/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white hover:bg-gray-100 transition duration-300 shadow hover:shadow-[0_0_15px_#2CFF05]"
          >
            <FaLinkedin size={24} color={linkedinColor} />
          </a>
          <a
            href="https://github.com/Gill3010"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white hover:bg-gray-100 transition duration-300 shadow hover:shadow-[0_0_15px_#2CFF05]"
          >
            <FaGithub size={24} color={githubColor} />
          </a>
          <a
            href="https://wa.me/50765498362"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white hover:bg-gray-100 transition duration-300 shadow hover:shadow-[0_0_15px_#2CFF05]"
          >
            <FaWhatsapp size={24} color={whatsappColor} />
          </a>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] text-[#2CFF05] mt-4">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#inicio" className="hover:text-[#FFFF] transition-colors duration-300" onClick={toggleMenu}>Inicio</a>
            <a href="#nosotros" className="hover:text-[#FFF] transition-colors duration-300" onClick={toggleMenu}>Sobre mí</a>
            <a href="#servicios" className="hover:text-[#FFFF] transition-colors duration-300" onClick={toggleMenu}>Servicios</a>
            <a href="#contacto" className="hover:text-[#FFFF] transition-colors duration-300" onClick={toggleMenu}>Contacto</a>

            {/* Iconos redes sociales - Móvil */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/israel-samuels-g-201419197/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white hover:bg-gray-100 transition duration-300 shadow hover:shadow-[0_0_15px_#2CFF05]"
              >
                <FaLinkedin size={24} color={linkedinColor} />
              </a>
              <a
                href="https://github.com/Gill3010"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white hover:bg-gray-100 transition duration-300 shadow hover:shadow-[0_0_15px_#2CFF05]"
              >
                <FaGithub size={24} color={githubColor} />
              </a>
              <a
                href="https://wa.me/50765498362"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white hover:bg-gray-100 transition duration-300 shadow hover:shadow-[0_0_15px_#2CFF05]"
              >
                <FaWhatsapp size={24} color={whatsappColor} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;