import PropTypes from "prop-types";

const AgentsCard = ({ agent }) => {
  const {
    name,
    position: pos,
    image: img,
    description: des,
    phone,
    email,
  } = agent;

  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <img className="size-20 rounded-full object-cover" src={img} alt={name} />
      <h2 className="text-[#06112A] font-bold text-base md:text-lg">{name}</h2>
      <h3 className="text-[#06112A] font-semibold text-xs">{pos}</h3>
      <ul className="text-[#06112A] font-bold text-xs flex gap-3">
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
      <p className="text-[#848093] font-medium text-sm md:text-base max-w-96 px-4">
        {des}
      </p>
    </div>
  );
};

AgentsCard.propTypes = {
  agent: PropTypes.object.isRequired,
};

export default AgentsCard;
