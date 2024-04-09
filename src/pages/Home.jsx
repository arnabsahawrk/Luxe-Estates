import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <Banner />
      </section>
    </>
  );
};

export default Home;
