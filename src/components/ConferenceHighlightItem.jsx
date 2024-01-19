import Icon from "./Icon";

const ConferenceHighlightItem = ({ icon, title, description }) => {
  return (
    <div className="conference-highlight-item">
      <div className="icon-wrapper">
        <Icon
          iconName={icon}
          fill="transparent"
          stroke="#007AFF"
          className="icon"
          height="20px"
          width="20px"
        />
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};
export default ConferenceHighlightItem;
