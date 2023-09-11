import React, { useState, useEffect } from "react";

import { Card } from "./cards/Cards";
import GetData from "././getData";

// TODO: add this and a proper loading view
//  export default function Gallery() {
//   const [housings, setHousings] = useState(null);
//   const [error, setError] = useState(false);
//   const [isLoading, setLoading] = useState(false);
//   useEffect(() => {
//     let ignore = false;
//     setLoading(true);
//     getHousing().then((result) => {
//       setLoading(false);
//       if (!ignore) {
//         if (typeof result == "object") {
//           setHousings(result);
//         } else {
//           setError("Je ne trouve aucun logement a afficher");
//         }
//       }
//     });
//     return () => {
//       ignore = true;
//     };
//    }, [])

// NOTE: using useEffect to catch errors of fetch and have an error message show up for better UI
export default function Gallery() {
  const [housings, setHousings] = useState(null);
  const [error, setError] = useState(false);

  // TODO: abstarct this into a hook and add .catch for errors
  useEffect(() => {
    let ignore = false;
    GetData().then((result) => {
      if (!ignore) {
        if (typeof result == "object") {
          setHousings(result);
        } else {
          setError("Je ne trouve aucun logement a afficher");
        }
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!housings) return <p>Loading ...</p>;

  return (
    <section className="gallery">
      {housings.map((house) => (
        <Card title={house.title} key={house.id} image={house.cover} />
      ))}
    </section>
  );
}
