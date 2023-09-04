import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import Card from "../components/Card";
import {createAllCities, filterCities} from "../redux/actions/cityActions";
import Footer from "../components/Footer";

const Cities = () => {
  const dispatch = useDispatch();
  const cities = useSelector(
    (state) => state.createAllCitiesReducer.citiesFiltered
  );
  const navigate = useNavigate();

  // const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Cities - MyTinerary";
    dispatch(createAllCities());
  }, [dispatch]);

  // const filterCities = cities.filter((city) =>
  //   city.city.toLowerCase().trim().startsWith(search.toLowerCase().trim())
  // );

  return (
    <>
      <main className="px-4 py-8 text-center">
        <div className="mb-4">
          <input
            type="text"
            name="search"
            placeholder="Search By City"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            onChange={(e) => dispatch(filterCities(e.target.value))}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.length === 0 ? (
            <section className="text-center">
              <h1 className="text-3xl font-bold mb-2">
                Oh, oh mdfk!, <span className="text-blue-500">Sorry...</span>
              </h1>
              <h3 className="text-lg">There´s no content for that search.</h3>
            </section>
          ) : (
            cities.map((data, indexMap) => (
              <Link to={`/city/${data.city}`} key={indexMap}>
                <Card data={data}></Card>
              </Link>
            ))
          )}
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-600 hover:shadow-md transition duration-300 ease-in-out bg-center"
        >
          GO BACK TO MAIN
        </button>
      </main>
      <Footer />
    </>
  );
};

export default Cities;