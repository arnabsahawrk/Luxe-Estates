import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useData from "../hooks/useData";
import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegBuilding } from "react-icons/fa";

const EstateDetails = () => {
  const { id } = useParams();
  const { estates, isLoading } = useData();
  const [estate, setEstate] = useState({});

  useEffect(() => {
    if (!isLoading) {
      const matchingData = estates.find((estate) => estate.id === id);
      setEstate(matchingData);
    }
  }, [estates, id, isLoading]);

  const {
    estate_title,
    segment_name,
    image,
    price,
    status,
    area,
    location,
    description,
    facilities,
  } = estate;

  return (
    <>
      <Helmet>
        <title>{estate_title}</title>
      </Helmet>
      <section className="space-y-4 md:space-y-8">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="cursor-pointer rounded p-2 border border-gray-400 flex flex-col lg:flex-row gap-2 m-2 ">
            <div className="lg:w-1/2">
              <img
                className="object-cover size-full rounded"
                src={image}
                alt={estate_title}
              />
            </div>
            <div className="lg:w-1/2 space-y-2 text-[#848093] text-lg">
              <h2 className="text-[#06112A] font-bold text-2xl">
                {estate_title}
              </h2>
              <p className="font-medium">{description}</p>
              <p className="underline">Price</p>
              <p>
                <span className="text-[#5EA51D]  p-1 rounded font-bold text-xl">
                  {price}
                </span>
              </p>
              <p className="underline">Facilities</p>
              <ul className="list-disc ml-4">
                {facilities?.map((facility, idx) => (
                  <li key={idx}>{facility}</li>
                ))}
              </ul>
              <ul className="flex items-center justify-between">
                <li>{segment_name}</li>
                <li
                  className={`${
                    status === "sale" ? "bg-[#5EA51D]" : "bg-[#06112A]"
                  } text-white m-2 p-1 rounded text-sm`}
                >
                  {status
                    ? status[0].toUpperCase() + status.slice(1).toLowerCase()
                    : "Status Unavailable"}
                </li>
              </ul>
              <ul className="flex items-center justify-between border-t-2">
                <li className="flex items-center gap-1">
                  <CiLocationOn /> {location}
                </li>
                <li className="flex items-center gap-1">
                  <FaRegBuilding /> {area}
                </li>
              </ul>
              <div className="space-x-4 pt-4">
                <button
                  rel="noopener noreferrer"
                  className="px-2 md:px-4 py-2 font-semibold text-sm md:text-base bg-[#06112A] rounded-lg transition duration-1000 ease-in-out hover:bg-[#5EA51D] animate__animated animate__slideInUp text-white"
                >
                  Buy Estates
                </button>
                <button
                  rel="noopener noreferrer"
                  className="px-2 md:px-4 py-2 font-semibold text-sm md:text-base bg-[#5EA51D] rounded-lg transition duration-1000 ease-in-out hover:bg-[#06112A] animate__animated animate__slideInUp text-white"
                >
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default EstateDetails;
