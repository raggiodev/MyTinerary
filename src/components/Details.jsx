import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import UnderConstruction from "../components/UnderConstruction";

const Details = () => {
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    document.title = params.id + " from 'MyTinerary'";
  },
  [params.id]);

  return (
    <UnderConstruction>
      <section style={{marginTop: "2rem", textAlign: "center"}}>
        <h2>City Details</h2>
        <p>Details about {params.id} will be available soon or never.</p>
      </section>
    </UnderConstruction>
  );
};

export default Details;