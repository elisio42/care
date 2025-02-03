import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}
