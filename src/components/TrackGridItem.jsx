import Icon from "./Icon";

const TrackGridItem = ({ icon, title, desc }) => {
  return (
    <div className="tracks-grid-item">
      <div className="track-icon">
        <Icon
          iconName={icon}
          fill="transparent"
          stroke="#0064D1"
          className="icon"
          height="24px"
          width="24px"
        />
      </div>
      <div className="track-title">
        <p>{title}</p>
      </div>
      <p className="track-description">{desc}</p>
    </div>
  );
};
export default TrackGridItem;
