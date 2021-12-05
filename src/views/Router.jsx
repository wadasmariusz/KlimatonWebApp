import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts imports
const LazyPublicLayout = lazy(() => import("@/layouts/PublicLayout"));
const LazyMapLayout = lazy(() => import("@/layouts/MapLayout"));
const LazyDashboardLayout = lazy(() => import("@/layouts/DashboardLayout"));

// Views imports
const Lazy404 = lazy(() => import("@/views/error/View404"));
const LazyLogin = lazy(() => import("@/views/auth/Login"));
const LazyRegister = lazy(() => import("@/views/auth/Register"));
const LazyHome = lazy(() => import("@/views/public/Home"));
const LazyThreatMap = lazy(() =>
  import("@/views/public/ThreatMap/ViewThreatMap")
);
const LazyDashboard = lazy(() => import("../views/dashboard/Index"));
const LazyRanking = lazy(() => import("../views/public/ranking/Index"));

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={"/dashboard"} element={<LazyDashboardLayout />}>
          <Route index element={<LazyDashboard />} />
        </Route>

        <Route exact path={"/map"} element={<LazyMapLayout />}>
          <Route index element={<LazyThreatMap />} />
        </Route>

        <Route exact path={"/auth"} element={<LazyPublicLayout />}>
          <Route path="login" element={<LazyLogin />} />
          <Route path="register" element={<LazyRegister />} />
        </Route>

        <Route exact path={"/"} element={<LazyPublicLayout />}>
          <Route index element={<LazyHome />} />
          <Route path={"/ranking"} element={<LazyRanking />} />
        </Route>

        <Route path="*" element={<Lazy404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
