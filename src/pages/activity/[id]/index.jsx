/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { db } from "../../../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "../../../context/auth";

const Activity = ({ activity }) => {
  const { user } = useAuthContext();
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

  const userId = doc(db, "users", `${user?.email}`);

  const savePlan = async () => {
    if (user) {
      await updateDoc(userId, {
        plans: arrayUnion({
          id: activity.xid,
          name: activity.name,
          tags: activity.kinds,
          coords: activity.point,
        }),
      });
      router.push("/confirm");
    } else alert("Please log in to save to plans");
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
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{activity.name}</h2>
          <button
            className="mt-1 rounded-full hover:bg-[#92ddc7] mb-6"
            title="Add to plans!"
          >
            <AiOutlinePlusCircle
              className="h-6 w-auto text-[#43c59e] hover:text-black"
              onClick={savePlan}
            />
          </button>
        </div>
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

        <button
          className="btn confirm-btn mt-8 w-16"
          onClick={backToActivities}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Activity;

const apiKey = process.env.NEXT_PUBLIC_API_KEY_OPEN_TRIP_MAP;

export const getServerSideProps = async (context) => {
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
