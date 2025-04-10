import { useState } from 'react';

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

  return (
    <section
      className="py-8 w-full"
      style={{
        background: 'linear-gradient(to right, #1B5E20, #00E5FF)',
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12" style={{ color: 'white' }}>¡Contáctame!</h2>

        {submitted && (
          <p className="text-green-500 mb-4">¡Gracias! Tu mensaje ha sido enviado con éxito.</p>
        )}

        <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto p-8 rounded-lg shadow-lg w-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white bg-transparent placeholder:text-gray-300"
              style={{ color: 'white' }}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white bg-transparent placeholder:text-gray-300"
              style={{ color: 'white' }}
            />
            <textarea
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Asunto"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 h-32 resize-none text-white bg-transparent placeholder:text-gray-300"
              style={{ color: 'white' }}
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-md hover:bg-teal-600 transition duration-300"
              style={{ backgroundColor: '#00E6D2', color: 'white' }}
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