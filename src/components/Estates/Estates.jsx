import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
import EstateCard from "./EstateCard";

const Estates = () => {
  const { estates: allEstates } = useData();
  const estates = allEstates?.slice(0, 4);

  return (
    <section>
      <div className="container mx-auto space-y-4 ">
        <h1
          id="featured-estates"
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5EA51D] text-center"
        >
          Featured Estates
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {estates.map((estate, idx) => (
            <EstateCard key={estate.id} estate={estate} idx={idx} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/estates">
            <button
              rel="noopener noreferrer"
              className="px-2 md:px-4 py-1 md:py-2 font-semibold text-xs md:text-base bg-[#5EA51D] rounded-lg transition duration-300 ease-in-out hover:bg-[#06112A] animate__animated animate__slideInUp text-white mx-auto"
            >
              View All Estates
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Estates;
