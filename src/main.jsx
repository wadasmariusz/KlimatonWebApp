import { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { setupAxios } from "./app/config/setupAxios";
import Spinner from "./components/common/Spinner";
import "@/styles/globals.css";

const LazyApp = lazy(() => import("./App"));

setupAxios(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={<Spinner />}>
        <LazyApp />
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById("root"),
  undefined
);
