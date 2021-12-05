export const InputTextareaPure = ({
  icon = null,
  className = "",
  label = "",
  placeholder: passedPlaceholder,
  required,
  disabled,
  onChange = () => {},
  onEnter = () => {},
  invalid,
  innerRef,
  value = "",
  inputClassName = "",
  inputGroupClassName = "",
  append,
  error,
  size = "md",
  ...props
}) => {
  const placeholder =
    passedPlaceholder ?? `${label ?? ""}${required ? "*" : ""}`;

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onEnter(e);
    }
  };

  return (
    <div className="mr-1 relative">
      <textarea
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={innerRef}
        value={value ?? ""}
        {...props}
      />
      {error && <div className="small text-red-700">{error?.message}</div>}
    </div>
  );
};
