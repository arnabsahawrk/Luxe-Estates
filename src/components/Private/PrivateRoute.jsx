import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <Spinner />;
  else if (user) return children;

  return <Navigate state={location.pathname} to="/signIn" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
