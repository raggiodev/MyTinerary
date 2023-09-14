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
    <>
      {activities && activities.length === 0 ? (
        <div className="flex items-center">
          <div>
            <h2>
              No <span className="text-accent">Activities</span> for this
              Itinerary Yet
            </h2>
            <h5>Comment asking for more content</h5>
          </div>
          <img
            className="max-w-90 max-h-10rem"
            src={TbGoGame}
            alt="activities"
          />
        </div>
      ) : (
        activities.map((activity, indexMap) => {
          return (
            <div className="activity" key={indexMap}>
              <h2>{activity.name}</h2>
              <img
                className="max-w-90 max-h-10rem"
                src={activity.photo}
                alt={activity.name}
              />
            </div>
          );
        })
      )}
    </>
  );
};

export default Activities;