import { Controller, useFormContext } from "react-hook-form";

const InputText = ({ name, placeholder }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState }) => {
        const { error } = fieldState;
        return (
          <div>
            <input
              {...field}
              ref={ref}
              placeholder={placeholder}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <p className="text-red-800 m-0">{error}</p>
          </div>
        );
      }}
    />
  );
};

export default InputText;
