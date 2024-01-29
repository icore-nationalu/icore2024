import React from "react";
import { useCountdown } from "../hooks/useCountdown";
import CountdownTimer from "../components/CountdownTimer";

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
      <div className="colon">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

const Test = () => {
  return <CountdownTimer targetDate="7/19/2024" />;
};
export default Test;
