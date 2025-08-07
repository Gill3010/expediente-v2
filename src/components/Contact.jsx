import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiSend, FiUser, FiMail, FiFileText } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.subject) {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch("https://innovaproyectos.org/api/submit.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        
        if (result.success) {
          console.log("Enviado correctamente:", result.message);
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '' });
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          setError(result.error || "Error al enviar el formulario");
          console.error("Error en el envío:", result.error);
        }
      } catch (error) {
        setError("Error de conexión. Por favor intenta nuevamente.");
        console.error("Error en la conexión:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <section id="contact" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            <span className="text-blue-600">Contacto</span> Profesional
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Para consultas sobre proyectos institucionales o colaboraciones académicas
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted && (
            <div 
              className="mb-8 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 text-center"
              data-aos="fade-up"
            >
              ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.
            </div>
          )}

          {error && (
            <div 
              className="mb-8 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-center"
              data-aos="fade-up"
            >
              {error}
            </div>
          )}

          <form 
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200"
            data-aos="fade-up"
          >
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                  className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Correo institucional"
                  className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                  <FiFileText className="text-gray-400" />
                </div>
                <textarea
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Detalles de tu proyecto o consulta"
                  className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 h-40 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>Respuesta garantizada en un plazo máximo de 48 horas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;