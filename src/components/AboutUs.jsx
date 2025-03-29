import teamImage from '../assets/Nosotros.webp';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#00E5FF] text-white py-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:text-left text-center">
        {/* Contenido de texto */}
        <div className="lg:w-1/2 px-6 lg:px-0 mb-10 lg:mb-0">
          <h2 className="text-3xl font-semibold mb-4">
            <span className="text-[#FFC107]">Sobre</span> Nosotros
          </h2>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            Nuestro compromiso es transformar ideas en realidades digitales que generan impacto. 
            Con un enfoque en tecnología avanzada, trabajamos para crear soluciones que aporten valor 
            y excedan las expectativas de nuestros clientes.
          </p>

          <button className="bg-[#FFC107] text-[#1B5E20] px-6 py-2 rounded-full font-medium hover:bg-yellow-400 transition duration-300">
            ¡Conócenos!
          </button>
        </div>

        {/* Imagen decorativa */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src={teamImage} alt="Equipo de desarrollo" className="w-full max-w-md object-contain rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
