import { useState } from "react";
import Icon from "./Icon";

const ParallelSession = ({ defaultActive, header, children }) => {
  const [isActive, setIsActive] = useState(defaultActive ?? false);
  return (
    <div
      className="parallel-session-item"
      onClick={() => setIsActive(!isActive)}
    >
      <div className="item-header">
        <span>{header}</span>
        <Icon
          iconName={isActive ? `ChevronUp` : "ChevronDown"}
          stroke="#171E26"
          className="icon"
          height="16px"
          width="16px"
        />
      </div>
      <div className="session-wrapper">{isActive && children}</div>
    </div>
  );
};
export default ParallelSession;
