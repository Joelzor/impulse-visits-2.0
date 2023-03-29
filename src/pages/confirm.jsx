import Link from "next/link";

const confirm = () => {
  return (
    <div className="overlay">
      <div className="modal">
        <h3>Plan successfully added!</h3>
        <div className="flex gap-10">
          <Link href="/home">
            <button className="btn confirm-btn">Back home</button>
          </Link>
          <Link href="plans">
            <button className="btn plans-btn">See my plans</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default confirm;
