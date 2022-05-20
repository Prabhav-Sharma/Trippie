import { NavLink } from "react-router-dom";
import {
  GiShipWheel,
  GiPlagueDoctorProfile,
  BsFillBookmarkCheckFill,
  AiFillHome,
  BsBellFill,
} from "../Utils/icons";

function SideNav() {
  const tabStyles =
    "flex flex-row gap-2 text-xl items-center ease-linear duration-100 text-white hover:text-blue-500 sm:hover:bg-white p-1.5 rounded-md";

  const activeStyles = "text-blue-500 bg-white";
  return (
    <aside className="fixed bottom-0 border-t-2 p-4 w-full z-10 bg-gray-800 border-blue-500 sm:border-slate-400 sm:border-l-0 sm:border sm:gap-10 flex flex-row font-robotoFlex sm:rounded-md lg:mt-2 justify-around sm:flex-col sm:static sm:bottom-none sm:w-max sm:justify-start lg:items-start lg:w-64 lg:h-max lg:ml-1 lg:border-none ">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `  ${isActive && activeStyles} ${tabStyles}`
        }
      >
        <AiFillHome />
        <span className="hidden text-base lg:inline">Home</span>
      </NavLink>
      <NavLink
        to="/bookmarks"
        className={({ isActive }) =>
          `  ${isActive && activeStyles} ${tabStyles}`
        }
      >
        <BsFillBookmarkCheckFill className="text-lg" />
        <span className="hidden text-base lg:inline"> Bookmarks</span>
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          `  ${isActive && activeStyles} ${tabStyles}`
        }
      >
        <GiShipWheel />
        <span className="hidden text-base lg:inline">Explore</span>
      </NavLink>
      <NavLink
        to="/alerts"
        className={({ isActive }) =>
          `  ${isActive && activeStyles} ${tabStyles}`
        }
      >
        <BsBellFill />
        <span className="hidden text-base lg:inline"> Alerts</span>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `  ${isActive && activeStyles} ${tabStyles}`
        }
      >
        <GiPlagueDoctorProfile />
        <span className="hidden text-base lg:inline">Profile</span>
      </NavLink>
    </aside>
  );
}

export default SideNav;
