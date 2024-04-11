import { Link } from "react-router-dom";

const BrowseAway = () => {
  return (
    <section className="container mx-auto py-8 md:py-10 lg:py-12 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="md:w-1/2 space-y-3 text-center md:text-left">
        <div className="text-[#06112A] font-bold text-2xl md:text-3xl space-y-2">
          <h2>Just browse away.</h2>
          <h2>It’s all here.</h2>
        </div>
        <div className="text-[#848093] font-medium text-sm md:text-base space-y-2">
          <p>
            Explore Luxe Estates’ extensive listings with ease. Your ideal
            property is just a click away.
          </p>
          <p>
            At Luxe Estates, we’ve got it all. From luxury penthouses to
            beachfront villas, find your perfect property here.
          </p>
        </div>
        <button
          rel="noopener noreferrer"
          className="px-2 md:px-4 py-1 md:py-2 font-semibold text-xs md:text-base bg-[#5EA51D] rounded-lg transition duration-300 ease-in-out hover:bg-[#06112A] animate__animated animate__slideInUp text-white"
        >
          <Link to="/estates">All Estates</Link>
        </button>
      </div>
      <div className="md:w-1/2">
        <img
          className="w-full object-cover"
          src="https://i.postimg.cc/Cxz3BV47/browse-Away.jpg"
        />
      </div>
    </section>
  );
};

export default BrowseAway;
