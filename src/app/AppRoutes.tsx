import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../featurs/landing/pages/LandingPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
