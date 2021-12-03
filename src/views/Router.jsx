import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts imports
const LazyPublicLayout = lazy(() => import("@/layouts/PublicLayout"));

// Views imports
const Lazy404 = lazy(() => import("@/views/error/View404"));
const LazyHome = lazy(() => import("@/views/public/Home"));
const LazyThreatMap = lazy(() =>
  import("@/views/public/ThreatMap/ViewThreatMap")
);

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route exact path={"/"} element={<LazyPublicLayout />}>
          <Route path={"/about"} element={<LazyHome />} />
          <Route index element={<LazyThreatMap />} />
        </Route>

        <Route path="*" element={<Lazy404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
