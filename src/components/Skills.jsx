import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJava, FaPhp, FaAngular } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const Skills = () => {
  
  const reactColor = '#61DAFB';
  const nodeJsColor = '#8CC84A';
  const css3Color = '#1572B6';
  const html5Color = '#E34F26';
  const javaColor = '#007396';
  const phpColor = '#777BB4';
  const angularColor = '#DD0031';
  const typescriptColor = '#007ACC';

  return (
    <section
      className="py-16"
      style={{
        background: 'linear-gradient(to right, #1B5E20, #00E5FF)',
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12" style={{ color: 'white' }}>Habilidades</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
          <div
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaReact className="mx-auto mb-6 w-16 h-16" style={{ color: reactColor }} />
            <h3 className="text-xl font-medium" style={{ color: 'white' }}>React</h3>
          </div>
          <div
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaNodeJs className="mx-auto mb-6 w-16 h-16" style={{ color: nodeJsColor }} />
            <h3 className="text-xl font-medium" style={{ color: 'white' }}>Node.js</h3>
          </div>
          <div
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaCss3Alt className="mx-auto mb-6 w-16 h-16" style={{ color: css3Color }} />
            <h3 className="text-xl font-medium" style={{ color: 'white' }}>CSS3</h3>
          </div>
          <div
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaHtml5 className="mx-auto mb-6 w-16 h-16" style={{ color: html5Color }} />
            <h3 className="text-xl font-medium" style={{ color: 'white' }}>HTML5</h3>
          </div>
          <div
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaJava className="mx-auto mb-6 w-16 h-16" style={{ color: javaColor }} />
            <h3 className="text-xl font-medium" style={{ color: 'white' }}>Java</h3>
          </div>
          <div
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaPhp className="mx-auto mb-6 w-16 h-16" style={{ color: phpColor }} />
            <h3 className="text-xl font-medium" style={{ color: 'white' }}>PHP</h3>
          </div>
          <div
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <FaAngular className="mx-auto mb-6 w-16 h-16" style={{ color: angularColor }} />
            <h3 className="text-xl font-medium" style={{ color: 'white' }}>Angular</h3>
          </div>
          <div
            className="skill-card rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <SiTypescript className="mx-auto mb-6 w-16 h-16" style={{ color: typescriptColor }} />
            <h3 className="text-xl font-medium" style={{ color: 'white' }}>TypeScript</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;