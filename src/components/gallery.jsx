import React from "react";

import { Card } from "./cards/Cards";
import useHousings from "./useHousings";

// NOTE: using useEffect to catch errors of fetch and have an error message show up for better UI
export default function Gallery() {
  const { error, housings, isLoading } = useHousings();

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (!housings || !housings.length) {
    return <p>Aucun logements a afficher</p>;
  }

  return (
    <section className="gallery">
      {housings.map((house) => (
        <Card title={house.title} key={house.id} image={house.cover} />
      ))}
    </section>
  );
}
