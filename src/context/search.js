import { createContext, useContext, useState, useEffect } from "react";

const SearchContext = createContext();

const apiKey = process.env.NEXT_PUBLIC_API_KEY_OPEN_TRIP_MAP;
const pageLength = 5; // number of objects per page
let offset = 0; // offset from first object in the list
let count; // total objects count

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [cityCoords, setCityCoords] = useState([]);

  useEffect(() => {
    if (cityCoords.length > 0) {
      apiGet(
        "radius",
        `radius=1000&limit=${pageLength}&offset=${offset}&lon=${cityCoords[1]}&lat=${cityCoords[0]}&rate=2&format=${count}`
      );
    }
  }, [cityCoords]);

  // function given to us by the Open Trip Map API (slightly adjusted)
  function apiGet(method, query) {
    let otmAPI =
      "https://api.opentripmap.com/0.1/en/places/" +
      method +
      "?apikey=" +
      apiKey;
    if (query !== undefined) {
      otmAPI += "&" + query;
    }

    fetch(otmAPI)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setLoading(false);
        if (Array.isArray(data) === false) {
          setCityCoords([data.lat, data.lon]);
        } else {
          setSearchResults(data);
        }
      })
      .catch(function (err) {
        // setLoading(false);
        console.log("Fetch Error :-S", err);
      });
  }

  const searchPlaces = (query) => {
    apiGet("geoname", "name=" + query.toLowerCase());
  };

  const value = {
    searchResults,
    searchPlaces,
    cityCoords,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
