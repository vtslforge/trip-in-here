import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="min-h-screen w-48 bg-white px-4 py-8 border">
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/task"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          task
        </NavLink>
        <NavLink
          to="/todo"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Todo
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
