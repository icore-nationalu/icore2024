import { useState } from "react";

const Test1 = () => {
  const [isActive, setIsActive] = useState(false);
  const [menuAnimate, setMenuAnimate] = useState("");

  const handleAnimationEnd = (e) => {
    if (e.target.classList.contains("hide-menu")) {
      setMenuAnimate("");
    }
    console.log(e);
  };

  const handleClick = () => {
    setIsActive(!isActive);
    setMenuAnimate(!isActive ? "show-menu" : "hide-menu");
  };

  return (
    <div className="test">
      <h1 className="toggler" onClick={handleClick}>
        TEST {isActive ? "-" : "+"}
      </h1>
      <div
        className={`sample-backdrop ${menuAnimate}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="sample-container">sdsd</div>
      </div>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
    </div>
  );
};
export default Test1;
