import Navbar from "./navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useProfileQuery } from "../redux/api/usersApiSlice";
import { useDispatch } from "react-redux";
import { removeUserInfo, userInfo } from "../redux/features/userSlice";
import Loader from "./Loader";
import NavLinks from "./navbar/NavLinks";
import SearchBox from "./navbar/SearchBox";
import logo from "../assets/logo.svg";

const Layout = () => {
  const { data: profile, isError, isLoading } = useProfileQuery();
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggle = () => setIsDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    if (!isLoading) {
      if (profile) {
        dispatch(userInfo(profile));
      } else if (isError) {
        dispatch(removeUserInfo());
      }
      setIsReady(true);
    }
  }, [profile, dispatch, isError, isLoading]);

  if (!isReady) {
    const theme = localStorage.getItem("theme") || "dark";
    return (
      <div
        data-theme={theme}
        className="flex justify-center items-center min-h-screen bg-[#0e0e0e] text-white"
      >
        <Loader />
      </div>
    );
  }

  return (
    <div className="drawer text-gray-200 bg-[#0e0e0e]">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={toggle}
      />

      <div className="drawer-content flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>

      <div className="drawer-side z-40">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-[#121212] text-white w-80 min-h-full p-6 space-y-4">
          <Link
            to="/"
            onClick={toggle}
            className="flex items-center gap-3 mb-4"
          >
            <img src={logo} alt="logo" className="w-8 h-8" />
            <span className="text-xl font-semibold">reTrace</span>
          </Link>

          <SearchBox toggle={toggle} />
          <NavLinks toggle={toggle} />
        </ul>
      </div>
    </div>
  );
};

export default Layout;
