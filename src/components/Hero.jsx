import Carousel from "../components/Carousel";

function Hero() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <section className="bg-blue-900 text-white p-8 rounded-lg mb-8">
        <h1 className="text-4xl font-semibold mb-4">MyTinerary</h1>
        <p className="text-lg">Find your perfect trip, designed by insiders who know and love their cities!</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-600">View More</button>
      </section>
      <Carousel>
        <img
          src=""
          alt=""
        />
        <img
          src=""
          alt=""
        />
        <img
          src=""
          alt=""
        />
      </Carousel>
    </main>
  );
}

export default Hero;