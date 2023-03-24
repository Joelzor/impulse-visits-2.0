import { La_Belle_Aurore } from "next/font/google";

const belle = La_Belle_Aurore({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
  return (
    <div className="flex items-center justify-between p-8 sm:px-16 z-[100] absolute w-full">
      <h1 className={`${belle.className} text-xl sm:text-3xl pt-4`}>
        Where to visit next?
      </h1>
      <div className="flex gap-8">
        <form>
          <input
            type="search"
            className="searchbar"
            placeholder="Search for a city..."
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
