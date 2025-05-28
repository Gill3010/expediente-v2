import { useEffect } from 'react';
import Cpanel from '../assets/Cpanel.webp';
import Desarrollo2 from '../assets/Desarrollo2.jpg';
import Integracion from '../assets/Integracion.jpg';
import Seo from '../assets/Seo.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '0 0 20px rgba(44, 255, 5, 0.6)',
  };

  return (
    <section
      className="py-16"
      style={{
        backgroundColor: '#222222',
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4" style={{ color: '#2CFF05' }}>
          Descubre lo que puedo hacer por ti
        </h2>

        {/* Línea animada debajo del título */}
        <div className="mt-6 mb-12 w-44 h-1 mx-auto overflow-hidden relative">
          <div className="absolute w-full h-full animate-slide-line bg-[#2CFF05]"></div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Desarrollo de aplicaciones web */}
          <div
            data-aos="fade-up"
            className="service-card text-center py-8 px-6 rounded-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={cardStyle}
          >
            <img src={Desarrollo2} alt="Desarrollo de aplicaciones web" className="mx-auto mb-6 w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-medium mb-4" style={{ color: '#2CFF05' }}>Desarrollo de aplicaciones web</h3>
            <p className="text-sm" style={{ color: '#fff' }}>
              Construir aplicaciones web personalizadas que se adaptan a las necesidades de tu negocio.
            </p>
          </div>

          {/* Integración de APIs */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="service-card text-center py-8 px-6 rounded-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={cardStyle}
          >
            <img src={Integracion} alt="Integración de APIs" className="mx-auto mb-6 w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-medium mb-4" style={{ color: '#2CFF05' }}>Integración de APIs</h3>
            <p className="text-sm" style={{ color: '#fff' }}>
              Integrar APIs de terceros para expandir las funcionalidades de tu aplicación.
            </p>
          </div>

          {/* Soporte en cPanel */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="service-card text-center py-8 px-6 rounded-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={cardStyle}
          >
            <img src={Cpanel} alt="Soporte en cPanel" className="mx-auto mb-6 w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-medium mb-4" style={{ color: '#2CFF05' }}>Soporte en cPanel</h3>
            <p className="text-sm" style={{ color: '#fff' }}>
              Soporte y mantenimiento en cPanel para garantizar el correcto funcionamiento de tu sitio.
            </p>
          </div>

          {/* SEO para tu sitio web */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="service-card text-center py-8 px-6 rounded-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={cardStyle}
          >
            <img src={Seo} alt="SEO para tu sitio web" className="mx-auto mb-6 w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-medium mb-4" style={{ color: '#2CFF05' }}>SEO para tu sitio web</h3>
            <p className="text-sm" style={{ color: '#fff' }}>
              Optimización SEO para mejorar la visibilidad de tu sitio web en motores de búsqueda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;