import { useAuth } from "@/contextApi/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handlelogOut = () => {
    logout();
  };
  return (
    <div>
      <h2>Dashdoard</h2>
      <p>{user?.email}</p>
      <button className="cursor-pointer" onClick={handlelogOut}>
        Sign OUt
      </button>
    </div>
  );
}
