import {
  IoWaterSharp,
  AiOutlineClockCircle,
  FiMapPin,
  ImArrowUp,
} from "react-icons/all";

const ThreatListItem = ({ threatName, description }) => {
  return (
    <div className="rounded bg-primary-dark hover:bg-gray-800 text-gray-100 p-4 flex justify-between gap-8 cursor-pointer">
      <div>
        <div className="flex gap-2 items-center mb-2">
          <IoWaterSharp color="#fff" size={16} />
          <h3 className="m-0 text-base">{threatName}</h3>
        </div>
        <p className="text-sm overflow-hidden overflow-ellipsis text-gray-300 max-h-16 text-justify">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-4 justify-between">
        <div className="flex items-center gap-2 justify-start">
          <AiOutlineClockCircle color="#fff" size={16} />
          <span className="whitespace-nowrap">30 min</span>
        </div>
        <div className="flex items-center gap-2 justify-start">
          <FiMapPin color="#fff" size={16} />
          <span className="whitespace-nowrap">2.7 km</span>
        </div>
        <div className="flex items-center gap-2 justify-start">
          <ImArrowUp color="#fff" size={16} />
          <span className="whitespace-nowrap">481</span>
        </div>
      </div>
    </div>
  );
};

export default ThreatListItem;
