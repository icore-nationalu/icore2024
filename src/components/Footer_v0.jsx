import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

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
          <div className="sitemap">
            <div></div>
            <div>
              <p className="heading">Navigation</p>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/important-dates">Important Dates</NavLink>
                </li>
                <li>
                  <NavLink to="/program">Program</NavLink>
                </li>
                <li>
                  <NavLink to="/submission">Submission</NavLink>
                </li>
                <li>
                  <NavLink to="/registration">Registration</NavLink>
                </li>
                <li>
                  <NavLink to="/publication">Publication</NavLink>
                </li>
                <li>
                  <NavLink to="/about-us">About Us</NavLink>
                </li>
              </ul>
            </div>

            {/* <div>
              <p className="heading">Participants</p>
              <ul>
                <li>
                  <NavLink to="/">General Chairs</NavLink>
                </li>
                <li>
                  <NavLink to="/important-dates">Program Chairs</NavLink>
                </li>
                <li>
                  <NavLink to="/program">Advisory Board</NavLink>
                </li>
                <li>
                  <NavLink to="/submission">Steering Committee</NavLink>
                </li>
                <li>
                  <NavLink to="/registration">Event Production</NavLink>
                </li>
                <li>
                  <NavLink to="/publication">Plenary Speakers</NavLink>
                </li>
              </ul>
            </div> */}

            <div>
              <p className="heading">Contact Us</p>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">E-mail</a>
                </li>
                <li>
                  <a href="#">Phone</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="tagline">
            <p>Shape Tomorrow's Innovation</p>
            <span>Let's build a better sustainable future.</span>
          </div>
          <p className="copyright">&#169; 2024 iCORE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
