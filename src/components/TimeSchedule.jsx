const TimeSchedule = ({ time, schedule, caption, children }) => {
  return (
    <>
      <div className="time-schedule">
        <span className="time">{time}</span>
        <span>:</span>
        <div className="schedule-caption">
          <span className="schedule">{schedule}</span>
          {caption && <span className="caption">{caption}</span>}
        </div>
      </div>
      {children}
    </>
  );
};
export default TimeSchedule;
