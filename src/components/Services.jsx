import { useEffect } from 'react';
import { 
  FaCode, 
  FaPlug, 
  FaServer, 
  FaSearch 
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const services = [
    {
      icon: <FaCode className="w-8 h-8 text-blue-600" />,
      title: "Desarrollo de Aplicaciones Web",
      description: "Creación de plataformas académicas y sistemas de gestión educativa personalizados, escalables y seguros.",
      delay: 0
    },
    {
      icon: <FaPlug className="w-8 h-8 text-blue-600" />,
      title: "Integración de Sistemas",
      description: "Conexión de plataformas educativas con sistemas existentes mediante APIs robustas y documentadas.",
      delay: 50
    },
    {
      icon: <FaServer className="w-8 h-8 text-blue-600" />,
      title: "Administración de Servidores",
      description: "Configuración y mantenimiento de entornos para instituciones educativas con alta disponibilidad.",
      delay: 100
    },
    {
      icon: <FaSearch className="w-8 h-8 text-blue-600" />,
      title: "Optimización Académica",
      description: "Mejora de la visibilidad y accesibilidad de plataformas educativas en línea.",
      delay: 150
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            <span className="text-blue-600">Servicios</span> Especializados
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas específicamente para instituciones educativas y centros de investigación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.delay}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 bg-blue-50 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;