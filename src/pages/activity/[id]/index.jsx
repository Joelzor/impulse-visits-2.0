/* eslint-disable @next/next/no-img-element */

const Activity = ({ activity }) => {
  console.log(activity);
  return (
    <div className="lg:grid lg:grid-cols-2 gap-10">
      <div>
        <img
          src={activity.preview.source}
          alt={activity.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{activity.name}</h2>
        <p>
          <span>{activity.address.city}</span>,
          <span> {activity.address.country}</span>
        </p>
        <p></p>
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
