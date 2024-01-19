import TestImage from "../assets/test-image.png";
import Icon from "./Icon";

import { Link } from "react-router-dom";
const SpeakerItem = ({ name, link, position, institution }) => {
  return (
    <div className="speaker-item">
      <div className="photo">
        <img src={TestImage} alt="" />
      </div>
      <div className="speaker-name">
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
      </div>
      <p className="position">
        <span>{position}</span>, {institution}
      </p>
    </div>
  );
};
export default SpeakerItem;
