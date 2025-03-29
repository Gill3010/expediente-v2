// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        azulOscuro: "#0b1b2e", // Azul oscuro para el header
        azulIntermedio: "#1e3a8a", // Azul intermedio para AboutUs
        azulClaro: "#004aad",
        verdeBoton: "#00c09a",
        blancoTexto: "#ffffff",
        grisClaro: "#d1d5db",
      },
      backgroundImage: {
        degradado: "linear-gradient(to right, #1B5E20, #2E7D32, #00E5FF)", // Agregado el degradado personalizado
      },
    },
  },
  plugins: [],
};
