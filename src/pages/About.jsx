import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <p className="text-lg">MyTinerary</p>
        <p className="text-lg mt-4">
          Itinerarios con actividades en tus viajes a ciudades grandes de
          distintos países o algo así no se yo solo programo como loco (?
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;