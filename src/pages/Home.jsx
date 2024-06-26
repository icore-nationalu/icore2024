import { NavLink } from "react-router-dom";
import ConferenceHighlightItem from "../components/ConferenceHighlightItem";
import importantDatesData from "../assets/data/important_dates.json";
import ImportantDateItem from "../components/ImportantDateItem";
import ContactGridItem from "../components/ContactGridItem";

import Venue from "../assets/images/venue.png";
import HomeImage from "../assets/images/home.jpg";
import CallForPaperPDF from "../assets/documents/iCORE-Call-for-Papers.pdf";

import BU from "../assets/images/collaborators/bicol-university.png";
import DMMMSU from "../assets/images/collaborators/don-mariano-marcos-memorial-state-university.png";
import USC from "../assets/images/collaborators/university-of-san-carlos.png";
import UTC from "../assets/images/collaborators/university-of-the-cordilleras.png";
import NU from "../assets/images/collaborators/national-university-large.png";
import NUMOA from "../assets/images/collaborators/national-university.svg";
import LSPU from "../assets/images/collaborators/laguna-state-polytechnic-university.jpg";
import AUFE from "../assets/images/collaborators/anhui-university-of-finance-and-economics.png";
import JVTCC from "../assets/images/collaborators/jiangxi-vt-college-of-communications.jpg";
// import JVTCCL from "../assets/images/collaborators/jiangxi-vt-college-of-communications-lg.png";
import AXU from "../assets/images/collaborators/anhui-xinhua-university.png";
import Test from "../assets/test-image.png";
import CountdownTimer from "../components/CountdownTimer";

import YIBU from "../assets/images/sponsors/yibu-education.jpg";
import AC from "../assets/images/sponsors/alibaba-cloud.png";

