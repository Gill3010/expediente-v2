import { useEffect } from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJava, FaPhp, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiBootstrap, SiTailwindcss, SiDart, SiFlutter } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const reactColor = '#61DAFB';
  const nodeJsColor = '#8CC84A';
  const css3Color = '#1572B6';
  const html5Color = '#E34F26';
  const javaColor = '#007396';
  const phpColor = '#777BB4';
  const angularColor = '#DD0031';
  const typescriptColor = '#007ACC';
  const bootstrapColor = '#7952B3';
  const tailwindColor = '#38B2AC';
  const dartColor = '#0175C2';
  const flutterColor = '#02569B';

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
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12" style={{ color: '#2CFF05' }}>
          Habilidades
        </h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Tarjeta de React */}
          <div
            data-aos="fade-up"
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaReact className="mx-auto mb-6 w-16 h-16" style={{ color: reactColor }} />
            <h3 className="text-xl font-medium" style={{ color: '#2CFF05' }}>React</h3>
          </div>

          {/* Tarjeta de Node.js */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaNodeJs className="mx-auto mb-6 w-16 h-16" style={{ color: nodeJsColor }} />
            <h3 className="text-xl font-medium" style={{ color: '#2CFF05' }}>Node.js</h3>
          </div>

          {/* Tarjeta de CSS3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaCss3Alt className="mx-auto mb-6 w-16 h-16" style={{ color: css3Color }} />
            <h3 className="text-xl font-medium" style={{ color: '#2CFF05' }}>CSS3</h3>
          </div>

          {/* Tarjeta de HTML5 */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaHtml5 className="mx-auto mb-6 w-16 h-16" style={{ color: html5Color }} />
            <h3 className="text-xl font-medium" style={{ color: '#2CFF05' }}>HTML5</h3>
          </div>

          {/* Tarjeta de Java */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaJava className="mx-auto mb-6 w-16 h-16" style={{ color: javaColor }} />
            <h3 className="text-xl font-medium" style={{ color: '#2CFF05' }}>Java</h3>
          </div>

          {/* Tarjeta de PHP */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaPhp className="mx-auto mb-6 w-16 h-16" style={{ color: phpColor }} />
            <h3 className="text-xl font-medium" style={{ color: '#2CFF05' }}>PHP</h3>
          </div>

          {/* Tarjeta de Angular */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaAngular className="mx-auto mb-6 w-16 h-16" style={{ color: angularColor }} />
            <h3 className="text-xl font-medium" style={{ color: '#2CFF05' }}>Angular</h3>
          </div>

          {/* Tarjeta de TypeScript */}
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <SiTypescript className="mx-auto mb-6 w-16 h-16" style={{ color: typescriptColor }} />
            <h3 className="text-xl font-medium" style={{ color: '#2CFF05' }}>TypeScript</h3>
          </div>

          {/* Tarjeta de Bootstrap */}
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <SiBootstrap className="mx-auto mb-6 w-16 h-16" style={{ color: bootstrapColor }} />
            <h3 className="text-xl font-medium" style={{ color: '#2CFF05' }}>Bootstrap</h3>
          </div>

          {/* Tarjeta de Tailwind CSS */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <SiTailwindcss className="mx-auto mb-6 w-16 h-16" style={{ color: tailwindColor }} />
            <h3 className="text-xl font-medium" style={{ color: '#2CFF05' }}>Tailwind CSS</h3>
          </div>

          {/* Tarjeta de Dart */}
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <SiDart className="mx-auto mb-6 w-16 h-16" style={{ color: dartColor }} />
            <h3 className="text-xl font-medium" style={{ color: '#2CFF05' }}>Dart</h3>
          </div>

          {/* Tarjeta de Flutter */}
          <div
            data-aos="fade-up"
            data-aos-delay="1100"
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <SiFlutter className="mx-auto mb-6 w-16 h-16" style={{ color: flutterColor }} />
            <h3 className="text-xl font-medium" style={{ color: '#2CFF05' }}>Flutter</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;