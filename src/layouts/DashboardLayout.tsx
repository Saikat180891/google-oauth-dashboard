import { NavLink, Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <main className="h-screen w-full flex">
      <aside className="w-64 bg-slate-500 h-full flex flex-col justify-between">
        <ul className="text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-2 block ${isActive ? "font-semibold bg-slate-700" : ""}`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `p-2 block ${isActive ? "font-semibold bg-slate-700" : ""}`
              }
            >
              Users
            </NavLink>
          </li>
        </ul>
        <div className="p-4 flex justify-end">
          <button
            className="text-white bg-slate-700 px-2 py-0.5 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </aside>
      <div className="w-7/12">
        <Outlet />
      </div>
    </main>
  );
};

export default DashboardLayout;
