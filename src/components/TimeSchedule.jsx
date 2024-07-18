const TimeSchedule = ({ time, event, sub, children }) => {
  return (
    <>
      <div className="time-schedule">
        <span className="time">{time}</span>
        <span>{time ? ":" : ""}</span>
        <div className="schedule-caption">
          <span className="event">{event}</span>
          {sub &&
            sub.map(({ title, speaker, speakers, position }, i) => {
              return title ? (
                <div className="subschedule-item" key={i}>
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
                  {speakers &&
                    speakers.map(({ speaker, position }, i) => {
                      return (
                        <div
                          className="speaker"
                          style={{ paddingLeft: "30px" }}
                          key={i}
                        >
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
                      );
                    })}
                </div>
              ) : (
                <div className="subschedule-item" key={i}>
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
