import { createContext } from "react";
import useAgentsData from "../../hooks/useAgentsData";
import PropTypes from "prop-types";
import useEstatesData from "../../hooks/useEstatesData";

export const DataContext = createContext(null);
const DataContexts = ({ children }) => {
  const { agents } = useAgentsData();
  const { estates, isLoading } = useEstatesData();

  const allData = {
    agents,
    estates,
    isLoading,
  };
  return (
    <DataContext.Provider value={allData}>{children}</DataContext.Provider>
  );
};

DataContexts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContexts;
