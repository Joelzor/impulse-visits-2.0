import { AiOutlineMinusCircle } from "react-icons/ai";

const PlanCard = ({ plan }) => {
  const { tags, name, xid } = plan;
  const splitTags = tags.split(",");
  const tagsFixed = splitTags.map((tag) => {
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
        className="self-center rounded-full hover:bg-[#FCB0B0] mb-6 "
        title="Remove from plans!"
      >
        <AiOutlineMinusCircle className="h-6 w-auto text-[#F96262] hover:text-black" />
      </button>
    </div>
  );
};

export default PlanCard;
