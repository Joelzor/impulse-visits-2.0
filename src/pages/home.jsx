import Map from "../components/Map";
import { useLoadScript } from "@react-google-maps/api";

const Home = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <Map />
    </div>
  );
};

export default Home;
