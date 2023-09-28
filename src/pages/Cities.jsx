import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {createAllCities, filterCities} from "../redux/actions/cityActions";

const Cities = () => {
  const dispatch = useDispatch();
  const cities = useSelector(
    (state) => state.createAllCitiesReducer.citiesFiltered
  );
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Cities - MyTinerary";
    dispatch(createAllCities());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="px-4 py-8 text-center">
        <div className="mb-4">
          <input
            type="text"
            name="search"
            placeholder="Search By City"
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
              <h3 className="text-lg">No luck with your search.</h3>
            </section>
          ) : cities == "loading" ? (
            <span>LOADING...</span>
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
          Go Back to Main
        </button>
      </main>
      <Footer />
    </>
  );
};

export default Cities;