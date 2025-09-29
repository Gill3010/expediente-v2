import  { useRef, useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import 'aos/dist/aos.css';

// Importar logos (asegúrate de que las imágenes sean versiones en alta calidad)
import Universidad1 from '../assets/up.jpg';
import Universidad2 from '../assets/udellpa.png';
import Universidad3 from '../assets/santander.png';
import Universidad4 from '../assets/relatic.png';
import Universidad6 from '../assets/metxi.png';
import Universidad7 from '../assets/landing.png';
import Universidad8 from '../assets/icuali.png';
import Universidad9 from '../assets/hossana.png';
import Universidad10 from '../assets/dialogos.png';
import Universidad11 from '../assets/educaf5.jpeg';
import Universidad12 from '../assets/crupe.png';

const ClientsCarousel = () => {
  const sliderRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(true);

  const clientProjects = [
    {
      logo: Universidad4,
      link: "https://relaticpanama.org/_books/index.php/edrp/catalog",
      name: "Aprendizaje Continuo"
    },
    {
      logo: Universidad1,
      link: "https://revistas.up.ac.pa/",
      name: "Universidad de Panamá"
    },
    {
      logo: Universidad2,
      link: "https://udellpa.edu.pa/",
      name: "UDELLPA"
    },
    {
      logo: Universidad3,
      link: "https://usantander.edu.pa/",
      name: "Universidad Santander"
    },
    {
      logo: Universidad4,
      link: "https://relaticpanama.org/_journals/",
      name: "Revistas Relatic"
    },
    {
      logo: Universidad6,
      link: "https://www.metxi.net/Metxi/",
      name: "METXI Network"
    },
    {
      logo: Universidad7,
      link: "https://www.relaticpanama.org/",
      name: "Relatic Panama"
    },
    {
      logo: Universidad8,
      link: "https://relaticpanama.org/_journals/index.php/icuali",
      name: "Revista ICUALI"
    },
    {
      logo: Universidad4,
      link: "https://relaticpanama.org/_books/index.php/edrp/catalog",
      name: "Libros Digitales"
    },
    {
      logo: Universidad9,
      link: "https://uh.ac.pa/",
      name: "Universidad Hosanna"
    },
    {
      logo: Universidad10,
      link: "https://relaticpanama.org/_journals/index.php/dialogoseducativos",
      name: "Diálogos Educativos"
    },
    {
      logo: Universidad11,
      link: "https://relaticpanama.org/_journals/index.php/educaf5-berit",
      name: "Educaf5-Berit"
    },
    {
      logo: Universidad12,
      link: "https://relaticpanama.org/_events/_crupe/",
      name: "CRUPE"
    },
    {
      logo: Universidad4,
      link: "https://relaticpanama.org/_posters/",
      name: "Carteles Digitales"
    },
    
  ];

  const toggleAutoPlay = () => {
    setAutoPlay(prev => !prev);
    if (sliderRef.current) {
      autoPlay ? sliderRef.current.slickPause() : sliderRef.current.slickPlay();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            <span className="text-blue-600">Clientes</span> Académicos
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Instituciones educativas y proyectos académicos que han confiado en mis soluciones
          </p>
        </div>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {clientProjects.map((project, index) => (
              <div key={index} className="px-2">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 h-full border border-gray-100"
                >
                  <div className="h-32 flex items-center justify-center mb-4 p-2 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg">
                    <img
                      src={project.logo}
                      alt={project.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                      style={{
                        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1)) contrast(1.05) brightness(0.98)'
                      }}
                    />
                  </div>
                  <h3 className="text-center text-gray-700 font-medium">
                    {project.name}
                  </h3>
                </a>
              </div>
            ))}
          </Slider>

          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-md text-gray-600 hover:text-blue-600 hover:shadow-lg z-10 transition-all"
            aria-label="Anterior"
          >
            <FaArrowLeft size={18} />
          </button>

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-md text-gray-600 hover:text-blue-600 hover:shadow-lg z-10 transition-all"
            aria-label="Siguiente"
          >
            <FaArrowRight size={18} />
          </button>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={toggleAutoPlay}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
          >
            {autoPlay ? (
              <>
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Pausar
              </>
            ) : (
              <>
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Reproducir
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;