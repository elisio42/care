import { Link, useLocation } from "react-router";
import {
  Calendar1,
  ClipboardText,
  Clipboard,
  MoneyRecive,
  ChartSquare,
  ArchiveTick,
} from "iconsax-react";

import { useSidebar } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const { theme } = useTheme();
  const location = useLocation();
  
  const iconColor = theme === "dark" ? "#fff" : "#101828";

  const navItems = [
    { icon: <ChartSquare size={16} color={iconColor} variant="Bold" />, name: "Dashboard", path: "/" },
    { icon: <MoneyRecive size={16} color={iconColor} variant="Bold" />, name: "Finanças", path: "/financas" },
    { icon: <ArchiveTick size={16} color={iconColor} variant="Bold" />, name: "Agendamento", path: "/agendamento" },
    { icon: <Calendar1 size={16} color={iconColor} variant="Bold" />, name: "Calendário", path: "/calendario" },
    { icon: <ClipboardText size={16} color={iconColor} variant="Bold" />, name: "Estoque", path: "/estoque" },
    { icon: <Clipboard size={16} color={iconColor} variant="Bold" />, name: "Relatório", path: "/relatorio" },
  ];

  return (
    <aside
      className={`fixed mt-16 md:pt-24 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${isExpanded || isMobileOpen ? "w-[210px]" :  "w-[90px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <img src="/images/logo/care.svg" alt="logo" className="w-8 mb-4 ml-2 hidden md:block" />
          <h2 className="mb-4 text-xs uppercase flex ml-2 leading-[20px] text-gray-400 pt-8 md:pt-0">Menu</h2>
          <ul className="flex flex-col gap-4">
            {navItems.map((nav) => (
              <li key={nav.name}>
                <Link to={nav.path} className={`menu-item group ${location.pathname === nav.path ? "menu-item-active" : "menu-item-inactive"}`}>
                  <span className="menu-item-icon-size">{nav.icon}</span>
                  {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
