import React from "react";
import { useCountdown } from "../hooks/useCountdown";

const CountdownPart = ({ separatedValue, label }) => {
  if (label == "Days") {
    if (separatedValue.length == 2) {
      separatedValue.unshift("0");
    } else if (separatedValue.length == 1) {
      separatedValue.unshift("0");
      separatedValue.unshift("0");
    }
  } else {
    if (separatedValue.length == 1) {
      separatedValue.unshift("0");
    }
  }
  return (
    <div className="countdown-digit-container">
      <div className="countdown-digit-wrapper">
        {separatedValue.map((v, i) => {
          return (
            <div className="countdown-digit" key={i}>
              <span>{v}</span>
            </div>
          );
        })}
      </div>
      <p className="label">{label}</p>
    </div>
  );
};

const Colon = () => {
  return (
    <div className="colon-wrapper">
      <p>:</p>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(new Date(targetDate));
  return (
    <div className="countdown-container">
      <p className="heading">COUNTDOWN FOR iCORE 2024</p>
      <div className="countdown-wrapper">
        <CountdownPart
          separatedValue={days < 0 ? "0".split("") : days.toString().split("")}
          label="Days"
        />
        <Colon />
        <CountdownPart
          separatedValue={days < 0 ? "0".split("") : hours.toString().split("")}
          label="Hours"
        />
        <Colon />
        <CountdownPart
          separatedValue={
            days < 0 ? "0".split("") : minutes.toString().split("")
          }
          label="Minutes"
        />
        <Colon />
        <CountdownPart
          separatedValue={
            days < 0 ? "0".split("") : seconds.toString().split("")
          }
          label="Seconds"
        />
      </div>
    </div>
  );
};
export default CountdownTimer;
