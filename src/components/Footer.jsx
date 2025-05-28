import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="py-8"
      style={{
        backgroundColor: '#111111',
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Enlaces de redes sociales */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/israel-samuels-g-201419197/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white hover:bg-gray-100 transition duration-300 shadow hover:shadow-[0_0_15px_#2CFF05]"
          >
            <FaLinkedin size={20} color="#0A66C2" />
          </a>
          <a
            href="https://github.com/Gill3010"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white hover:bg-gray-100 transition duration-300 shadow hover:shadow-[0_0_15px_#2CFF05]"
          >
            <FaGithub size={20} color="#171515" />
          </a>
          <a
            href="https://wa.me/50765498362"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white hover:bg-gray-100 transition duration-300 shadow hover:shadow-[0_0_15px_#2CFF05]"
          >
            <FaWhatsapp size={20} color="#25D366" />
          </a>
        </div>

        {/* Descripción o slogan */}
        <p className="text-sm mb-4" style={{ color: '#fff' }}>
          Soy un desarrollador apasionado por crear soluciones innovadoras.
        </p>

        {/* Separador */}
        <hr className="border-t border-[#2CFF05] mb-4" />

        {/* Derechos reservados */}
        <p className="text-sm" style={{ color: '#ffff' }}>
          <span style={{ color: '#2CFF05' }}>©2025 Innova Proyectos</span>. Todos los derechos reservados.
        </p>

        {/* Enlace a la página de contacto */}
        <div className="mt-4">
          <a
            href="https://wa.me/50765498362"
            className="text-[#2cff05] hover:text-white transition duration-300"
          >
            Contáctame
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;