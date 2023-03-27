import { useState, useEffect } from "react";
import { GoogleMap, Marker, MarkerLabel } from "@react-google-maps/api";
import { useSearchContext } from "../context/search";

const Map = () => {
  const { cityCoords, searchResults } = useSearchContext();
  const [center, setCenter] = useState({ lat: 51.4975, lng: 0.1357 });

  useEffect(() => {
    setCenter({ lat: cityCoords[0], lng: cityCoords[1] });
  }, [cityCoords]);

  return (
    <GoogleMap
      zoom={12}
      center={center}
      mapContainerClassName="w-full h-[500px]"
    >
      {searchResults.map((activity) => {
        const { point } = activity;
        const markerCentre = { lat: point.lat, lng: point.lon };
        return (
          <Marker
            position={markerCentre}
            key={activity.xid}
            title={activity.name}
          />
        );
      })}
    </GoogleMap>
  );
};

export default Map;
