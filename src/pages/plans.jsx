import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useAuthContext } from "../context/auth";
import PlanCard from "../components/PlanCard";
import Map from "../components/Map";

const Plans = () => {
  const { user } = useAuthContext();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setPlans(doc.data()?.plans);
    });
  }, [user?.email]);

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
          <Map />
        </div>
      </div>
    </>
  );
};

export default Plans;
