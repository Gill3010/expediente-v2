import { useEffect } from 'react';
import {
  FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJava, FaPhp, FaAngular,
} from 'react-icons/fa';
import {
  SiTypescript, SiBootstrap, SiTailwindcss, SiDart, SiFlutter,
} from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const skills = [
    { Icon: FaReact, color: '#61DAFB', name: 'React' },
    { Icon: FaNodeJs, color: '#8CC84A', name: 'Node.js' },
    { Icon: FaCss3Alt, color: '#1572B6', name: 'CSS3' },
    { Icon: FaHtml5, color: '#E34F26', name: 'HTML5' },
    { Icon: FaJava, color: '#007396', name: 'Java' },
    { Icon: FaPhp, color: '#777BB4', name: 'PHP' },
    { Icon: FaAngular, color: '#DD0031', name: 'Angular' },
    { Icon: SiTypescript, color: '#007ACC', name: 'TypeScript' },
    { Icon: SiBootstrap, color: '#7952B3', name: 'Bootstrap' },
    { Icon: SiTailwindcss, color: '#38B2AC', name: 'Tailwind CSS' },
    { Icon: SiDart, color: '#0175C2', name: 'Dart' },
    { Icon: SiFlutter, color: '#02569B', name: 'Flutter' },
  ];

  return (
    <section
      className="py-16"
      style={{ backgroundColor: '#222222', color: 'white' }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4" style={{ color: '#2CFF05' }}>
          Habilidades
        </h2>
        <div className="relative mx-auto mt-2 h-1 w-32 overflow-hidden">
          <div className="absolute w-full h-full animate-slide-line bg-[#2CFF05]"></div>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
          {skills.map(({ Icon, color, name }, index) => (
            <div
              key={name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="skill-card rounded-lg p-6 shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_#2CFF05]"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <Icon className="mx-auto mb-6 w-16 h-16" style={{ color }} />
              <h3 className="text-xl font-medium" style={{ color: '#2CFF05' }}>{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;