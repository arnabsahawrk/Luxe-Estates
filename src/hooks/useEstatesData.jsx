import axios from "axios";
import { useEffect, useState } from "react";

const useEstatesData = () => {
  const [estates, setEstates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const estatesData = async () => {
    try {
      const res = await axios.get("/estates.json");
      const { data } = res;
      setEstates(data);
      setIsLoading(false);
    } catch (err) {
      console.log("Fetch to load estates data:", err);
    }
  };

  useEffect(() => {
    estatesData();
  }, []);
  return { estates, isLoading };
};

export default useEstatesData;
