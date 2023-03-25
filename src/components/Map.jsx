import { useState, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useSearchContext } from "../context/search";

const Map = () => {
  const { cityCoords } = useSearchContext();
  const [center, setCenter] = useState({ lat: 44, lng: -80 });

  useEffect(() => {
    setCenter({ lat: cityCoords[0], lng: cityCoords[1] });
  }, [cityCoords]);

  return (
    <GoogleMap
      zoom={12}
      center={center}
      mapContainerClassName="w-full h-[500px]"
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
