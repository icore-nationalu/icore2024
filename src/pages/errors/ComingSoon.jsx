import { NavLink } from "react-router-dom";
import Icon from "../../components/Icon";
import CallForPaperPDF from "../../assets/documents/iCORE-Call-for-Papers.pdf";

const ComingSoon = ({ span, subheading }) => {
  const options = [
    {
      iconName: "FileText",
      label: "Call for Paper",
      subLabel: "Learn how to join iCORE 2024",
      linkText: "Start learning",
      link: CallForPaperPDF,
      openLinkNewTab: true,
    },
    {
      iconName: "BookOpen",
      label: "About Us",
      subLabel: "Know more about our origin",
      linkText: "View about us",
      link: "/about-us",
      openLinkNewTab: false,
    },
    {
      iconName: "Mail",
      label: "Email us",
      subLabel: "Can't find what you need?",
      linkText: "Email our team",
      link: "mailto:icore2024@national-u.edu.ph",
      openLinkNewTab: false,
    },
  ];
  return (
    <>
      <section className="error-wrapper">
        <div className="header">
          <span>{span}</span>
          <h1>Coming Soon</h1>
          <p>{subheading}</p>
          <div className="cta">
            <NavLink to="/" className="btn btn-primary">
              Take Me Home
            </NavLink>
          </div>
        </div>
      </section>
      <section className="error-options">
        <div className="wrapper">
          <div className="option-grid">
            {options.map((v, i) => {
              const {
                iconName,
                label,
                subLabel,
                linkText,
                link,
                openLinkNewTab,
              } = v;

              return (
                <div className="option-item" key={i}>
                  <Icon
                    iconName={iconName}
                    fill="none"
                    stroke="#0064D1"
                    className="icon"
                    height="24px"
                    width="24px"
                  />
                  <div className="content">
                    <p className="label">{label}</p>
                    <span className="sub-label">{subLabel}</span>
                    <div className="link-wrapper">
                      <a
                        href={link}
                        target={openLinkNewTab ? "_blank" : ""}
                        rel="noreferrer"
                        className="link"
                      >
                        {linkText}
                      </a>
                      <Icon
                        iconName="ArrowRight"
                        fill="none"
                        stroke="#004EA2"
                        className="icon"
                        height="20px"
                        width="20px"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default ComingSoon;
