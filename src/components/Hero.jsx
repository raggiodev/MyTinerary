import {useNavigate} from "react-router-dom";
import Carousel from "../components/Carousel";

function Hero() {
  const navigate = useNavigate();

  const exploreCities = () => {
    navigate("/cities");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-10 text-center bg-blue-900 text-white">
      <section className="p-8 rounded-lg mb-8 max-w-2xl bg-opacity-75">
        <h3 className="text-xl font-semibold mb-2">Find your perfect trip,</h3>
        <h3 className="text-xl font-semibold">
          designed by insiders who know and love their cities!
        </h3>
        <button
          onClick={exploreCities}
          className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-600 hover:shadow-md transition duration-300 ease-in-out"
        >
          Explore Cities
        </button>
      </section>
      <Carousel />
    </main>
  );
}

export default Hero;