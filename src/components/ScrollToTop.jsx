import { useEffect, useState } from "react";
import Icon from "../components/Icon";

const ScrollToTop = () => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsPageScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`back-to-top ${isPageScrolled ? "active" : ""}`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <Icon
        iconName="ArrowUp"
        stroke="#FFF"
        className="icon"
        height="24px"
        width="24px"
      />
    </div>
  );
};
export default ScrollToTop;
