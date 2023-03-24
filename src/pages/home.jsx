import Map from "../components/Map";
import { useLoadScript } from "@react-google-maps/api";

const Home = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <form className="flex justify-center">
        <input
          type="search"
          className="searchbar-small-screen"
          placeholder="Search for a city..."
        />
        <button type="submit" className="btn search-btn-small-screen">
          Search
        </button>
      </form>
      <Map />
    </>
  );
};

export default Home;
