import { useEffect } from "react";

const useDocumentTitle = (title = "Not Found", deps = []) => {
  useEffect(() => (document.title = `${title} | Trippie`), [...deps]);
};

export default useDocumentTitle;
