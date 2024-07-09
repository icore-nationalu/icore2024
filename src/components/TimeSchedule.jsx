const TimeSchedule = ({ time, event, sub, children }) => {
  return (
    <>
      <div className="time-schedule">
        <span className="time">{time}</span>
        <span>:</span>
        <div className="schedule-caption">
          <span className="event">{event}</span>
          {sub &&
            sub.map(({ title, speaker, position }, i) => {
              return title ? (
                <div className="subschedule-item">
                  <span className="subschedule-title">{title}</span>
                  {speaker && (
                    <div className="speaker" style={{ paddingLeft: "30px" }}>
                      <p className="speaker-name">{speaker}</p>
                      {position &&
                        position.map((v, i) => {
                          return (
                            <p className="speaker-position" key={i}>
                              {v}
                            </p>
                          );
                        })}
                    </div>
                  )}
                </div>
              ) : (
                <div className="subschedule-item">
                  {speaker && (
                    <div className="speaker">
                      <p className="speaker-name">{speaker}</p>
                      {position &&
                        position.map((v, i) => {
                          return (
                            <p className="speaker-position" key={i}>
                              {v}
                            </p>
                          );
                        })}
                    </div>
                  )}
                </div>
              );
            })}
          {/* {sub && <span className="caption">{sub}</span>} */}
        </div>
      </div>
      {children}
    </>
  );
};
export default TimeSchedule;
