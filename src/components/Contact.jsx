import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.subject) {
      console.log(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '' });
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <section
      className="py-8 w-full"
      style={{
        backgroundColor: '#222222',
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl font-semibold mb-4"
          style={{ color: '#2CFF05' }}
        >
          ¡Contáctame!
        </h2>

        {/* Línea animada debajo del título */}
        <div className="mt-2 mb-12 w-44 h-1 mx-auto overflow-hidden relative">
          <div className="absolute w-full h-full animate-slide-line bg-[#2CFF05]"></div>
        </div>

        {submitted && (
          <p className="text-green-500 mb-4" data-aos="fade-up">
            ¡Gracias! Tu mensaje ha sido enviado con éxito.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 max-w-lg mx-auto p-8 rounded-lg shadow-lg w-full"
          style={{ backgroundColor: '#111111' }}
        >
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre"
              className="w-full px-4 py-3 border border-[#2CFF05] rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white bg-transparent placeholder:text-gray-300"
              data-aos="fade-up"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              className="w-full px-4 py-3 border border-[#2CFF05] rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white bg-transparent placeholder:text-gray-300"
              data-aos="fade-up"
            />
            <textarea
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Asunto"
              className="w-full px-4 py-3 border border-[#2CFF05] rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 h-32 resize-none text-white bg-transparent placeholder:text-gray-300"
              data-aos="fade-up"
            ></textarea>
            <button
  type="submit"
  className="w-full py-3 rounded-md transition duration-300 bg-[#2CFF05] text-black hover:bg-white hover:text-black"
  style={{
    transition: 'all 0.3s ease-in-out',
  }}
  onMouseEnter={(e) => {
    e.target.style.boxShadow = '0 0 15px #2CFF05';
  }}
  onMouseLeave={(e) => {
    e.target.style.boxShadow = 'none';
  }}
  data-aos="fade-up"
>
  Enviar
</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
