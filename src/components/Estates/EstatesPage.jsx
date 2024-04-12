import useData from "../../hooks/useData";
import EstateCard from "./EstateCard";

const EstatesPage = () => {
  const { estates } = useData();

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
      </div>
    </section>
  );
};

export default EstatesPage;
