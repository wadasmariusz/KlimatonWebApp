import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts imports
const LazyPublicLayout = lazy(() => import("@/layouts/PublicLayout"));
const LazyMapLayout = lazy(() => import("@/layouts/MapLayout"));

// Views imports
const Lazy404 = lazy(() => import("@/views/error/View404"));
const LazyLogin = lazy(() => import("@/views/auth/Login"));
const LazyThreatMap = lazy(() =>
  import("@/views/public/ThreatMap/ViewThreatMap")
);

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={"/"} element={<LazyMapLayout />}>
          <Route index element={<LazyThreatMap />} />
        </Route>

        <Route exact path={"/auth"} element={<LazyPublicLayout />}>
          <Route path="login" element={<LazyLogin />} />
        </Route>

        <Route path="*" element={<Lazy404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
