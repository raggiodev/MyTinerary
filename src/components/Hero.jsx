import React from 'react';
import Carousel from '../components/Carousel';

function Hero() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-10 text-center bg-blue-900 text-white">
      <section className="p-8 rounded-lg mb-8 max-w-2xl bg-opacity-75">
        <h3 className="text-xl font-semibold mb-2">Find your perfect trip,</h3>
        <h3 className="text-xl font-semibold">designed by insiders who know and love their cities!</h3>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-600 hover:shadow-md transition duration-300 ease-in-out">View More</button>
      </section>
      <Carousel>
        <img
          src="https://i.im.ge/2022/08/31/OE8vA4.peritoMorenoCalafate.png"
          alt="Argentina"
          className="w-96 h-auto"
        />
        <img
          src="https://i.im.ge/2022/08/31/OE8ZKX.japanHonshuIsland.png"
          alt="Japan"
          className="w-96 h-auto"
        />
        <img
          src="https://i.im.ge/2022/08/31/OERMl1.salahCitadelCairoCity.png"
          alt="Egypt"
          className="w-96 h-auto"
        />
      </Carousel>
    </main>
  );
}

export default Hero;