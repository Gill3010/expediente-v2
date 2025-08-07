const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Imagen con marco sutil */}
          <div 
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3"></div>
              <img
                src="https://plus.unsplash.com/premium_photo-1661774925845-cf1083941619?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRpZ2l0YWxpemFjaSVDMyVCM258ZW58MHx8MHx8fDA%3D"
                alt="Israel Samuels - Desarrollador"
                className="relative w-full h-full object-cover rounded-2xl shadow-md border-4 border-white"
              />
            </div>
          </div>

          {/* Contenido textual */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
              <span className="text-blue-600">Visión</span> y{' '}
              <span className="text-gray-700">Enfoque Profesional</span>
            </h2>

            <div className="mb-8">
              <div className="w-20 h-1 bg-blue-600 mb-4"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Con trayectoria en el desarrollo digital para entornos formativos, aplico herramientas computacionales avanzadas al servicio de proyectos académicos y científicos.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mi trabajo se distingue por estructuras sostenibles, integraciones eficientes y coherencia total con los flujos operativos del entorno educativo, empleando tecnologías contemporáneas y esquemas de alto rendimiento.
              </p>
            </div>

            {/* Botón con estilo profesional */}
            <div 
              className="inline-block"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              <a
                href="#contacto"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-sm hover:shadow-md"
              >
                Contactar para proyectos
                <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;