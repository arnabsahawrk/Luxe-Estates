import { Carousel } from "@material-tailwind/react";
import AgentsCard from "./AgentsCard";
import useData from "../../hooks/useData";

const Agents = () => {
  const { agents } = useData();

  return (
    <section className="text-center space-y-4 container mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5EA51D]">
        Our Agents
      </h1>
      <p className="text-[#06112A] text-xs md:text-lg max-w-[600px] px-4 mx-auto">
        Meet Our Team of Experienced and Dedicated Real Estate Agents Ready to
        Guide You Through Your Property Journey
      </p>

      {/* Agents Display */}
      <Carousel transition={{ duration: 2 }} autoplay={true} loop={true}>
        {agents.map((agent) => (
          <AgentsCard key={agent.id} agent={agent} />
        ))}
      </Carousel>
    </section>
  );
};

export default Agents;
