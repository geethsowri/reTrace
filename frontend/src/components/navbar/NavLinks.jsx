import { Link } from "react-router-dom";
import { FaHome, FaBookOpen, FaInfo } from "react-icons/fa";
import { Home, Book, Info } from "lucide-react";

const NavLinks = ({ toggle }) => {
  return (
    <>
      <li onClick={toggle}>
        <Link to="/">
          <Home className="w-5 h-5" />
          Home
        </Link>
      </li>
      <li onClick={toggle}>
        <Link to="/entries">
          <Book className="w-5 h-5" />
          Your Entries
        </Link>
      </li>
      <li onClick={toggle}>
        <Link to="/about">
          <Info className="w-5 h-5" />
          About
        </Link>
      </li>
    </>
  );
};
export default NavLinks;
