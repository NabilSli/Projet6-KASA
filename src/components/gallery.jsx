import React, { useState, useEffect } from "react";

import { Card } from "./cards/Cards";

async function getHousing() {
  try {
    const fetchResponse = await fetch("/data/housingData.json");
    const response = await fetchResponse.json();
    return response;
  } catch (error) {
    console.error();
    return null;
  }
}

export default function Gallery() {
  const [housings, setHousings] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;
    getHousing().then((result) => {
      if (!ignore) {
        if (typeof result == "object") {
          setHousings(result);
        } else {
          setError("Je ne trouve aucun logement a afficher");
        }
      }
    });

    console.log(housings);
    console.log(error);

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section className="gallery">
      <Card title="Titre de la location" link="#" />
    </section>
  );
}
