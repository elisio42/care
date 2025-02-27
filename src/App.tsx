import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import SignUpForm from "./components/auth/SignUpForm";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Router>
    </div>
  );
}
//{*/{<Route path="/sign-up" element={<SignUpForm />} />}*/