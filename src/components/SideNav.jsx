import { NavLink } from "react-router-dom";
import {
  GiShipWheel,
  GiPlagueDoctorProfile,
  BsBookmark,
  AiOutlineHome,
  BsBell,
} from "../Utils/icons";

function SideNav() {
  const tabStyles =
    "flex flex-row gap-2 text-white text-xl items-center hover:text-blue-400";
  return (
    <aside className="fixed bottom-0 border-t-2 p-4 w-full z-10 bg-gray-800 border-blue-500 sm:border-slate-400 sm:border-l-0 sm:border sm:gap-10 flex flex-row font-robotoFlex sm:rounded-md lg:mt-2 justify-around sm:flex-col sm:static sm:bottom-none sm:w-max sm:justify-start lg:items-start lg:w-64 lg:h-max lg:ml-1 lg:border-none ">
      <NavLink to="/home" className={`${tabStyles}`}>
        <AiOutlineHome />
        <span className="hidden text-base lg:inline">Home</span>
      </NavLink>
      <NavLink to="/login" className={`${tabStyles}`}>
        <BsBookmark />
        <span className="hidden text-base lg:inline"> Bookmarks</span>
      </NavLink>
      <NavLink to="/home" className={`${tabStyles}`}>
        <GiShipWheel />
        <span className="hidden text-base lg:inline">Explore</span>
      </NavLink>
      <NavLink to="/home" className={`${tabStyles}`}>
        <BsBell />
        <span className="hidden text-base lg:inline"> Notifications</span>
      </NavLink>
      <NavLink to="/home" className={`${tabStyles}`}>
        <GiPlagueDoctorProfile />
        <span className="hidden text-base lg:inline">Profile</span>
      </NavLink>
    </aside>
  );
}

export default SideNav;
