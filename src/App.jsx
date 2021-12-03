import { useEffect, useState } from "react";
import AppRouter from "./views/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { me } from "./app/CRUD/auth/me";
import { useSelector, useDispatch } from "react-redux";
import { actionMe, actionLogout } from "./store/auth/authActions";
import Spinner from "./components/common/Spinner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      suspense: true,
      cacheTime: 0,
    },
  },
});

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    me()
      .then(({ data }) => dispatch(actionMe(data)))
      .catch(() => dispatch(actionLogout()))
      .finally(() => setIsLoading(false));
  }, [token]);

  if (isLoading && token) return <Spinner />;

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <Toaster />
    </QueryClientProvider>
  );
}
