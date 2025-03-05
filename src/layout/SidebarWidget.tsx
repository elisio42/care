import { useSidebar } from "../context/SidebarContext";

export default function SidebarWidget() {
  const { isExpanded, isMobileOpen } = useSidebar();	
  return (
    <div
      className={`
        ${ isExpanded === true ? "hidden": "block" }mx-auto mb-4 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03] absolute bottom-0`}
    >
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
        #Care Dashboard
      </h3>
      <p className="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">
        Obrigado por confiar no nosso software.
      </p>
      <a
        href="https://tailadmin.com/pricing"
        target="_blank"
        rel="nofollow"
        className="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600"
      >
        Sugerir
      </a>
    </div>
  );
}
