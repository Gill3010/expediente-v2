import teamImage from '../assets/Mi.jpeg';

const AboutUs = () => {
  return (
    <section
      className="py-8 relative"
      style={{
        backgroundColor: '#111111',
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:text-left text-center">
        
        {/* Imagen con animación */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start mb-10 lg:mb-0">
          <div
            className="w-64 h-64 rounded-full overflow-hidden border-2 border-[#2CFF05]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img
              src={teamImage}
              alt="Equipo de desarrollo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Texto y botón */}
        <div className="lg:w-1/2 px-6 lg:px-0">
          <h2 className="text-3xl font-semibold mb-4 inline-block relative">
            <span style={{ color: '#2CFF05' }}>Visión y Misión</span>

            {/* Línea animada debajo */}
            <div className="relative h-1 mt-1 w-48 overflow-hidden mx-auto">
              <div className="absolute h-full w-24 bg-[#2CFF05] animate-line rounded-full"></div>
            </div>
          </h2>

          <p className="text-lg text-white mb-6 leading-relaxed">
            Mi enfoque está en crear soluciones digitales que combinan innovación y funcionalidad. Busco construir aplicaciones intuitivas y escalables, utilizando herramientas y tecnologías de última generación para garantizar que cada proyecto sea eficiente y esté alineado con las necesidades del usuario.
          </p>

          {/* Botón con animación */}
          <a
            href="#equipo"
            className="bg-[#2CFF05] text-[black] px-6 py-2 rounded-full font-medium hover:bg-[#FFF] hover:text-[#000000] transition duration-300 hover:shadow-[0_0_20px_#2CFF05] hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            <button>
              ¡Conóceme!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;