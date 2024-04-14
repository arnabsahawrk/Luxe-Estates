import PropTypes from "prop-types";
import DataContexts from "../components/contexts/DataContexts";
import AuthContexts from "../components/contexts/AuthContexts";

const AllProviders = ({ children }) => {
  return (
    <AuthContexts>
      <DataContexts>{children}</DataContexts>
    </AuthContexts>
  );
};

AllProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AllProviders;
