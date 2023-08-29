import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Card from "../components/Card";
import {fetchCities} from "../redux/city/cityActions";

const Cities = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.city.cities);

  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Cities - MyTinerary";
    dispatch(fetchCities());
  },
  [dispatch]);

  const filterCities = cities.filter((city) =>
    city.city.toLowerCase().trim().startsWith(search.toLowerCase().trim())
  );

  return (
    <main className="px-4 py-8">
      <div className="mb-4">
        <input
          type="text"
          name="search"
          placeholder="Search By City"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterCities.length === 0 ? (
          <section className="text-center">
            <h1 className="text-3xl font-bold mb-2">
              Oh, oh mdfk!, <span className="text-blue-500">Sorry...</span>
            </h1>
            <h3 className="text-lg">There´s no content for that search.</h3>
          </section>
        ) : (
          filterCities.map((data, indexMap) => (
            <Link to={"/cities/" + data.city} key={indexMap}>
              <Card data={data}></Card>
            </Link>
          ))
        )}
      </div>
    </main>
  );
};

export default Cities;