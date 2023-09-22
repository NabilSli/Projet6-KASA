import React from "react";

import { Card } from "./cards/Cards";
import useHousings from "./useHousings";

// NOTE: this function uses the fetch to either show housings or
//       loading while it get the data or an error if ther is no data
export default function Gallery() {
  const { error, isLoading, housings } = useHousings();

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
