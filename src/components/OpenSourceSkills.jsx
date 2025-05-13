import { useEffect } from 'react';
import { FaWordpress } from 'react-icons/fa';
import ojsLogo from "../assets/logos/ojs.webp";
import ompLogo from "../assets/logos/omp.webp";
import opsLogo from "../assets/logos/ops.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillsSection = () => { 
  const pkpLogos = [ 
    { src: ojsLogo, name: 'OJS' },
    { src: ompLogo, name: 'OMP' },
    { src: opsLogo, name: 'OPS' },
  ];

  // Iniciar AOS cuando el componente se monta
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duración de la animación
      once: false,      // Ejecutar solo una vez
    });
  }, []);

  return (
    <section
      className="py-16"
      style={{
        backgroundColor: '#222222',
        color: '#2CFF05',
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Desarrollo Open Source</h2>
       
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Logos PKP */}
          {pkpLogos.map((logo, index) => (
            <div
              key={logo.name}
              data-aos="fade-up"
              data-aos-delay={index * 100} // Aumenta el delay para cada logo
              className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 bg-white bg-opacity-10"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="mx-auto mb-6 w-16 h-16 object-contain"
              />
              <h3 className="text-xl font-medium text-[#2CFF05]">{logo.name}</h3>
            </div>
          ))}

          {/* WordPress */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 bg-white bg-opacity-10"
          >
            <FaWordpress className="mx-auto mb-6 w-16 h-16" style={{ color: '#21759B' }} />
            <h3 className="text-xl font-medium text-[#2CFF05]">WordPress</h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;