const Home = () => {
  const conferenceHighlights = [
    {
      icon: "Key",
      title: "Keynote Addresses by Renowned Experts",
      description:
        "Embark on a knowledge-rich journey with our distinguished Keynote Addresses, where industry luminaries share profound insights, setting the stage for intellectual exploration",
    },
    {
      icon: "CodeSandbox",
      title: "Interactive Workshops and Panel Discussions",
      description:
        "Participate in hands-on learning through our Interactive Workshops and engage in enlightening Panel Discussions, fostering an interactive environment for collaborative exchange and in-depth exploration.",
    },
    {
      icon: "Image",
      title: "Poster Sessions for Informal Discussions",
      description:
        "Delve into thought-provoking topics at our Poster Sessions, designed for informal yet insightful discussions. Engage with presenters and fellow attendees to explore diverse perspectives.",
    },
    {
      icon: "Activity",
      title: "Networking Opportunities with Peers and Industry Professionals",
      description:
        "Forge meaningful connections during our Networking Opportunities, providing a platform to engage with peers and industry professionals. Cultivate valuable relationships and broaden your professional network.",
    },
    {
      icon: "Rocket",
      title: "Exhibitor Booths Showcasing the Latest Technologies",
      description:
        "Stay at the forefront of innovation by exploring our Exhibitor Booths, where cutting-edge technologies take center stage. Immerse yourself in the latest advancements, connecting with industry leaders shaping the future.",
    },
  ];

  const contactInfo = [
    {
      icon: "Mail",
      iconFill: false,
      label: "Email",
      desc: "iCORE is here to help!",
      link: "mailto:icore2024@national-u.edu.ph",
      linkText: "icore2024@national-u.edu.ph",
    },
    {
      icon: "LinkedIn",
      iconFill: true,
      label: "LinkedIn",
      desc: "Connect with us.",
      link: "https://www.linkedin.com/in/icore2024",
      linkText: "iCORE 2024",
    },
    {
      icon: "Twitter",
      iconFill: true,
      label: "Twitter",
      desc: "Follow more updates.",
      link: "https://x.com/iCore2024ph",
      linkText: "@iCORE2024PH",
    },
    {
      icon: "MapPin",
      iconFill: false,
      label: "Venue",
      desc: "Come to our place.",
      link: "https://maps.app.goo.gl/vsgucAGGwPBEUWQx7",
      linkText: "National University - MOA",
    },
  ];

  const collaborators = [
    {
      image: AUFE,
      imageSize: "lg",
    },
    {
      image: AXU,
      imageSize: "lg",
    },
    {
      name: "Bicol University",
      image: BU,
      imageSize: "sm",
    },
    {
      name: "University of the Cordilleras",
      image: UTC,
      imageSize: "sm",
    },
    {
      name: "Don Mariano Marcos Memorial State University",
      image: DMMMSU,
      imageSize: "sm",
    },
    {
      name: "University of San Carlos",
      image: USC,
      imageSize: "sm",
    },
    {
      name: "National University - MOA",
      image: NUMOA,
      imageSize: "sm",
    },
    {
      name: "Laguna State Polytechnic University",
      image: LSPU,
      imageSize: "sm",
    },
    // {
    //   name: "Jiangxi V&T College of Communications",
    //   image: JVTCCL,
    //   imageSize: "lg",
    // },
    {
      name: "Jiangxi V&T College of Communications",
      image: JVTCC,
      imageSize: "sm",
    },
  ];

  const sponsors = [
    {
      name: "YIBU Education",
      image: YIBU,
      imageSize: "sm",
    },
    {
      name: "Alibaba Cloud",
      image: AC,
      imageSize: "sm",
    },
  ];

  return (
    <>
      <section className="hero-container">
        <div className="hero-wrapper">
          <h1>
            Future Earth: Technology's Role in Shaping Sustainable Outcomes
          </h1>
          <div className="subheading-wrapper">
            <h3>
              Join us at the 3rd International Conference on Information and
              Computing Research (iCORE) 2024 on July 19-20 as we explore
              innovative solutions to global challenges, fostering a more
              sustainable tomorrow.
            </h3>
          </div>
          <div className="hero-cta">
            <NavLink to="/about-us" className="btn-white">
              Learn More
            </NavLink>
            <a
              href={CallForPaperPDF}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Call for Paper
            </a>
            <a
              href="https://easychair.org/conferences/?conf=icore2024"
              className="btn-white"
              target="_blank"
            >
              Submit Paper
            </a>
          </div>
        </div>
      </section>

      <section className="theme">
        <div className="wrapper">
          <div className="content">
            <div className="conference-highlights">
              {conferenceHighlights.map(({ icon, title, description }, i) => {
                return (
                  <ConferenceHighlightItem
                    key={i}
                    icon={icon}
                    title={title}
                    description={description}
                  />
                );
              })}
              <CountdownTimer targetDate="7/19/2024" />
            </div>
          </div>
          {/* <div className="image">
            <img src={HomeImage} alt="research-conference-presenter" />
          </div> */}
        </div>
      </section>

      {/* COLLABORATORS */}
      <section className="collaborations-wrapper">
        <div className="wrapper">
          <p>Organized by</p>
          <div className="organizers divider">
            <div className="organizers-item">
              <div className="image-wrapper">
                <img src={NU} alt="national-university" />
              </div>
              {/* <p>National University</p> */}
            </div>
          </div>
          <p>In collaboration with</p>
          <div className="collaborators-container divider">
            {collaborators.map(({ name, image, imageSize }, i) => {
              return (
                <div className={`collaborator-item ${imageSize}`} key={i}>
                  <div className="image-wrapper">
                    <img src={image} alt={name} />
                  </div>
                  {name && <p>{name}</p>}
                </div>
              );
            })}
          </div>
          <p>Sponsors</p>
          <div className="collaborators-container sponsors">
            {sponsors.map(({ name, image, imageSize }, i) => {
              return (
                <div className={`collaborator-item ${imageSize}`} key={i}>
                  <div className="image-wrapper">
                    <img src={image} alt={name} />
                  </div>
                  {name && <p>{name}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPORTANT DATES */}
      <section id="important-dates">
        <div className="header-container">
          <div className="header-wrapper">
            <span>Important Dates</span>
            <h1 className="heading">Unlocking Milestones</h1>
            <p className="subheading">
              Save these key dates, ensuring your active participation in the
              culmination of these milestones on the conference days.
            </p>
          </div>
        </div>
        <div className="wrapper">
          <div className="dates-wrapper">
            <ul className="date-list">
              {importantDatesData &&
                importantDatesData.map(
                  (
                    {
                      label,
                      dateText,
                      dateTextShort,
                      dateEnd,
                      oldDateText,
                      oldDateEnd,
                      oldDateTextShort,
                    },
                    i
                  ) => {
                    return (
                      <ImportantDateItem
                        key={i}
                        label={label}
                        dateText={dateText}
                        dateTextShort={dateTextShort}
                        dateEnd={dateEnd}
                        oldDateText={oldDateText}
                        oldDateTextShort={oldDateTextShort}
                        oldDateEnd={oldDateEnd}
                      />
                    );
                  }
                )}
            </ul>
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section className="venue">
        <div className="header-container">
          <div className="header-wrapper">
            <span>Venue</span>
            <h1 className="heading">
              Bridging Modern Excellence with Cultural Richness
            </h1>
            <p className="subheading">
              The conference will be held at the vibrant National
              University-MOA, Philippines, offering a unique blend of modern
              amenities and natural beauty. Participants will have the
              opportunity to explore the region's rich cultural heritage while
              engaging in stimulating discussions on the future of information
              and computing research.
            </p>
          </div>
        </div>
        <div className="wrapper">
          <div className="image-wrapper">
            <img src={Venue} alt="NU-MOA" />
          </div>
          <div className="contact-grid">
            {contactInfo.map((v, i) => {
              const { icon, iconFill, label, desc, link, linkText } = v;

              return (
                <ContactGridItem
                  key={i}
                  icon={icon}
                  iconFill={iconFill}
                  label={label}
                  desc={desc}
                  link={link}
                  linkText={linkText}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
