import { Link, useLocation } from "react-router";

function ListSidebar({ pathName = "", label, icon }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <li className="min-w-max">
      <Link
        to={`/${pathName}`}
        className={`${
          path === `/${pathName}`
            ? "bg-gradient-to-r from-[#f3d526] to-[#ceb000] text-white transition-shadow duration-300"
            : "text-gray-600 hover:bg-slate-200"
        } group flex items-center space-x-4 px-4 py-3 hover:shadow-md`}
      >
        <i className={`ri-${icon}-line text-2xl`}></i>
        <span className="font-medium">{label}</span>
      </Link>
    </li>
  );
}

export default ListSidebar;
