import { useEffect, useState } from "react";

// NOTE: preparing API integration by fetching the data with an async function
export default function useHousings() {
  const [housings, setHousings] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      setLoading(true);
      fetch("/data/housingData.json")
        .then((response) => {
          return response.json();
        })
        .then((jsonResponse) => {
          setHousings(jsonResponse);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    return () => {
      ignore = true;
    };
  }, []);

  return { isLoading, error, housings };
}
