import { AiOutlinePlusCircle } from "react-icons/ai";

const ActivityCard = ({ activity }) => {
  const { kinds, name, xid } = activity;
  // Splitting string into an array then replacing underscores with space
  const tags = kinds.split(",");
  const tagsFixed = tags.map((tag) => {
    return tag.replaceAll("_", " ");
  });

  return (
    <div className="flex gap-4">
      <li className=" mb-6 p-2 cursor-pointer rounded-lg w-[415px] border bg-gray-100 hover:bg-[#e1e0e0]">
        <h3>{`${name.substring(0, 50)}...`}</h3>
        <p className="mt-2.5 italic">
          <span className="tag">{tagsFixed[0]}</span>{" "}
          <span className="tag">{tagsFixed[1]}</span>{" "}
          <span className="tag">{tagsFixed[2]}</span>
        </p>
      </li>
      <button
        className="self-center rounded-full hover:bg-[#92ddc7] mb-6"
        title="Add to plans!"
      >
        <AiOutlinePlusCircle className="h-6 w-auto text-[#43c59e] hover:text-black" />
      </button>
    </div>
  );
};

export default ActivityCard;
