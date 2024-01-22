import { useEffect, useState } from "react";
import Icon from "../components/Icon";
import ScrollToTop from "../components/ScrollToTop";
import CommitteeTeam from "../components/CommitteeTeam";
import committeeData from "../assets/data/committee.json";

const Committee = () => {
  const [currentTeam, setCurrentTeam] = useState("general-chairs");
  const [tocActive, setTOCActive] = useState(false);
  const [tocAnimate, setTOCAnimate] = useState("");

  const handleAnimationEnd = (e) => {
    const toc = document.getElementById("toc");
    if (toc.classList.contains("hide-menu")) {
      setTOCAnimate("");
    }
  };

  const handleClick = () => {
    setTOCActive(!tocActive);
    setTOCAnimate(!tocAnimate ? "show-menu" : "hide-menu");
  };

  const handleChangeTeam = (team) => {
    setCurrentTeam(team);
    handleClick();
    document.getElementById("divider").scrollIntoView();
  };

  return (
    <section id="committee">
      <div className="header-container">
        <div className="header-wrapper">
          <span>The Committee</span>
          <h1 className="heading">Meet the people behind iCORE</h1>
          <p className="subheading">
            Comprising experts from various domains within information and
            computing research, the committee is committed to ensuring a
            seamless and enriching conference experience for all participants.
          </p>
        </div>
      </div>
      <div className="wrapper">
        <div id="divider"></div>
        <div className="committee-container" id="committee-container">
          <div className={`table-of-contents ${tocAnimate}`} id="toc">
            {/* TOC Backdrop */}
            <div
              className="toc-backdrop"
              onClick={handleClick}
              onAnimationEnd={handleAnimationEnd}
            ></div>

            {/* TOC */}
            <div className="toc-wrapper">
              <div className="header">
                <p className="heading">Our Team</p>
                <div className="icon-wrapper" onClick={handleClick}>
                  <Icon
                    iconName="X"
                    stroke="#687582"
                    className="icon"
                    height="24px"
                    width="24px"
                  />
                </div>
              </div>
              <ul>
                {committeeData.map((v, i) => {
                  const { committeeTitle, committeeName } = v;
                  return (
                    <li
                      key={i}
                      className={currentTeam == committeeName ? "active" : ""}
                      onClick={() => handleChangeTeam(committeeName)}
                    >
                      {committeeTitle}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* TOC Toggler */}
          <div className="toc-toggler">
            <div className="toggler-button" onClick={handleClick}>
              <Icon
                iconName="Menu"
                stroke="#465360"
                className="icon"
                height="24px"
                width="24px"
              />
            </div>
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
