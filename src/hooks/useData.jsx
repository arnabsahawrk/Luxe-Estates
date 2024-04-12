import { useContext } from "react";
import { DataContext } from "../components/contexts/DataContexts";

const useData = () => {
  const allData = useContext(DataContext);
  return allData;
};

export default useData;
