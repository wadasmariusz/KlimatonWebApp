import Spinner from "../common/Spinner";
import { useFormContext } from "react-hook-form";

export const InputSubmit = ({ icon = null, value = "Zapisz", ...props }) => {
  const { formState } = useFormContext();

  const { isSubmitting } = formState;
  // console.log(isSubmitting)

  return (
    <button
      type="submit"
      className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
      disabled={isSubmitting}
      {...props}
    >
      {isSubmitting ? <Spinner color="white" size="sm" /> : icon}
      {value}
    </button>
  );
};
