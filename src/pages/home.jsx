import { useState } from "react";
import Map from "../components/Map";
import { useLoadScript } from "@react-google-maps/api";
import { useSearchContext } from "../context/search";

const Home = () => {
  const [query, setQuery] = useState("");
  const { searchPlaces } = useSearchContext();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  const handleSubmit = (e) => {
    e.preventDefault();

    searchPlaces(query);
  };

  return (
    <>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <input
          type="search"
          className="searchbar-small-screen"
          placeholder="Search for a city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn search-btn-small-screen">
          Search
        </button>
      </form>
      <div className="lg:grid lg:grid-cols-2 gap-10">
        <Map />
        <div>hello there</div>
      </div>
    </>
  );
};

export default Home;
