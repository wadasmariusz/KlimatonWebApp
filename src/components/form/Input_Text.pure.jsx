export const InputTextPure = ({
  icon = null,
  label = "",
  placeholder: passedPlaceholder,
  required,
  disabled,
  onChange = () => {},
  onEnter = () => {},
  invalid,
  innerRef,
  value = "",
  error,
  ...props
}) => {
  const placeholder =
    passedPlaceholder ?? `${label ?? ""}${required ? "*" : ""}`;

  const handleChange = (e) => {
    onChange(e?.target?.value);
  };

  const handleKeyDown = (e) => {
    if (e?.key === "Enter") {
      onEnter(e);
    }
  };

  return (
    <>
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          className={`${
            error
              ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 rounded-lg focus:ring-red-500 focus:border-red-500"
              : "bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          } sm:text-sm rounded-lg block w-full pl-10 p-2.5`}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={innerRef}
          value={value ?? ""}
          {...props}
        />
      </div>
      {error && <div className="small text-red-800">{error?.message}</div>}
    </>
  );
};
