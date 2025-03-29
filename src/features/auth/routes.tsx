import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";


const LandingRoutes = () => {


  return (
   <Routes>
    <Route path="/" element={<AuthPage/>} />
   </Routes>
  );
};

export default LandingRoutes;
