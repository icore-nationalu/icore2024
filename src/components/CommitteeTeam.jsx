import TestImage from "../assets/test-image.png";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";
import getImage from "../assets/images/committee/square/index.jsx";
const CommitteeTeam = ({
  currentTeam,
  committeeName,
  committeeTitle,
  committeeDescription,
  committeeItems,
}) => {
  return (
    <div
      className={`committee-list ${
        currentTeam == committeeName ? "active" : ""
      }`}
    >
      <h2 className="committee-title">{committeeTitle}</h2>
      {/* <p className="committee-description">{committeeDescription}</p> */}
      <div className="committee-team">
        {committeeItems.map((v, i) => {
          const { name, link, position, showAffiliation, affiliation } = v;
          return (
            <div className="committee-team-item" key={i}>
              <div className="photo">
                <img src={getImage(name)} alt="" />
              </div>
              <div className="committee-data">
                <p className="name">
                  <Link to={link} target="_blank">
                    {name}
                  </Link>
                  <Icon
                    iconName="ExternalLink"
                    stroke="#8693A0"
                    className="icon"
                    height="20px"
                    width="20px"
                  />
                </p>
                {showAffiliation && (
                  <p className="position">
                    {position}
                    {affiliation && (
                      <>
                        <br />
                        {affiliation}
                      </>
                    )}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CommitteeTeam;
