import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Universidad1 from '../assets/up.jpg';
import Universidad2 from '../assets/udellpa.png';
import Universidad3 from '../assets/santander.png';
import Universidad4 from '../assets/relatic.png';
import Universidad5 from '../assets/portalcarteles.png';
import Universidad6 from '../assets/metxi.png';
import Universidad7 from '../assets/landing.png';
import Universidad8 from '../assets/icuali.png';
import Universidad9 from '../assets/hossana.png';
import Universidad10 from '../assets/dialogos.png';

const LogosCarousel = () => {
  const sliderRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(true);

  const links = [
    "https://revistas.up.ac.pa/",
    "https://udellpa.edu.pa/",
    "https://usantander.edu.pa/",
    "https://relaticpanama.org/_journals/",
    "https://www.portaldecartelescientificos.org/",
    "https://www.metxi.net/Metxi/",
    "https://www.relaticpanama.org/",
    "https://relaticpanama.org/_journals/index.php/icuali",
    "https://uh.ac.pa/",
    "https://relaticpanama.org/_journals/index.php/dialogoseducativos",
  ];

  const toggleAutoPlay = () => {
    setAutoPlay(prev => {
      const newAutoPlay = !prev;
      // Forzar la actualización del autoplay cuando cambia el estado
      if (sliderRef.current) {
        if (newAutoPlay) {
          sliderRef.current.slickPlay(); // Reanudar el autoplay
        } else {
          sliderRef.current.slickPause(); // Pausar el autoplay
        }
      }
      return newAutoPlay;
    });
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const logos = [
    Universidad1,
    Universidad2,
    Universidad3,
    Universidad4,
    Universidad5,
    Universidad6,
    Universidad7,
    Universidad8,
    Universidad9,
    Universidad10,
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div className="w-full py-16" style={{ background: '#111111' }}>
      {/* Título sin animación */}
      <h2 className="text-3xl text-center text-[#2CFF05] mb-8">
        Proyectos realizados
      </h2>

      {/* Línea animada debajo del título */}
      <div className="mt-2 mb-12 w-44 h-1 mx-auto overflow-hidden relative">
        <div className="absolute w-full h-full animate-slide-line bg-[#2CFF05]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <Slider ref={sliderRef} {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-2" data-aos="fade-up" data-aos-delay={index * 100}>
              <div 
                className="flex justify-center items-center p-4 rounded-lg shadow-md bg-[#2CFF05] bg-opacity-20"
                style={{
                  height: '160px', 
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <a 
                  href={links[index]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full h-full flex justify-center items-center"
                >
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain', 
                      display: 'block',
                      margin: '0 auto',
                    }}
                  />
                </a>
              </div>
            </div>
          ))}
        </Slider>

        {/* Botón Anterior */}
        <button
          onClick={previous}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-[#2CFF05] p-2 rounded-full z-10 hover:bg-opacity-75 transition duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_#2CFF05]"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Botón Siguiente */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-[#2CFF05] p-2 rounded-full z-10 hover:bg-opacity-75 transition duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_#2CFF05]"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Botón de Play/Pause */}
      <div className="text-center mt-8">
        <button
          onClick={toggleAutoPlay}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-[#2cff05] font-bold py-2 px-6 rounded-full transition duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_#2CFF05]"
        >
          {autoPlay ? '⏸ Pausar' : '▶ Reproducir'}
        </button>
      </div>
    </div>
  );
};

export default LogosCarousel;