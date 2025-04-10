import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import IsraelImage from '../assets/Israel.jpeg';

const TeamMember = ({ name, role, description, image, cvLink, isBottom }) => {
  return (
    <div
      className="p-8 rounded-2xl shadow-lg flex flex-col lg:flex-row items-center lg:items-start lg:text-left"
      style={{ backgroundColor: 'rgba(27, 94, 32, 0.8)' }}
      data-aos="fade-up" 
      data-aos-duration="1000" 
    >
      {/* Imagen */}
      <div className={`mb-6 lg:mb-0 lg:mr-6 lg:flex-shrink-0 ${isBottom ? 'lg:order-last' : ''}`}>
        <div
          className="relative w-48 h-48 bg-verdeBoton rounded-full flex items-center justify-center overflow-hidden"
          style={{ border: '2px solid white' }}
        >
          <img src={image} alt={name} className="w-full h-full object-cover" style={{ border: '2px solid white' }} />
        </div>
      </div>
      {/* Contenido de texto */}
      <div className={`text-center lg:text-left lg:flex-1 ${isBottom ? 'lg:order-first' : ''}`} style={{ color: 'white' }}>
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-xl font-medium mb-4" style={{ color: '#E0F7FA' }}>{role}</p>
        <p className="text-md mb-6 leading-relaxed" style={{ color: '#E0F7FA' }}>{description}</p>
        <a href={cvLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-verdeBoton px-6 py-2 rounded-full font-medium hover:bg-teal-600 hover:text-white transition duration-300">
          Descargar CV
        </a>
      </div>
    </div>
  );
};

const TeamSection = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <section
      className="py-16"
      style={{
        background: 'linear-gradient(to right, #1B5E20, #00E5FF)',
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-semibold mb-4" style={{ color: 'white' }}>Experiencia profesional</h2>
        <p className="text-lg" style={{ color: '#E0F7FA' }}>Desarrollo soluciones vanguardistas para proyectos tecnológicos y educativos.</p>
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
