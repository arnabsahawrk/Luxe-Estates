import { Outlet } from "react-router-dom";
import Nav from "../components/Shared/Nav";
import Footer from "../components/Shared/Footer";

const Root = () => {
  return (
    <main>
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Root;
