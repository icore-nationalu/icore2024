import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const Layout = () => {
  ReactGA.initialize("G-PBBLRRN3JS");

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

    const loc = location.pathname.replaceAll("-", " ").replace("/", "");

    title = loc.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );

    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: title,
    });
  }, [location]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
