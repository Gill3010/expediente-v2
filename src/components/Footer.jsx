import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="py-8"
      style={{
        background: 'linear-gradient(to right, #1B5E20, #00E5FF)',
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto text-center flex justify-between items-center">
        
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/israel-samuels-g-201419197/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-teal-600 transition duration-300"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaLinkedin size={20} color="#0A66C2" /> 
          </a>
          <a
            href="https://github.com/Gill3010"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-teal-600 transition duration-300"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaGithub size={20} color="#171515" /> 
          </a>
          <a
            href="https://wa.me/50765498362"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-teal-600 transition duration-300"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaWhatsapp size={20} color="#25D366" /> 
          </a>
        </div>

        
        <p className="text-sm" style={{ color: '#E0F7FA' }}>
          ©2025 Innova Proyectos. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
