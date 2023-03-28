import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { db } from "../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "../context/auth";

const ActivityCard = ({ activity }) => {
  const { user } = useAuthContext();
  const { kinds, name, xid } = activity;
  const tags = kinds.split(",");
  const tagsFixed = tags.map((tag) => {
    return tag.replaceAll("_", " ");
  });

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
    } else alert("Please log in to save to plans");
  };

  return (
    <div className="flex gap-4">
      <Link href="/activity/[id]" as={`/activity/${xid}`}>
        <li className=" mb-6 p-2 cursor-pointer rounded-lg w-[320px] sm:w-[415px] border bg-gray-100 hover:bg-[#e1e0e0]">
          <h3>{`${name.substring(0, 50)}...`}</h3>
          <p className="mt-2.5 italic">
            <span className="tag">{tagsFixed[0]}</span>{" "}
            <span className="tag">{tagsFixed[1]}</span>{" "}
            <span className="tag">{tagsFixed[2]}</span>
          </p>
        </li>
      </Link>
      <button
        className="self-center rounded-full hover:bg-[#92ddc7] mb-6 overflow-visible"
        title="Add to plans!"
      >
        <AiOutlinePlusCircle
          className="h-6 w-auto text-[#43c59e] hover:text-black"
          onClick={savePlan}
        />
      </button>
    </div>
  );
};

export default ActivityCard;
