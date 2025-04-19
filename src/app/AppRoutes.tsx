import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "../features/auth/routes";
import LandingRoutes from "../features/landing/routes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LandingRoutes />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
