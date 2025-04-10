import Cpanel from '../assets/Cpanel.webp';
import Desarrollo2 from '../assets/Desarrollo2.jpg';
import Integracion from '../assets/Integracion.jpg';
import Seo from '../assets/Seo.webp';

const Services = () => {
  return (
    <section
      className="py-16"
      style={{
        background: 'linear-gradient(to right, #1B5E20, #00E5FF)',
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12" style={{ color: 'white' }}>Descubre lo que puedo hacer por ti</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="service-card text-center py-8 px-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <img src={Desarrollo2} alt="Desarrollo de aplicaciones web" className="mx-auto mb-6 w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-medium mb-4" style={{ color: 'white' }}>Desarrollo de aplicaciones web</h3>
            <p className="text-sm" style={{ color: '#E0F7FA' }}>Construir aplicaciones web personalizadas que se adaptan a las necesidades de tu negocio.</p>
          </div>
          <div
            className="service-card text-center py-8 px-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <img src={Integracion} alt="Integración de APIs" className="mx-auto mb-6 w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-medium mb-4" style={{ color: 'white' }}>Integración de APIs</h3>
            <p className="text-sm" style={{ color: '#E0F7FA' }}>Integrar APIs de terceros para expandir las funcionalidades de tu aplicación.</p>
          </div>
          <div
            className="service-card text-center py-8 px-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <img src={Cpanel} alt="Soporte en cPanel" className="mx-auto mb-6 w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-medium mb-4" style={{ color: 'white' }}>Soporte en cPanel</h3>
            <p className="text-sm" style={{ color: '#E0F7FA' }}>Soporte y mantenimiento en cPanel para garantizar el correcto funcionamiento de tu sitio.</p>
          </div>
          <div
            className="service-card text-center py-8 px-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <img src={Seo} alt="SEO para tu sitio web" className="mx-auto mb-6 w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-medium mb-4" style={{ color: 'white' }}>SEO para tu sitio web</h3>
            <p className="text-sm" style={{ color: '#E0F7FA' }}>Optimización SEO para mejorar la visibilidad de tu sitio web en motores de búsqueda.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
