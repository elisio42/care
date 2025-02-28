import { useTheme } from "../../context/ThemeContext";
import AppHeader from "../../layout/AppHeader";
import AppSidebar from "../../layout/AppSidebar";

export default function Dashboard() {
  const { theme } = useTheme();

  return (
    <div className={`w-full h-full ${theme === "dark" ? "#fff" : "#101828"}`}>
      <AppHeader />
      <AppSidebar />
      
    </div>
  );
}
