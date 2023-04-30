import { useEffect, useState } from "react";
import { BASE_API } from "../config";

const useTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch(`${BASE_API}/tool`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return [tools];
};

export default useTools;
