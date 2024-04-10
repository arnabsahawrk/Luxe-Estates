import axios from "axios";
import { useEffect, useState } from "react";

const useAgentsData = () => {
  const [agents, setAgents] = useState([]);

  const agentsData = async () => {
    try {
      const res = await axios.get("/agents.json");
      const { data } = res;
      setAgents(data);
    } catch (err) {
      console.log("Failed to fetch agents data ", err);
    }
  };

  useEffect(() => {
    agentsData();
  }, []);
  return { agents };
};

export default useAgentsData;
