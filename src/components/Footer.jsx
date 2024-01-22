import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/icore24-logo.png";
import Icon from "./Icon";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="top">
          <div>
            <div className="logo-container">
              <NavLink to="/">
                <img src={Logo} alt="" />
              </NavLink>
            </div>
          </div>
          <div className="tagline">
            <p>
              Shape tomorrow's innovation by building a better, sustainable
              future.
            </p>
          </div>
          <div className="sitemap">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/registration">Registration</NavLink>
              </li>
              <li>
                <NavLink to="/important-dates">Important Dates</NavLink>
              </li>

              <li>
                <NavLink to="/program">Program</NavLink>
              </li>
              <li>
                <NavLink to="/speakers">Speakers</NavLink>
              </li>

              <li>
                <NavLink to="/venue">Venue</NavLink>
              </li>
              <li>
                <NavLink to="/past-conferences">Past Conferences</NavLink>
              </li>
              <li>
                <NavLink to="/committee">Committee</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <p className="copyright">&#169; 2024 iCore. All rights reserved.</p>
          <div className="social-links">
            <ul>
              <li>
                <Link to="https://www.linkedin.com" target="_blank">
                  <Icon
                    iconName="LinkedIn"
                    fill="#171E26"
                    className="icon"
                    height="24px"
                    width="24px"
                  />
                </Link>
              </li>
              <li>
                <Link to="https://www.twitter.com" target="_blank">
                  <Icon
                    iconName="Twitter"
                    fill="#171E26"
                    className="icon"
                    height="24px"
                    width="24px"
                  />
                </Link>
              </li>
              <li>
                <Link to="mailto:icore@national-u.edu.ph" target="_blank">
                  <Icon
                    iconName="Mail"
                    fill="transparent"
                    stroke="#171E26"
                    className="icon"
                    height="24px"
                    width="24px"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
