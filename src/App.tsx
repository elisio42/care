import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Router>
    </div>
  );
}
