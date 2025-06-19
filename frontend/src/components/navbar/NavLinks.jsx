import { Link } from "react-router-dom";
import { House, NotebookTabs, Info } from "lucide-react";

const NavLinks = ({ toggle }) => {
  return (
    <>
      <li onClick={toggle}>
        <Link to="/">
          <House size={20} />
          Home
        </Link>
      </li>
      <li onClick={toggle}>
        <Link to="/entries">
          <NotebookTabs size={20} />
          Your Entries
        </Link>
      </li>
      <li onClick={toggle}>
        <Link to="/about">
          <Info size={20} />
          About
        </Link>
      </li>
    </>
  );
};
export default NavLinks;