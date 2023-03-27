import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { La_Belle_Aurore } from "next/font/google";
import { useSearchContext } from "../context/search";
import { useAuthContext } from "../context/auth";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";

const belle = La_Belle_Aurore({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
  const { user, logOut } = useAuthContext();
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { searchPlaces } = useSearchContext();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    searchPlaces(query);
    router.push("/home");
  };

  return (
    <>
      <div className="flex items-center justify-between p-8 sm:px-16 z-[100] w-full lg:mb-8">
        <Link href="/home">
          <h1 className={`${belle.className} text-xl sm:text-3xl pt-4`}>
            Where to visit next?
          </h1>
        </Link>
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
          <Link href="/plans">
            <button className="btn plans-btn hidden lg:block">Plans</button>
          </Link>
          {!user && (
            <>
              <Link href="/login">
                <button className="btn hidden lg:block">Log in</button>
              </Link>
              <Link href="/signup">
                <button className="btn hidden lg:block">Sign up</button>
              </Link>
            </>
          )}
          {user && (
            <button className="btn hidden lg:block" onClick={logOut}>
              Log out
            </button>
          )}
        </div>
        <AiOutlineMenu
          className="block lg:hidden cursor-pointer text-2xl"
          onClick={() => setShowDropdown(true)}
        />
      </div>
      <div
        onClick={() => setShowDropdown(false)}
        className={`fixed top-0 left-0 h-full w-full bg-black/50 grid place-items-center z-10 ${
          showDropdown ? "block" : "hidden"
        }`}
      >
        <div className="bg-white mx-4 w-[50vh] h-[90vh] sm:w-[60vh] text-center flex flex-col justify-center items-center gap-12 z-10">
          <AiFillCloseCircle
            className="text-4xl text-red-500 cursor-pointer"
            onClick={() => setShowDropdown(false)}
          />
          <Link
            href="/home"
            className="text-2xl px-4 py-2 rounded-md transition-all hover:bg-[#43c59e] hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/plans"
            className="text-2xl px-4 py-2 rounded-md transition-all hover:bg-[#43c59e] hover:text-white"
          >
            Plans
          </Link>
          {user && (
            <button
              className="text-2xl px-4 py-2 rounded-md transition-all hover:bg-[#43c59e] hover:text-white"
              onClick={logOut}
            >
              Log out
            </button>
          )}
          {!user && (
            <>
              <Link
                href="/signup"
                className="text-2xl px-4 py-2 rounded-md transition-all hover:bg-[#43c59e] hover:text-white"
              >
                Sign up
              </Link>
              <Link
                href="/login"
                className="text-2xl px-4 py-2 rounded-md transition-all hover:bg-[#43c59e] hover:text-white"
              >
                Log in
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
