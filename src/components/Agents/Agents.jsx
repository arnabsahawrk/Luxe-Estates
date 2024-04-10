import AgentsCard from "./AgentsCard";

const Agents = () => {
  return (
    <section className="text-center space-y-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5EA51D]">
        Our Agents
      </h1>
      <p className="text-[#06112A] ">
        Meet Our Team of Experienced and Dedicated Real Estate Agents <br />
        Ready to Guide You Through Your Property Journey
      </p>
      <AgentsCard />
    </section>
  );
};

export default Agents;
