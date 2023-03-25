const ActivityCard = ({ activity }) => {
  const { kinds, name, xid } = activity;
  // Splitting string into an array then replacing underscores with space
  const tags = kinds.split(",");
  const tagsFixed = tags.map((tag) => {
    return tag.replaceAll("_", " ");
  });

  return (
    <li className="mb-4 p-2 cursor-pointer rounded-lg w-[415px]  hover:bg-[#e1e0e0]">
      <div>
        <h3>{`${name.substring(0, 50)}...`}</h3>
        <p className="mt-2.5 italic">
          <span className="tag">{tagsFixed[0]}</span>{" "}
          <span className="tag">{tagsFixed[1]}</span>{" "}
          <span className="tag">{tagsFixed[2]}</span>
        </p>
      </div>
    </li>
  );
};

export default ActivityCard;
