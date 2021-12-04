import { useQueryContext } from "./QueryProvider";

export const QueryIsSuccess = ({ children }) => {
  const { status } = useQueryContext();

  return status === "success" ? children : null;
};
