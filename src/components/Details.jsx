import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import UnderConstruction from "../components/UnderConstruction";

const Details = () => {
  const params = useParams();
  const [pageTitle, setPageTitle] = useState("City Details");

  useEffect(() => {
    if (params.id) {
      setPageTitle(`${params.id} from 'MyTinerary'`);
    }
  },
  [params.id]);

  return (
    <UnderConstruction>
      <section className="mt-8 text-center">
        <h2 className="text-xl font-semibold">{pageTitle}</h2>
        <p>Details about {params.id} will be available soon or never.</p>
      </section>
    </UnderConstruction>
  );
};

export default Details;