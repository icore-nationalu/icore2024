import { useState } from "react";
import Icon from "./Icon";

const ProgramListItem = ({ defaultActive, header, children }) => {
  const [isActive, setIsActive] = useState(defaultActive);
  return (
    <div className="program-list-item">
      <div className="program-header" onClick={() => setIsActive(!isActive)}>
        <Icon
          iconName={isActive ? `MinusCircle` : "PlusCircle"}
          stroke="#98A2B3"
          className="icon"
          height="24px"
          width="24px"
        />
        <span>{header}</span>
      </div>
      {isActive && <div className="program-content">{children}</div>}
    </div>
  );
};
export default ProgramListItem;
