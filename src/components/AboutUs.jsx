import teamImage from '../assets/Mi.jpeg';

const AboutUs = () => {
  return (
    <section
      className="py-8 relative"
      style={{
        background: 'linear-gradient(to right, #1B5E20, #00E5FF)',
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:text-left text-center">
        
        <div className="lg:w-1/2 px-6 lg:px-0 mb-10 lg:mb-0">
        <h2 className="text-3xl font-semibold mb-4">
  <span className="text-white">Visión y Misión</span>
</h2>
<p className="text-lg text-white mb-6 leading-relaxed">
Mi enfoque está en crear soluciones digitales que combinan innovación y funcionalidad. Busco construir aplicaciones intuitivas y escalables, utilizando herramientas y tecnologías de última generación para garantizar que cada proyecto sea eficiente y esté alineado con las necesidades del usuario.
</p>
<a href="#equipo" className="bg-white text-verdeBoton px-6 py-2 rounded-full font-medium hover:bg-teal-600 hover:text-white transition duration-300">
  <button>
    ¡Conóceme!
  </button>
</a>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={teamImage}
            alt="Equipo de desarrollo"
            className="w-full max-w-md object-contain"
            style={{ border: '2px solid white' }} 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;