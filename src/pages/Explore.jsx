import { useSelector } from "react-redux";
import { Feed } from "../components";
import { useDocumentTitle } from "../hooks";
import { GiShipWheel } from "../Utils/icons";

function Explore() {
  const allPosts = useSelector((state) => state.appData.posts);

  useDocumentTitle("Explore");

  return (
    <>
      <h1 className="text-white text-center text-base md:text-xl translate-y-2 flex self-center items-center gap-2">
        Explore
        <GiShipWheel />
      </h1>
      <Feed posts={allPosts} />
    </>
  );
}

export default Explore;
