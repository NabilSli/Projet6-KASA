import React from "react";

import { useParams } from "react-router-dom";
import Carousel from "../components/houses/caroussel";
import useHousings from "../components/useHousings";
import TitleAndLocation from "../components/houses/titleAndLocation";
import DisplayTags from "../components/houses/tags";
import DisplayHost from "../components/houses/host";
import Collapse from "../components/collapse";

export default function HousingPage() {
  const { id } = useParams();
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

  // TODO: merge this with "useHousings" function hook a "useHousingById" hook
  const currentHousing = housings.find((house) => house.id === id);
  const tags = currentHousing.tags;
  const host = currentHousing.host;
  const description = currentHousing.description;
  const equipments = currentHousing.equipments;

  return (
    <section>
      <Carousel id={id} pictures={currentHousing.pictures} />
      <TitleAndLocation
        id={id}
        title={currentHousing.title}
        location={currentHousing.location}
      />
      <ul>
        {tags.map((tag) => (
          <>
            <DisplayTags tags={tag} />
          </>
        ))}
      </ul>
      <DisplayHost name={host.name} portait={host.picture} />
      <div className="housingsCollapse">
        <Collapse collapseTitle="Description" collapseTexte={description} />
        <Collapse
          collapseTitle="Équipements"
          collapseTexte={
            <ul>
              {equipments.map((equipment) => (
                <>
                  <li>{equipment}</li>
                </>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  );
}
