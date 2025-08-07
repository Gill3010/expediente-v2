import PropTypes from 'prop-types';
import 'aos/dist/aos.css';
import IsraelImage from '../assets/Israel.jpeg';

const TeamMember = ({ name, role, description, image, cvLink }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
      data-aos="fade-up" 
      data-aos-duration="500"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Imagen */}
        <div className="lg:w-1/3 p-6 flex justify-center lg:justify-start">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-blue-50 opacity-10"></div>
          </div>
        </div>

        {/* Contenido de texto */}
        <div className="lg:w-2/3 p-8">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
            <div className="w-16 h-1 bg-blue-600 my-3"></div>
            <p className="text-lg font-medium text-blue-600">{role}</p>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          
          <a 
            href={cvLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-sm"
          >
            Ver CV Completo
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cvLink: PropTypes.string.isRequired
};

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            <span className="text-blue-600">Experiencia</span> Profesional
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Desarrollo de soluciones tecnológicas para el sector educativo y de investigación
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <TeamMember
            name="Israel Samuels"
            role="Desarrollador Full Stack"
            description="Especializado en crear soluciones digitales completas para instituciones educativas y centros de investigación. Experiencia en diseño, desarrollo e implementación de plataformas académicas, sistemas de gestión de contenido y aplicaciones web interactivas."
            image={IsraelImage}
            cvLink="/assets/israel-cv.pdf"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;