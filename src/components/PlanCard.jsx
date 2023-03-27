import { AiOutlineMinusCircle } from "react-icons/ai";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "../context/auth";
import { useSearchContext } from "../context/search";

const PlanCard = ({ plan, existingPlans }) => {
  const { user } = useAuthContext();
  const { currentPlan, setCurrentPlan } = useSearchContext();
  const { tags, name, id } = plan;
  const splitTags = tags.split(",");
  const tagsFixed = splitTags.map((tag) => {
    return tag.replaceAll("_", " ");
  });

  const planRef = doc(db, "users", `${user?.email}`);

  const deletePlan = async (id) => {
    try {
      const result = existingPlans.filter(
        (currentPlan) => currentPlan.id !== id
      );
      await updateDoc(planRef, {
        plans: result,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const highlightPlan =
    currentPlan && currentPlan.id === plan.id ? "bg-[#43c59e]" : "bg-gray-100";

  return (
    <div className="flex gap-4">
      <li
        className={`mb-6 p-2 cursor-pointer rounded-lg w-[415px] border ${highlightPlan}`}
        onClick={() => setCurrentPlan(plan)}
      >
        <h3>{`${name.substring(0, 50)}...`}</h3>
        <p className="mt-2.5 italic">
          <span className="tag">{tagsFixed[0]}</span>{" "}
          <span className="tag">{tagsFixed[1]}</span>{" "}
          <span className="tag">{tagsFixed[2]}</span>
        </p>
      </li>
      <button
        className="self-center rounded-full hover:bg-[#FCB0B0] mb-6 "
        title="Remove from plans!"
        onClick={() => deletePlan(id)}
      >
        <AiOutlineMinusCircle className="h-6 w-auto text-[#F96262] hover:text-black" />
      </button>
    </div>
  );
};

export default PlanCard;
