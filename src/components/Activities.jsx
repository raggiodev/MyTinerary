import axios from "axios";
import { useEffect, useState } from "react";
import { apiURL } from "../Utils/apiURL.js";
import { TbGoGame } from "react-icons/tb";

const Activities = ({ itineraryId }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get(apiURL + "activities/" + itineraryId)
      .then((response) => setActivities(response.data.response));
  }, [itineraryId]);

  return (
    <div className="mt-4">
      {activities && activities.length === 0 ? (
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">
              No <span className="text-accent">Activities</span> for this
              Itinerary Yet
            </h2>
            <p className="text-gray-500">Feel free to ask for more content.</p>
          </div>
          <img
            className="max-w-90 max-h-10rem ml-4"
            src={TbGoGame}
            alt="activities"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((activity, indexMap) => (
            <div
              className="activity border rounded-md overflow-hidden"
              key={indexMap}
            >
              <img
                className="w-full h-36 object-cover"
                src={activity.photo}
                alt={activity.name}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{activity.name}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Activities;