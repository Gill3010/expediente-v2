import { useEffect, useState } from 'react';
import {
  FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJava, FaPhp, FaAngular,
} from 'react-icons/fa';
import {
  SiTypescript, SiBootstrap, SiTailwindcss, SiDart, SiFlutter, 
  SiPostgresql, SiMysql, SiJavascript, SiMongodb, SiMariadb
} from 'react-icons/si';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  useEffect(() => {
    // Manejar el resize de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Reiniciar el índice cuando cambie el tamaño para evitar problemas
      setCurrentIndex(0);
    };
    
    window.addEventListener('resize', handleResize);
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const totalSlides = getGroupedSkills().length;
        return (prev + 1) % totalSlides;
      });
    }, 3000);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

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

  // Función para agrupar skills según el tamaño de pantalla
  const getGroupedSkills = () => {
    let itemsPerSlide;
    
    if (windowWidth < 640) {
      itemsPerSlide = 1; // Móvil: 1 elemento por slide
    } else if (windowWidth < 768) {
      itemsPerSlide = 2; // Tablet pequeña: 2 elementos
    } else if (windowWidth < 1024) {
      itemsPerSlide = 3; // Tablet: 3 elementos
    } else {
      itemsPerSlide = 5; // Desktop: 5 elementos
    }
    
    const groupedSkills = [];
    for (let i = 0; i < allSkills.length; i += itemsPerSlide) {
      groupedSkills.push(allSkills.slice(i, i + itemsPerSlide));
    }
    
    return groupedSkills;
  };

  const groupedSkills = getGroupedSkills();

  // Funciones para navegación manual
  const goToPrevious = () => {
    setCurrentIndex(prev => 
      prev === 0 ? groupedSkills.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % groupedSkills.length);
  };

  // Manejar swipe en dispositivos táctiles
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

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

        <div className="relative">
          {/* Contenedor del carrusel */}
          <div 
            className="relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {groupedSkills.map((group, groupIndex) => (
                <div 
                  key={groupIndex}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className={`grid gap-6 justify-items-center ${
                    windowWidth < 640 
                      ? 'grid-cols-1' 
                      : windowWidth < 768 
                      ? 'grid-cols-2' 
                      : windowWidth < 1024 
                      ? 'grid-cols-3' 
                      : 'grid-cols-5'
                  }`}>
                    {group.map(({ Icon, color, name }) => (
                      <div
                        key={name}
                        className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100 w-full max-w-xs"
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
          </div>
          
          {/* Botones de navegación (solo en escritorio y tablet) */}
          {windowWidth >= 640 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-blue-200 group"
                aria-label="Slide anterior"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-blue-200 group"
                aria-label="Slide siguiente"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
          
          {/* Indicadores de paginación */}
          <div className="flex justify-center mt-8 space-x-2">
            {groupedSkills.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index 
                    ? 'bg-blue-600 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Texto informativo para móvil */}
          {windowWidth < 640 && (
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                Desliza para ver más tecnologías ({currentIndex + 1} de {groupedSkills.length})
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;