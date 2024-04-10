import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const FunFacts = () => {
  const [countOn, setCountOn] = useState(false);

  return (
    <section className="bg-[#5EA51D] text-white py-10 px-4">
      <ScrollTrigger
        onEnter={() => {
          setCountOn(true);
        }}
        onExit={() => {
          setCountOn(false);
        }}
      >
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-bold text-2xl md:text-3xl lg:text-4xl">
            Some Fun Facts
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                {countOn && (
                  <CountUp start={0} end={2000} duration={3} delay={0} />
                )}
                +
              </h2>
              <p className="text-sm md:text-base font-medium">
                Happy Customers
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                {countOn && (
                  <CountUp start={0} end={5000} duration={3} delay={0} />
                )}
                +
              </h2>
              <p className="text-sm md:text-base font-medium">Properties</p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                {countOn && (
                  <CountUp start={0} end={100} duration={3} delay={0} />
                )}
                +
              </h2>
              <p className="text-sm md:text-base font-medium">Agents</p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                {countOn && (
                  <CountUp start={0} end={50} duration={3} delay={0} />
                )}
                +
              </h2>
              <p className="text-sm md:text-base font-medium">Awards</p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default FunFacts;
