import { Typography } from "@material-tailwind/react";
import { IoIosArrowDropright } from "react-icons/io";
import { NavLink } from "react-router-dom";

const EstatesBanner = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat h-[250px]"
      style={{
        backgroundImage: `url('https://i.postimg.cc/dQnRdRvj/Estates-Banner.jpg')`,
      }}
    >
      <div className="container mx-auto flex flex-col justify-center items-center gap-3 h-full">
        <ul className="flex gap-2">
          <Typography
            as="li"
            variant="paragraph"
            color="blue-gray"
            className="font-bold hover:text-white text-[#848093] text-lg md:text-xl"
          >
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                `${isActive ? "text-white" : ""} ${isPending ? "text-red-700" : ""} flex items-center gap-1`
              }
            >
              Home <IoIosArrowDropright />
            </NavLink>
          </Typography>
          <Typography
            as="li"
            variant="paragraph"
            color="blue-gray"
            className="font-bold hover:text-white text-[#848093] text-lg md:text-xl"
          >
            <NavLink
              to="/estates"
              className={({ isActive, isPending }) =>
                `${isActive ? "text-white" : ""} ${isPending ? "text-red-700" : ""} flex items-center gap-1`
              }
            >
              Estates <IoIosArrowDropright />
            </NavLink>
          </Typography>
        </ul>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          All Estates
        </h1>
      </div>
    </section>
  );
};

export default EstatesBanner;
