import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import NavProfile from "./NavProfile";
import SearchBox from "./SearchBox";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-[#1a1a1a] w-full sticky top-0 z-10">
      <div className="navbar-start">
        <div className="lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <Link className="btn btn-ghost text-xl pl-0" to="/">
          <img className="w-10 h-10" src={logo} alt="logo" />
          reTrace
        </Link>
      </div>

      <div className="navbar-center hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          <NavLinks />
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <div className="hidden md:flex">
          <SearchBox />
        </div>
        <NavProfile />
      </div>
    </div>
  );
};
export default Navbar;