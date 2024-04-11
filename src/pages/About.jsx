import { Helmet } from "react-helmet-async";
import HowWorks from "../components/HowWorks/HowWorks";
import Agents from "../components/Agents/Agents";
import FunFacts from "../components/FunFacts.jsx/FunFacts";
import AboutBanner from "../components/Banner/AboutBanner";
import BrowseAway from "../components/BrowseAway/BrowseAway";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <section className="space-y-4 md:space-y-8">
        <AboutBanner />
        <BrowseAway />
        <HowWorks />
        <Agents />
        <FunFacts />
      </section>
    </>
  );
};

export default About;
