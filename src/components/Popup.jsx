import Link from "next/link";

const Popup = ({ data }) => {
  return (
    <div className="h-16 w-[250px] bg-white absolute bottom-2 left-2 rounded-lg flex flex-col justify-center items-center text-sm border-4 border-[#43c59e]">
      <p>{data.name}</p>
      <Link
        href="/activity/[id]"
        as={`/activity/${data.xid}`}
        className="text-blue-400"
      >
        View
      </Link>
    </div>
  );
};

export default Popup;
