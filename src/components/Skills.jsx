import { useEffect, useState } from 'react';
import {
  FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJava, FaPhp, FaAngular,
} from 'react-icons/fa';
import {
  SiTypescript, SiBootstrap, SiTailwindcss, SiDart, SiFlutter, 
  SiPostgresql, SiMysql, SiJavascript, SiMongodb, SiMariadb
} from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out'
    });
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % groupedSkills.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const allSkills = [
    { Icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
    { Icon: FaReact, color: '#61DAFB', name: 'React' },
    { Icon: FaNodeJs, color: '#8CC84B', name: 'Node.js' },
    { Icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
    { Icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
    { Icon: SiMysql, color: '#4479A1', name: 'MySQL' },
    { Icon: SiMariadb, color: '#003545', name: 'MariaDB' },
    { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
    { Icon: FaJava, color: '#007396', name: 'Java' },
    { Icon: FaPhp, color: '#777BB4', name: 'PHP' },
    { Icon: FaAngular, color: '#DD0031', name: 'Angular' },
    { Icon: SiDart, color: '#0175C2', name: 'Dart' },
    { Icon: SiFlutter, color: '#02569B', name: 'Flutter' },
    { Icon: FaHtml5, color: '#E34F26', name: 'HTML5' },
    { Icon: FaCss3Alt, color: '#1572B6', name: 'CSS3' },
    { Icon: SiBootstrap, color: '#7952B3', name: 'Bootstrap' },
    { Icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS' },
  ];

  // Agrupamos las habilidades en conjuntos de 5 para el carrusel
  const groupedSkills = [];
  for (let i = 0; i < allSkills.length; i += 5) {
    groupedSkills.push(allSkills.slice(i, i + 5));
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Tecnologías y <span className="text-blue-600">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Conoce las tecnologías que impulsan nuestras soluciones digitales
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {groupedSkills.map((group, groupIndex) => (
              <div 
                key={groupIndex}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                  {group.map(({ Icon, color, name }, index) => (
                    <div
                      key={name}
                      data-aos="fade-up"
                      data-aos-delay={index * 50}
                      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100"
                    >
                      <div className="flex flex-col items-center">
                        <Icon 
                          className="mb-4 w-10 h-10" 
                          style={{ color }} 
                        />
                        <h3 className="text-gray-700 font-medium text-center">{name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {groupedSkills.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;