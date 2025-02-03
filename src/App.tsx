import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from "@/pages/SignInPage";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
        </Routes>
      </Router>
    </div>
  );
}
