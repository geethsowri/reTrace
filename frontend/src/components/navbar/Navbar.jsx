import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import ThemeController from "../ThemeController";
import NavProfile from "./NavProfile";
import SearchBox from "./SearchBox";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-10 bg-[#1a1a1a] text-stone-100 shadow-md flex items-center px-4 md:px-8 h-16">
      
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-6 flex-shrink-0">
        <div className="lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="p-2 rounded-md cursor-pointer hover:bg-[#1a1a1a] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>

        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-semibold select-none"
        >
          <img src={logo} alt="reTrace logo" className="w-10 h-10" />
          <span>reTrace</span>
        </Link>
      </div>

      {/* Center: Nav Links */}
      <div className="flex-grow flex justify-center">
        <ul className="flex gap-6 text-stone-100">
          <NavLinks />
        </ul>
      </div>

      {/* Right: Search + Profile */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="hidden md:block">
          <SearchBox />
        </div>
        <NavProfile />
      </div>
    </nav>
  );
};

export default Navbar;
