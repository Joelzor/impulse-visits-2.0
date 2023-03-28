import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useAuthContext } from "../context/auth";
import PlanCard from "../components/PlanCard";
import PlanMap from "../components/PlanMap";
import { useLoadScript } from "@react-google-maps/api";

const Plans = () => {
  const { user } = useAuthContext();
  const [plans, setPlans] = useState([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
  });

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setPlans(doc.data()?.plans);
    });
  }, [user?.email]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <h2 className="text-3xl text-center">My plans</h2>
      <div className="lg:grid lg:grid-cols-2 gap-10 mt-6">
        <ul className="mt-8 ml-4 md:mt-0 md:ml-0 h-[500px] overflow-y-scroll scrollbar-hide">
          {plans.map((plan) => {
            return (
              <PlanCard key={plan.xid} plan={plan} existingPlans={plans} />
            );
          })}
        </ul>
        <div>
          <PlanMap />
        </div>
      </div>
    </>
  );
};

export default Plans;
