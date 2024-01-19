import { Link } from "react-router-dom";
import Icon from "./Icon";

const ContactGridItem = ({ icon, iconFill, label, desc, link, linkText }) => {
  return (
    <div className="contact-grid-item">
      <div className="contact-icon">
        <Icon
          iconName={icon}
          fill={iconFill ? "#007AFF" : "transparent"}
          stroke={iconFill ? "transparent" : "#007AFF"}
          className="icon"
          height="24px"
          width="24px"
        />
      </div>
      <div className="contact-field">
        <p className="label">{label}</p>
        <p className="description">{desc}</p>
      </div>
      <div className="contact-data">
        <p className="data">
          <Link to={link} target="_blank">
            {linkText}
          </Link>
          <Icon
            iconName="ExternalLink"
            stroke="#8693A0"
            className="icon"
            height="20px"
            width="20px"
          />
        </p>
      </div>
    </div>
  );
};
export default ContactGridItem;
