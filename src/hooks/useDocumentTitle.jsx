import { useEffect } from "react";

const useDocumentTitle = (title = "Not Found") => {
  useEffect(() => (document.title = `${title} | Trippie`), []);
};

export default useDocumentTitle;
