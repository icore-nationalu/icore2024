import Icon from "./Icon";

const ImportantDateItem = ({
  label,
  dateText,
  dateTextShort,
  dateEnd,
  oldDateText,
  oldDateTextShort,
  oldDateEnd,
}) => {
  const isFinished = (dateToCompare) => {
    let currentDate = new Date().setHours(0, 0, 0, 0);
    let dateDeadline = new Date(dateToCompare);
    return currentDate > dateDeadline;
  };

  return (
    <li className={`date-item ${isFinished(dateEnd) ? "finished" : ""}`}>
      <div className="label">
        <p>{label}</p>
        <div className="status-badge">Finished</div>
      </div>
      {oldDateText && (
        <div className="date old">
          <Icon
            iconName="Calendar"
            stroke="#98A2B3"
            className="icon"
            height="20px"
            width="20px"
          />
          <p>
            <span>{oldDateText}</span>
            <span className="short">{oldDateTextShort}</span>
          </p>
        </div>
      )}
      <div className="date">
        <Icon
          iconName="Calendar"
          stroke="#98A2B3"
          className="icon"
          height="20px"
          width="20px"
        />
        <p>
          <span>{dateText}</span>
          <span className="short">{dateTextShort}</span>
        </p>
      </div>
    </li>
  );
};
export default ImportantDateItem;
