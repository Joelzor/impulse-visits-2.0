import { useState, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useSearchContext } from "../context/search";

const Map = () => {
  const { cityCoords, searchResults, currentPlan } = useSearchContext();
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
      {currentPlan && (
        <Marker
          position={{
            lat: currentPlan.coords.lat,
            lng: currentPlan.coords.lon,
          }}
          key={currentPlan.id}
        />
      )}
      {searchResults.length > 0 &&
        searchResults.map((activity) => {
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
