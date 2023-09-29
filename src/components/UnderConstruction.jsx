import {NavLink} from "react-router-dom";

const UnderConstruction = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <section className="text-center mb-8">
        <h1 className="text-3xl font-bold">Page Under Construction</h1>
        <h3>We're working on bringing you new content</h3>
        <p>Check back later for updates!</p>
        <NavLink to="/" className="mt-4 text-gray-600">
          <button className="mt-4 py-2 px-4 border border-gray-600 rounded cursor-pointer">
            Back to Home
          </button>
        </NavLink>
      </section>
      <aside className="flex justify-center h-40">
        <div className="p-4 rounded-lg">
          <img
            src="./src/assets/underConstruction.jpg"
            alt="PAGE UNDER CONSTRUCTION!"
            className="w-96"
          />
        </div>
      </aside>
    </main>
  );
};

export default UnderConstruction;