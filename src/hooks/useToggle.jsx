import { useState } from "react";

function useToggle(intialValue = false) {
  const [toggle, setToggle] = useState(intialValue);

  return { toggle, setToggle };
}

export default useToggle;
