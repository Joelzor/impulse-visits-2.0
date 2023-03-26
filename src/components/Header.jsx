import { useState } from "react";
import { useRouter } from "next/navigation";
import { La_Belle_Aurore } from "next/font/google";
import { useSearchContext } from "../context/search";

const belle = La_Belle_Aurore({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
  const [query, setQuery] = useState("");
  const { searchPlaces } = useSearchContext();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    searchPlaces(query);
    router.push("/home");
  };

  return (
    <div className="flex items-center justify-between p-8 sm:px-16 z-[100] w-full lg:mb-8">
      <h1 className={`${belle.className} text-xl sm:text-3xl pt-4`}>
        Where to visit next?
      </h1>
      <div className="flex gap-8">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="searchbar"
            placeholder="Search for a city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="btn search-btn">
            Search
          </button>
        </form>
        <button className="btn plans-btn">Plans</button>
      </div>
    </div>
  );
};

export default Header;
