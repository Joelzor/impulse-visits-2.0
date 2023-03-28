import { useState } from "react";
import { useMap, TileLayer, Marker, Popup } from "react-leaflet";
import { useSearchContext } from "../context/search";

const NewMap = ({ center, zoom }) => {
  // const { cityCoords, searchResults, currentPlan } = useSearchContext();
  // const [center, setCenter] = useState([51.4975, 0.1357]);
  const map = useMap();
  map.getCenter();
  map.setView(center, zoom);

  // useEffect(() => {
  //   setCenter({ lat: cityCoords[0], lng: cityCoords[1] });
  // }, [cityCoords]);

  return (
    <>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </>
  );
};

export default NewMap;
