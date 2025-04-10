import { useState } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.jpg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  const linkedinColor = '#0077B5';
  const githubColor = '#181717';
  const whatsappColor = '#25D366';

  return (
    <nav className="bg-gradient-to-r from-[#1B5E20] to-[#00E5FF] text-white py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-12 h-12" /> 
          <span className="text-2xl font-bold">Innova Proyectos</span>
        </div>

        
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#inicio" className="hover:text-[#00E5FF] transition-colors duration-300">Inicio</a>
          <a href="#nosotros" className="hover:text-[#00E5FF] transition-colors duration-300">Sobre mí</a>
          <a href="#servicios" className="hover:text-[#00E5FF] transition-colors duration-300">Servicios</a>
          <a href="#contacto" className="hover:text-[#00E5FF] transition-colors duration-300">Contacto</a>
        </div>

        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 focus:outline-none text-2xl">&#9776;</button>
        </div>

       
        <div className="hidden md:flex space-x-4">
          <a href="https://www.linkedin.com/in/israel-samuels-g-201419197/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-teal-600 transition duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <FaLinkedin size={24} color={linkedinColor} />
          </a>
          <a href="https://github.com/Gill3010" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-teal-600 transition duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <FaGithub size={24} color={githubColor} />
          </a>
          <a href="https://wa.me/50765498362" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-teal-600 transition duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <FaWhatsapp size={24} color={whatsappColor} />
          </a>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#1B5E20] to-[#00E5FF] text-white mt-4">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#inicio" className="hover:text-[#00E5FF] transition-colors duration-300" onClick={toggleMenu}>Inicio</a>
            <a href="#nosotros" className="hover:text-[#00E5FF] transition-colors duration-300" onClick={toggleMenu}>Sobre mí</a>
            <a href="#servicios" className="hover:text-[#00E5FF] transition-colors duration-300" onClick={toggleMenu}>Servicios</a>
            <a href="#contacto" className="hover:text-[#00E5FF] transition-colors duration-300" onClick={toggleMenu}>Contacto</a>

           
            <div className="flex space-x-4 pt-4">
              <a href="https://www.linkedin.com/in/israel-samuels-g-201419197/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-teal-600 transition duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <FaLinkedin size={24} color={linkedinColor} />
              </a>
              <a href="https://github.com/Gill3010" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-teal-600 transition duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <FaGithub size={24} color={githubColor} />
              </a>
              <a href="https://wa.me/50765498362" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-teal-600 transition duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
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
