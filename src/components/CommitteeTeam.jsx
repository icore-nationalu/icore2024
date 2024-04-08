import TestImage from "../assets/test-image.png";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";
import getImage from "../assets/images/committee/square/index.jsx";
import React from "react";
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
      <div className="committee-team">
        {committeeItems.map((v, i) => {
          const {
            name,
            displayName,
            link,
            position,
            showAffiliation,
            affiliation,
          } = v;
          return (
            <div className="committee-team-item" key={i}>
              <div className="photo">
                <img src={getImage(name)} alt="" />
              </div>
              <div className="committee-data">
                <p className="name">
                  <span>{displayName}</span>
                </p>
                {showAffiliation && (
                  <p className="position">
                    {committeeName == "technical-reviewers"
                      ? position
                      : `${position} - ${affiliation}`}
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
