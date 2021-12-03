import { CgSpinner } from "react-icons/cg";

const Spinner = () => {
  return (
    <div className="w-full h-full grid place-items-center">
      <CgSpinner
        className="animate-spin text-white dark:text-gray-800"
        size={48}
      />
    </div>
  );
};

export default Spinner;
