import { CiDollar } from "react-icons/ci";
import { RiHomeHeartLine } from "react-icons/ri";
import { TbHomeSearch } from "react-icons/tb";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const HowWorks = () => {
  return (
    <section className="text-center space-y-4 md:space-y-8">
      <h1
        id="how-it-works"
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5EA51D]"
      >
        How It Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-3 relative">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-delay="500"
          data-aos-anchor="#how-it-works"
          className="flex justify-center items-center flex-col space-y-2 px-4"
        >
          <TbHomeSearch className="text-4xl text-[#5EA51D] font-bold" />
          <h2 className="text-xl text-[#06112A] font-bold">Find Property.</h2>
          <p className="text-sm text-[#848093]">
            Explore, discover, and find your ideal property effortlessly. Our
            user-friendly search tools and extensive database empower you to
            locate the perfect home tailored to your preferences and lifestyle
            needs.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-anchor="#how-it-works"
          className="flex justify-center items-center flex-col space-y-2 px-4"
        >
          <CiDollar className="text-4xl text-[#5EA51D] font-bold" />
          <h2 className="text-xl text-[#06112A] font-bold">Buy Property.</h2>
          <p className="text-sm text-[#848093]">
            Simplify your buying journey with our platform&apos;s intuitive
            interface. Access curated listings, detailed property information,
            and expert guidance to make informed decisions and secure your dream
            property hassle-free.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          data-aos-delay="1000"
          data-aos-anchor="#how-it-works"
          className="flex justify-center items-center flex-col md:col-span-2 lg:col-auto space-y-2 px-4"
        >
          <RiHomeHeartLine className="text-4xl text-[#5EA51D] font-bold" />
          <h2 className="text-xl text-[#06112A] font-bold">Make Investment.</h2>
          <p className="text-sm text-[#848093]">
            Seize exclusive investment opportunities in luxury real estate.
            Benefit from insider access to premium listings and personalized
            advice to grow your portfolio and achieve your financial goals with
            confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
