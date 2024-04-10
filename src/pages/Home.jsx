import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import HowWorks from "../components/HowWorks/HowWorks";
import Agents from "../components/Agents/Agents";
import FunFacts from "../components/FunFacts.jsx/FunFacts";

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
        <FunFacts />
      </section>
    </>
  );
};

export default Home;
