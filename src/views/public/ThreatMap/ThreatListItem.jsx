import { IoWaterSharp, CgComment, ImArrowUp } from "react-icons/all";
import { IconContext } from "react-icons/lib";

const ThreatListItem = ({
  threatName,
  description,
  commentCount,
  upvoteCount,
}) => {
  return (
    <div className="rounded bg-gray-200 dark:bg-primary-dark dark:hover:bg-gray-800 hover:bg-gray-300 text-gray-100 p-4 flex flex-col justify-between gap-8 cursor-pointer">
      <div>
        <div className="flex gap-2 items-center mb-2">
          {/* <IconContext.Provider
            value={{ className: "text-gray-600 dark:text-gray-200" }}
          >
            <IoWaterSharp color="currectColor" size={16} />
          </IconContext.Provider> */}
          <h3 className="m-0 text-base text-black dark:text-gray-100">
            {threatName}
          </h3>
        </div>
        <p className="text-sm overflow-hidden overflow-ellipsis text-gray-500 dark:text-gray-300 max-h-16 text-justify">
          {description}
        </p>
      </div>
      <div className="flex gap-4 justify-end text-gray-600 dark:text-gray-200">
        <div className="flex items-center gap-2 justify-start">
          <ImArrowUp color="currectColor" size={16} />
          <span className="whitespace-nowrap">{upvoteCount}</span>
        </div>
        <div className="flex items-center gap-2 justify-start">
          <CgComment color="currectColor" size={16} />
          <span className="whitespace-nowrap">{commentCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ThreatListItem;
