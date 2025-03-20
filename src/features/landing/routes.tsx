import PageLoader from "@core/components/ui/PageLoader";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const LandingPage = lazy(() => import("./pages/LandingPage"));
const SeekerPublicProfilePage = lazy(() => import("./pages/SeekerPublicProfilePage"));
const Layout = lazy(() => import("./components/Layout"));
const CompanyPublicViewPage = lazy(() => import("./pages/CompanyPublicViewPage"));
const DiscoverCompaniesPage = lazy(() => import("./pages/DiscoverCompaniesPage"));

const LandingRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/discover-companies" element={<DiscoverCompaniesPage />} />
        </Route>
        <Route path=":name" element={<SeekerPublicProfilePage />} />
        <Route path="/company-view/:companyId" element={<CompanyPublicViewPage />} />
        <Route path="*" element={<Navigate to={"/not-found"} />} />
      </Routes>
    </Suspense>
  );
}

export default LandingRoutes;
