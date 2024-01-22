import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import placeholder from "../assets/test-image.png";
import { Outlet, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import Icon from "../components/Icon";

const Navbar = () => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [navDropdownActive, setNavDropdownActive] = useState("");
  const [menuAnimate, setMenuAnimate] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsPageScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setNavDropdownActive("");
  }, [isMenuActive]);

  useEffect(() => {
    setIsMenuActive(false);
    setMenuAnimate(menuAnimate == "show-menu" ? "hide-menu" : "");
  }, [location]);

  const handleAnimationEnd = (e) => {
    if (e.target.classList.contains("hide-menu")) {
      setMenuAnimate("");
    }
  };

  const handleClick = () => {
    setIsMenuActive(!isMenuActive);
    setMenuAnimate(!isMenuActive ? "show-menu" : "hide-menu");
  };
  return (
    <>
      <nav
        className={`${
          location.pathname == "/"
            ? isPageScrolled
              ? "opaque"
              : "nav-home"
            : isPageScrolled
            ? "opaque"
            : "nav-white"
        }`}
      >
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="hamburger-menu">
          <div
            className={`navbar-menu-toggler ${isMenuActive ? "active" : ""}`}
            onClick={handleClick}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div
          className={`nav-backdrop  ${
            isMenuActive ? "active" : ""
          } ${menuAnimate}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <div className="nav-container">
            <div className="nav-wrapper">
              <ul className="nav-links">
                <div className="nav-link-wrapper">
                  {/* Home */}
                  <li className="nav-link">
                    <NavLink to="/" className="link-text">
                      Home
                    </NavLink>
                  </li>

                  {/* Timeline */}
                  {/* 
                  <li
                    className={`nav-link nav-dropdown ${
                      navDropdownActive == "timeline" ? "dropdown-active" : ""
                    }`}
                    onClick={() => {
                      setNavDropdownActive(
                        navDropdownActive == "timeline" ? "" : "timeline"
                      );
                    }}
                  >
                    <div className="nav-hover"></div>
                    <span
                      className={`link-text ${
                        ["/important-dates", "/program"].includes(
                          location.pathname
                        )
                          ? "active"
                          : ""
                      }`}
                    >
                      Timeline
                    </span>
                    <ul className="sub-links">
                      <li className="sub-link">
                        <NavLink to="/important-dates">Important Dates</NavLink>
                      </li>
                      <li className="sub-link">
                        <NavLink to="/program">Program</NavLink>
                      </li>
                    </ul>
                    <Icon
                      iconName="ChevronDown"
                      fill={`${
                        ["/important-dates", "/program"].includes(
                          location.pathname
                        )
                          ? "#007AFF"
                          : "#465360"
                      }`}
                      className="icon link-dropdown"
                      height="20px"
                      width="20px"
                    />
                  </li>
                  */}
                  {/* Participants */}
                  {/* 
                  <li
                    className={`nav-link nav-dropdown ${
                      navDropdownActive == "participants"
                        ? "dropdown-active"
                        : ""
                    }`}
                    onClick={() => {
                      setNavDropdownActive(
                        navDropdownActive == "participants"
                          ? ""
                          : "participants"
                      );
                    }}
                  >
                    <div className="nav-hover"></div>
                    <span
                      className={`link-text ${
                        ["/speakers", "/committee"].includes(location.pathname)
                          ? "active"
                          : ""
                      }`}
                    >
                      Participants
                    </span>
                    <ul className="sub-links">
                      <li className="sub-link">
                        <NavLink to="/speakers">Speakers</NavLink>
                      </li>
                      <li className="sub-link">
                        <NavLink to="/committee">Committee</NavLink>
                      </li>
                    </ul>
                    <Icon
                      iconName="ChevronDown"
                      fill={`${
                        ["/speakers", "/committee"].includes(location.pathname)
                          ? "#007AFF"
                          : "#465360"
                      }`}
                      className="icon link-dropdown"
                      height="20px"
                      width="20px"
                      onClick={() =>
                        setNavDropdownActive(
                          navDropdownActive == "link3" ? "" : "link3"
                        )
                      }
                    />
                  </li>
                   */}
                  {/* Publication */}
                  <li className="nav-link">
                    <NavLink to="/registration" className="link-text">
                      Registration
                    </NavLink>
                  </li>

                  {/* About Us */}
                  <li className="nav-link">
                    <NavLink to="/important-dates" className="link-text">
                      Important Dates
                    </NavLink>
                  </li>

                  {/* About Us 
                  <li className="nav-link">
                    <NavLink to="/program" className="link-text">
                      Program
                    </NavLink>
                  </li>

                  {/* About Us 
                  <li className="nav-link">
                    <NavLink to="/speakers" className="link-text">
                      Speakers
                    </NavLink>
                  </li>

                  {/* About Us */}
                  <li className="nav-link">
                    <NavLink to="/committee" className="link-text">
                      Committee
                    </NavLink>
                  </li>

                  {/* About Us */}
                  <li className="nav-link">
                    <NavLink to="/venue" className="link-text">
                      Venue
                    </NavLink>
                  </li>

                  {/* About Us */}
                  <li className="nav-link">
                    <NavLink to="/past-conferences" className="link-text">
                      Past Conferences
                    </NavLink>
                  </li>

                  {/* About Us */}
                  <li className="nav-link">
                    <NavLink to="/about-us" className="link-text">
                      About Us
                    </NavLink>
                  </li>
                </div>
                {/* 
                <div className="nav-cta">
                  <NavLink to="/submission" className="btn-white">
                    Submit Paper
                  </NavLink>
                  <NavLink to="/registration" className="btn-primary">
                    Register
                  </NavLink>
                </div>
                  */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
