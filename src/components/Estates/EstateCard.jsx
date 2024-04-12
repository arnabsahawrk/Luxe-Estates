import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { FaRegBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

const EstateCard = ({ estate, idx }) => {
  const {
    id,
    estate_title,
    segment_name,
    image,
    price,
    status,
    area,
    location,
  } = estate;
  return (
    <Link to={`/estates/${id}`}>
      <div
        data-aos={idx % 2 === 0 ? "zoom-in" : "zoom-out"}
        data-aos-duration={idx % 2 === 0 ? "2500" : "3000"}
        data-aos-delay={idx % 2 === 0 || "300"}
        data-aos-anchor="#featured-estates"
        className="cursor-pointer rounded p-2 border border-gray-400"
      >
        <div className="relative ">
          <img
            className="object-cover h-52 w-full rounded"
            src={image}
            alt={estate_title}
          />
          <p className="absolute inset-0 flex items-end bg-black bg-opacity-50 hover:bg-transparent rounded">
            <span className="bg-[#5EA51D] text-white m-2 p-1 rounded text-sm font-bold">
              {price}
            </span>
          </p>
        </div>
        <div>
          <h2 className="text-[#06112A] font-bold text-lg">{estate_title}</h2>
          <ul className="flex items-center justify-between">
            <li className="text-[#848093]">{segment_name}</li>
            <li
              className={`${status === "sale" ? "bg-[#5EA51D]" : "bg-[#06112A]"} text-white m-2 p-1 rounded text-xs`}
            >
              {status.toUpperCase().slice(0, 1) + status.slice(1).toLowerCase()}
            </li>
          </ul>
          <ul className="flex items-center justify-between text-[#848093] text-sm border-t-2">
            <li className="flex items-center gap-1">
              <CiLocationOn /> {location}
            </li>
            <li className="flex items-center gap-1">
              <FaRegBuilding /> {area}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

EstateCard.propTypes = {
  estate: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};

export default EstateCard;
