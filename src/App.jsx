import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Skills from './components/Skills';
import Services from './components/Services';
import TeamMember from './components/TeamMember';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LogosCarousel from './components/LogosCarousel';
import OpenSourceSkills from './components/OpenSourceSkills';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="inicio">
      <Header />
      </section>
      

      <section id="nosotros">
        <AboutUs />
      </section>

      <section id="habilidades">
        <Skills />
      </section>
      
      <section id="habilidades-abiertas">
        <OpenSourceSkills />
      </section>
      
      <section id="equipo">
        <TeamMember />
      </section>

      <section id="servicios">
        <Services />
      </section>
      <section id="logos">
        <LogosCarousel />
      </section>

      <section id="contacto">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;