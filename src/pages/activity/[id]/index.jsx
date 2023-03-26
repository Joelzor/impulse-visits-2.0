/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Activity = ({ activity }) => {
  const [url, setUrl] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (activity.url) {
      const urlArray = activity.url.split(";");
      setUrl(urlArray[0]);
    }
  }, [activity.url]);

  const backToActivities = () => {
    router.push("/home");
  };

  return (
    <div className="lg:grid lg:grid-cols-2 gap-10">
      <div className="h-[500px]">
        <img
          src={activity?.preview?.source}
          alt={activity.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{activity.name}</h2>
        <p>
          <span>{activity.address?.city}</span>,
          <span> {activity.address?.country}</span>
        </p>
        <p className="text-sm">{activity?.wikipedia_extracts?.text}</p>
        {url && (
          <p>
            <span className="font-bold mr-4">Location website:</span>
            <a href={url} className="text-sky-700" target="_blank">
              {url}
            </a>
          </p>
        )}

        <button className="btn confirm-btn mt-8" onClick={backToActivities}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Activity;

const apiKey = process.env.NEXT_PUBLIC_API_KEY_OPEN_TRIP_MAP;

export const getServerSideProps = async (context) => {
  // apiGetInfo("xid/" + context.params.id);
  let otmAPI =
    "https://api.opentripmap.com/0.1/en/places/" +
    `xid/${context.params.id}` +
    "?apikey=" +
    apiKey;

  const response = await fetch(otmAPI);
  const activity = await response.json();

  return {
    props: {
      activity,
    },
  };
};
