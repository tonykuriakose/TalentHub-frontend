import PageLoader from "@core/components/ui/PageLoader";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Layout = lazy(() => import("./components/Layout"));

const LandingRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
        
        </Route>
        <Route path="*" element={<Navigate to={"/not-found"} />} />
      </Routes>
    </Suspense>
  );
}

export default LandingRoutes;