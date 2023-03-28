import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Map from "../components/Map";
import ActivityCard from "../components/ActivityCard";
import { useLoadScript } from "@react-google-maps/api";
import { useSearchContext } from "../context/search";
import compass from "../../public/compass.jpg";
import { MapContainer } from "react-leaflet";
import NewMap from "../components/NewMap";

const Home = () => {
  const [query, setQuery] = useState("");
  const { searchPlaces, searchResults } = useSearchContext();
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
        {/* <Map /> */}
        <MapContainer>
          <NewMap center={[51.4975, 0.1357]} zoom={14} />
        </MapContainer>
        <div>
          <ul className="mt-8 ml-4 md:mt-0 md:ml-0 h-[500px] overflow-y-scroll scrollbar-hide">
            {searchResults.map((result, index) => {
              return <ActivityCard activity={result} key={index} />;
            })}
            {searchResults.length === 0 && (
              <div className="text-center">
                <h2 className="text-3xl">Welcome to Impulse Visits</h2>
                <p className="mt-6 text-gray-500">
                  Search for a city to get started or{" "}
                  <span className="text-green-400">
                    <Link href="/signup">sign up</Link>
                  </span>{" "}
                  here
                </p>
                <Image
                  src={compass}
                  alt="company logo"
                  className="w-auto h-[300px] inline-block mt-8"
                />
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
