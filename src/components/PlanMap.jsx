import { GoogleMap, Marker } from "@react-google-maps/api";
import { useSearchContext } from "../context/search";

const PlanMap = () => {
  const { currentPlan } = useSearchContext();

  return (
    <GoogleMap
      zoom={14}
      center={{
        lat: currentPlan?.coords.lat,
        lng: currentPlan?.coords.lon,
      }}
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
    </GoogleMap>
  );
};

export default PlanMap;
