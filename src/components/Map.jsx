import { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import mapStyles from "../styles/Map.module.css";

const Map = () => {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName={mapStyles.container}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
