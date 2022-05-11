import { Link } from "react-router-dom";

function TopBar() {
  return (
    <nav className="p-1 bg-gray-800 w-full ">
      <Link to="/">
        <img
          className="w-28 ml-8 ease-in duration-200 text-3xl hover:scale-110 hover:cursor-pointer"
          src="https://res.cloudinary.com/carsmart/image/upload/v1652088857/Trippie/trippie_2_q0subn.png"
          alt="Trippie Logo"
        />
      </Link>
    </nav>
  );
}

export default TopBar;
