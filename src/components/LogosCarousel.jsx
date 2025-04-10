import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
    setAutoPlay(!autoPlay);
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

  return (
    <div className="w-full py-16" style={{ background: 'linear-gradient(to right, #1B5E20, #00E5FF)' }}>
      <h2 className="text-3xl text-center text-white mb-8">Proyectos realizados</h2>
      <div className="relative max-w-6xl mx-auto px-4">
        <Slider ref={sliderRef} {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-2">
              <div 
                className="flex justify-center items-center p-4 rounded-lg shadow-md bg-white bg-opacity-20"
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
        <button
          onClick={previous}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
      <div className="text-center mt-8">
        <button
          onClick={toggleAutoPlay}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-2 px-6 rounded-full transition"
        >
          {autoPlay ? '⏸ Pausar' : '▶ Reproducir'}
        </button>
      </div>
    </div>
  );
};

export default LogosCarousel;