import { Link, NavLink } from "react-router-dom";
import TrackGridItem from "../components/TrackGridItem";
import Mac from "../assets/images/macbook-sample.png";

const Submission = () => {
  const tracks = [
    {
      icon: "Heart",
      title: "Artificial Intelligence",
      desc: "Explore diverse aspects of Artificial Intelligence that covers Deep Learning, Machine Learning, Neural Networks, Reinforcement Learning, Natural Language Processing, Data Mining, and Conversation Agents.",
    },
    {
      icon: "Refresh",
      title: "Digital Signal Processing and Machine Vision",
      desc: "Explore categories such as Computer Graphics, Signal and Image Processing, Computer Vision, Geographic Information Systems, Augmented Reality, and Virtual Reality.",
    },
    {
      icon: "PlusCircle",
      title: "Emerging Technologies",
      desc: "Dive into the forefront of technology with categories spanning Mobile Computing, Games and Simulations, Internet of Things, Ubiquitous Computing, Cloud Computing and many more.",
    },
    {
      icon: "CreditCard",
      title: "E-services and data storage management",
      desc: "Discover categories such as Management Information Systems, Data Warehousing, E-Commerce, E-Government, E-Learning, and M-Learning in the realm of emerging technologies",
    },
  ];
  return (
    <>
      <section id="submission">
        <div className="header-container">
          <div className="header-wrapper">
            <span>Submission</span>
            <h1 className="heading">Change The World</h1>
            <p className="subheading">
              The conference will accept papers, but not limited to the
              following research and development tracks
            </p>
          </div>
        </div>
        <div className="tracks-wrapper">
          <div className="wrapper">
            <div className="tracks-grid">
              {tracks.map(({ icon, title, desc }, i) => {
                return (
                  <TrackGridItem
                    key={i}
                    icon={icon}
                    title={title}
                    desc={desc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="wrapper">
        <div className="questions-container">
          <div className="questions-wrapper">
            <div className="question-icon"></div>
            <div className="question-field">
              <p className="label">Still have questions?</p>
              <p className="description">
                Can't find the answer you're looking for? Please chat to our
                friendly team.
              </p>
            </div>
            <Link to="/about-us#contact-us" className="btn-primary cta">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="submission-container">
          <h2>Submit your paper</h2>
          <p>Join over 300+ participants already growing with iCORE.</p>
          <div className="cta">
            <Link to="/publication" className="btn-white">
              Learn More
            </Link>
            <Link to="/publication" className="btn-primary">
              Fill Out Form
            </Link>
          </div>
          <div className="image-wrapper">
            <img src={Mac} alt="publication" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Submission;
