import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    // Simular AOS con Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, observerOptions);

    // Observar todos los elementos con atributos data-aos
    const elementsToAnimate = document.querySelectorAll('[data-aos]');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          [data-aos] {
            opacity: 0;
            transition-property: opacity, transform;
            transition-duration: 0.6s;
            transition-timing-function: ease-out;
          }
          
          [data-aos="fade-up"] {
            transform: translateY(20px);
          }
          
          [data-aos="fade-right"] {
            transform: translateX(-20px);
          }
          
          [data-aos="fade-left"] {
            transform: translateX(20px);
          }
          
          [data-aos-delay="100"] {
            transition-delay: 100ms;
          }
          
          [data-aos-delay="200"] {
            transition-delay: 200ms;
          }
          
          [data-aos-delay="300"] {
            transition-delay: 300ms;
          }
          
          .aos-animate {
            opacity: 1 !important;
            transform: translateX(0) translateY(0) !important;
          }
          
          @media (prefers-reduced-motion: reduce) {
            [data-aos] {
              opacity: 1 !important;
              transform: none !important;
              transition: none !important;
            }
          }
        `}
      </style>
      
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
              <h2 
                className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <span className="text-blue-600">Visión</span> y{' '}
                <span className="text-gray-700">Enfoque Profesional</span>
              </h2>
              
              <div className="mb-8">
                <div className="w-20 h-1 bg-blue-600 mb-4"></div>
                <p 
                  className="text-lg text-gray-600 leading-relaxed mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Con trayectoria en el desarrollo digital para entornos formativos, aplico herramientas computacionales avanzadas al servicio de proyectos académicos y científicos.
                </p>
                <p 
                  className="text-lg text-gray-600 leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Mi trabajo se distingue por estructuras sostenibles, integraciones eficientes y coherencia total con los flujos operativos del entorno educativo, empleando tecnologías contemporáneas y esquemas de alto rendimiento.
                </p>
              </div>
              
              {/* Botón con estilo profesional */}
              <div 
                className="inline-block"
                data-aos="fade-up"
                data-aos-delay="400"
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
    </>
  );
};

export default AboutUs;