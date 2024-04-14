import { useContext } from "react";
import { AuthContext } from "../components/contexts/AuthContexts";

const useAuth = () => {
  const allAuth = useContext(AuthContext);
  return allAuth;
};

export default useAuth;
