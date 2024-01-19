import { useEffect, useState } from "react";
import TestImage from "../assets/test-image.png";
import Icon from "../components/Icon";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";
import CommitteeTeam from "../components/CommitteeTeam";
import committeeData from "../assets/data/committee.json";

const Committee = () => {
  const [currentTeam, setCurrentTeam] = useState("general-chairs");

  const handleChangeTeam = (team) => {
    setCurrentTeam(team);
    document.getElementById("divider").scrollIntoView();
  };
  return (
    <section id="committee">
      <div className="header-container">
        <div className="header-wrapper">
          <span>About Us</span>
          <h1 className="heading">Innovating Boundaries with iCORE</h1>
          <p className="subheading">
            iCORE is more than a conference. It's a catalyst for advancing
            knowledge, fostering global collaborations, and driving real-world
            technological innovations.
          </p>
        </div>
      </div>
      <div className="wrapper">
        <div id="divider"></div>
        <div className="committee-container" id="committee-container">
          <div className="table-of-contents">
            <p className="heading">Our Team</p>
            <ul>
              <li
                className={currentTeam == "general-chairs" ? "active" : ""}
                onClick={() => handleChangeTeam("general-chairs")}
              >
                General Chairs
              </li>
              <li
                className={currentTeam == "general-co-chairs" ? "active" : ""}
                onClick={() => handleChangeTeam("general-co-chairs")}
              >
                General Co-Chairs
              </li>
              <li
                className={
                  currentTeam == "conference-program-chairs" ? "active" : ""
                }
                onClick={() => handleChangeTeam("conference-program-chairs")}
              >
                Conference Program Chairs
              </li>
              <li
                className={currentTeam == "intl-advisory-board" ? "active" : ""}
                onClick={() => handleChangeTeam("intl-advisory-board")}
              >
                International Advisory Board
              </li>
              <li
                className={currentTeam == "steering" ? "active" : ""}
                onClick={() => handleChangeTeam("steering")}
              >
                Steering Committee
              </li>
              <li
                className={currentTeam == "program-technical" ? "active" : ""}
                onClick={() => handleChangeTeam("program-technical")}
              >
                Program Technical Committee
              </li>
              <li
                className={currentTeam == "event-production" ? "active" : ""}
                onClick={() => handleChangeTeam("event-production")}
              >
                Event Production Committee
              </li>
              <li
                className={
                  currentTeam == "production-technical" ? "active" : ""
                }
                onClick={() => handleChangeTeam("production-technical")}
              >
                Production Technical Committee
              </li>
              <li
                className={
                  currentTeam == "production-creatives" ? "active" : ""
                }
                onClick={() => handleChangeTeam("production-creatives")}
              >
                Production and Creatives Committee
              </li>
            </ul>
          </div>
          <div className="committee-list-wrapper">
            {committeeData &&
              committeeData.map((c, i) => {
                const {
                  committeeName,
                  committeeTitle,
                  committeeDescription,
                  committeeItems,
                } = c;
                return (
                  <CommitteeTeam
                    key={i}
                    currentTeam={currentTeam}
                    committeeName={committeeName}
                    committeeTitle={committeeTitle}
                    committeeDescription={committeeDescription}
                    committeeItems={committeeItems}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <ScrollToTop />
    </section>
  );
};
export default Committee;
