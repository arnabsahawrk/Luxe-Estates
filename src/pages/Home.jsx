import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import HowWorks from "../components/HowWorks/HowWorks";
import Agents from "../components/Agents/Agents";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className="space-y-4 md:space-y-8">
        <Banner />
        <HowWorks />
        <Agents />
      </section>
    </>
  );
};

export default Home;
