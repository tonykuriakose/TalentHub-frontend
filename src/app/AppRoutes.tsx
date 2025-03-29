import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../features/landing/pages/LandingPage";
import AuthPage from "../features/auth/routes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/auth" element={<AuthPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
