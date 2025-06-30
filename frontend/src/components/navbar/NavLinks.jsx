import { Link } from "react-router-dom";
import { House, NotebookTabs, Info } from "lucide-react";

const NavLinks = ({ toggle }) => {
  return (
    <>
      <li className="mt-4 sm:mt-0" onClick={toggle}>
  <Link
    to="/"
    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#323232] transition-colors duration-200"
  >
    <House size={20} />
    Home
  </Link>
</li>
<li onClick={toggle}>
  <Link
    to="/entries"
    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#323232] transition-colors duration-200"
  >
    <NotebookTabs size={20} />
    Your Entries
  </Link>
</li>
<li onClick={toggle}>
  <Link
    to="/about"
    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#323232] transition-colors duration-200"
  >
    <Info size={20} />
    About
  </Link>
</li>

    </>
  );
};

export default NavLinks;
