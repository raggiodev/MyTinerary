import React from "react";
import {useNavigate} from "react-router-dom";
import {FaSearch} from "react-icons/fa";

const NoItinerariesFound = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-blue-900 text-white">
      <section className="p-8 rounded-lg mb-8 max-w-2xl bg-opacity-75">
        <h3 className="text-xl font-semibold mb-2">No Itineraries Found</h3>
        <h3 className="text-xl font-semibold">
          Oops... There are no itineraries available for this city right now.
        </h3>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-600 hover:shadow-md transition duration-300 ease-in-out"
        >
          Go Back to Cities
        </button>
      </section>
      <aside>
        <FaSearch className="text-5xl" />
      </aside>
    </main>
  );
};

export default NoItinerariesFound;