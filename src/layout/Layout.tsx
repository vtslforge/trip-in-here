import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
