const TimeSchedule = ({ time, schedule, children }) => {
  return (
    <>
      <div className="time-schedule">
        <span className="time">{time}</span>
        <span>:</span>
        <span className="schedule">{schedule}</span>
      </div>
      {children}
    </>
  );
};
export default TimeSchedule;
