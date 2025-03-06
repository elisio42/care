import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Dashboard/Home";
import UserProfiles from "./pages/UserProfiles";
import StockPage from "./pages/Stock/StockPage";
import FormElements from "./pages/Forms/FormElements";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path='/relatorio' element={<>Invoce</>} />
            <Route path='/perfil' element={<UserProfiles />} />
            <Route path="/stock" element={<StockPage />} />
            <Route path="/consulta" element={<FormElements />} />
            <Route path="/check-in" element={<>CHECK IN</>} />
          </Route>

          {/* Auth Layout */}
          <Route path="/entrar" element={<SignIn />} />
          <Route path="/cadastrar" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
