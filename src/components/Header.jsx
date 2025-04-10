import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const linkedinColor = '#0077B5';
  const githubColor = '#181717';
  const whatsappColor = '#25D366';

  return (
    <header className="bg-gradient-to-r from-[#1B5E20] to-[#00E5FF] text-white py-20 relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between md:items-center">

       
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl font-bold flex items-center justify-center md:justify-start">
            ¡Hola! <span role="img" aria-label="hand-wave" className="ml-2">👋🏻</span>
          </h1>
          <p className="text-lg mt-4 max-w-md mx-auto md:mx-0">
          Soy Israel Samuels, un desarrollador de software con experiencia en la creación de aplicaciones interactivas y escalables. Me especializo en utilizar tecnologías modernas y herramientas de inteligencia artificial para diseñar soluciones innovadoras que se adaptan a las necesidades específicas de cada proyecto.
          </p>

          
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
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

        
        <div className="flex space-x-4 mt-8 md:mt-0 justify-center">
  <img 
    src="/Israel.jpeg" 
    alt="Israel Samuels" 
    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full object-cover transform -translate-y-8 border-4 border-white" 
    style={{ borderColor: 'white' }} 
  />
</div>
      </div>
    </header>
  );
};

export default Header;