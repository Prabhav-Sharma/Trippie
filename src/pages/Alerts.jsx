import { useDocumentTitle } from "../hooks";
import { BsBellFill } from "../Utils/icons";

function Alerts() {
  useDocumentTitle("Alerts");
  return (
    <>
      <h1 className="text-white text-center text-base md:text-xl translate-y-2 flex self-center items-center gap-2">
        Alerts
        <BsBellFill />
      </h1>
      <h2 className="self-center text-white my-4">
        Feature yet to be implemented! Stay tuned.
      </h2>
    </>
  );
}

export default Alerts;
