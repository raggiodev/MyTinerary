import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Card from '../components/Card';
import {apiURL} from '../utils/apiURL';

const Cities = () => {
  let [CitiesArray, setCitiesArray] = useState([]);
  let [search, setSearch] = useState('');

  useEffect(() => {
    document.title = 'Cities - MyTinerary';
  }, []);

  useEffect(() => {
    fetch(apiURL + 'cities')
      .then((response) => response.json())
      .then((data) => setCitiesArray(data.response));
  }, []);

  const filterCities = CitiesArray.filter((c) =>
    c.city.toLowerCase().trim().startsWith(search.toLowerCase().trim())
  );

  return (
    <main className="px-4 py-8">
      <div className="mb-4">
        <input
          type="text"
          name="search"
          placeholder=" "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <label htmlFor="search" className="block mt-2 text-gray-700">
          Search By City
        </label>
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
            <Link to={'/cities/' + data.city} key={indexMap}>
              <Card data={data}></Card>
            </Link>
          ))
        )}
      </div>
    </main>
  );
};

export default Cities;