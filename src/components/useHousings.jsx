import React, { useEffect, useState } from "react";

// NOTE: preparing API integration by fetching the data with an async function
export default async function useHousings() {
  const [housings, setHousings] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  // TODO: abstarct this into a hook and add .catch for errors
  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      setLoading(true);
      fetch("/data/housingData.json")
        .then((response) => {
          response.json().then((jsonResponse) => {
            setHousings(jsonResponse);
            setLoading(false);
          });
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }

    return () => {
      ignore = true;
    };
  }, []);

  return { isLoading, error, housings };
}
