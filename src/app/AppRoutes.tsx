import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "../features/auth/routes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
