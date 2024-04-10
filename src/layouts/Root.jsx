import { Outlet } from "react-router-dom";
import Nav from "../components/Shared/Nav";
import Footer from "../components/Shared/Footer";
import { useEffect, useState } from "react";
import Spinner from "../components/Shared/Spinner";

const Root = () => {
  //Display Spinner
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    const clear = setTimeout(() => {
      setSpinner(false);
    }, 2000);
    return () => clearTimeout(clear);
  }, []);

  return (
    <>
      {spinner ? (
        <Spinner />
      ) : (
        <main className="text-pretty">
          <Nav />
          <Outlet />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Root;
