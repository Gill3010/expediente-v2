import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import IsraelImage from '../assets/Israel.jpeg';

const TeamMember = ({ name, role, description, image, cvLink, isBottom }) => {
  return (
    <div
      className="p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_#2CFF05] flex flex-col lg:flex-row items-center lg:items-start lg:text-left"
      style={{ backgroundColor: '#222222' }}
      data-aos="fade-up" 
      data-aos-duration="1000" 
    >
      {/* Imagen */}
      <div className={`mb-6 lg:mb-0 lg:mr-6 lg:flex-shrink-0 ${isBottom ? 'lg:order-last' : ''}`}>
        <div
          className="relative w-48 h-48 bg-verdeBoton rounded-full flex items-center justify-center overflow-hidden"
          style={{ border: '2px solid #2cff05' }}
        >
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover" 
            style={{ border: '2px solid #2cff05' }} 
          />
        </div>
      </div>

      {/* Contenido de texto */}
      <div className={`text-center lg:text-left lg:flex-1 ${isBottom ? 'lg:order-first' : ''}`} style={{ color: 'white' }}>
        <h3 className="text-2xl font-semibold mb-2" style={{ color: '#2CFF05' }}>{name}</h3>
        <p className="text-xl font-medium mb-4" style={{ color: '#ffffff' }}>{role}</p>
        <p className="text-md mb-6 leading-relaxed" style={{ color: '#ffffff' }}>{description}</p>
        <a 
          href={cvLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-[#2cff05] text-black px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition duration-300 hover:shadow-[0_0_20px_#2CFF05] hover:-translate-y-2"
          data-aos="fade-up" 
          data-aos-duration="1000"  // Efecto fade-up para el botón
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section
      className="py-16"
      style={{
        backgroundColor: '#111111',
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-semibold mb-4" style={{ color: '#2CFF05' }}>
          Experiencia profesional
        </h2>

        {/* Línea animada debajo del título */}
        <div className="mt-6 mb-6 w-44 h-1 mx-auto overflow-hidden relative">
          <div className="absolute w-full h-full animate-slide-line bg-[#2CFF05]"></div>
        </div>

        <p className="text-lg" style={{ color: '#FFF' }}>
          Desarrollo soluciones vanguardistas para proyectos tecnológicos y educativos.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-10 px-4">
        <TeamMember
          name="Israel Samuels"
          role="Full Stack Developer"
          description="Diseñar y construir soluciones completas y eficientes, asegurando su crecimiento, escalabilidad y adaptabilidad...."
          image={IsraelImage}
          cvLink="/assets/israel-cv.pdf"
          isBottom={true}
        />
      </div>
    </section>
  );
};

export default TeamSection;