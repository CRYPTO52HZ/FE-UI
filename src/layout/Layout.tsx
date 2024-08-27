import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="px-10 pt-20 min-h-dvh">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
