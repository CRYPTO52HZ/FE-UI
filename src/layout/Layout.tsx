import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div className="px-10">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
