import PropTypes from "prop-types";
import DataContexts from "../components/contexts/DataContexts";

const AllProviders = ({ children }) => {
  return <DataContexts>{children}</DataContexts>;
};

AllProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AllProviders;
