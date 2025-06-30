import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  CircleUserRound,
  LogOut,
  LockKeyhole,
  ChevronDown,
} from "lucide-react";
import ModalLayout from "../ModalLayout";
import { useState, useRef, useEffect } from "react";
import Profile from "../auth/Profiles";
import Password from "../auth/Password";
import Logout from "../auth/Logout";

const NavProfile = () => {
  const user = useSelector((state) => state.user);
  const [openProfile, setOpenProfile] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) {
    return (
      <div className="flex gap-3">
        <Link
          to="/signup"
          className="hidden lg:inline-block px-4 py-2 rounded-md border border-[#1a1a1a] text-gray-300 hover:bg-[#1a1a1a] transition"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="px-4 py-2 rounded-md bg-[#1a1a1a] text-gray-100 hover:bg-[#1a1a1a] transition"
        >
          Log In
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#242424] text-gray-100 hover:bg-[#323232]  transition"
        >
          {user.data.firstName}
          <ChevronDown size={20} />
        </button>

        {dropdownOpen && (
          <ul
            className="absolute right-0 mt-6 w-52 bg-[#242424] border border-gray-700 rounded-md shadow-lg z-50"
            role="menu"
            aria-label="User menu"
          >
            <li>
              <button
                onClick={() => {
                  setOpenProfile(true);
                  setDropdownOpen(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-gray-100 hover:bg-[#1a1a1a] focus:outline-none"
                role="menuitem"
              >
                <CircleUserRound size={20} />
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setOpenPassword(true);
                  setDropdownOpen(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-gray-100 hover:bg-[#1a1a1a] focus:outline-none"
                role="menuitem"
              >
                <LockKeyhole size={20} />
                Change Password
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setOpenLogout(true);
                  setDropdownOpen(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-red-500 hover:bg-red-900 focus:outline-none"
                role="menuitem"
              >
                <LogOut size={20} />
                Log out
              </button>
            </li>
          </ul>
        )}
      </div>

      <ModalLayout isOpen={openProfile} close={() => setOpenProfile(false)}>
        <Profile close={() => setOpenProfile(false)} />
      </ModalLayout>

      <ModalLayout isOpen={openPassword} close={() => setOpenPassword(false)}>
        <Password close={() => setOpenPassword(false)} />
      </ModalLayout>

      <ModalLayout isOpen={openLogout} close={() => setOpenLogout(false)}>
        <Logout close={() => setOpenLogout(false)} />
      </ModalLayout>
    </>
  );
};

export default NavProfile;
