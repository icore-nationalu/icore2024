import { Link } from "react-router-dom";
import speakersData from "../assets/data/speakers.json";

import getImage from "../assets/images/committee/square/index.jsx";
const Speakers = () => {
  return (
    <>
      <section id="speakers">
        <div className="header-wrapper">
          <span>The Speakers</span>
          <h1 className="heading">Innovators Unleashed</h1>
          <p className="subheading">
            Get ready to engage with thought leaders, visionaries, and pioneers
            who are shaping the future of technology.
          </p>
        </div>
      </section>

      <section>
        <div className="wrapper">
          <div className="speakers-list">
            <div className="speaker-item-container">
              <div className="image-wrapper">
                <img src={getImage("Simon See")} alt="simon-see" />
              </div>
              <div className="bio">
                <div className="speaker-name">
                  <Link
                    to="https://www.linkedin.com/in/simonsee/"
                    target="_blank"
                  >
                    Simon See
                  </Link>
                </div>
                <div className="speaker-position">
                  Senior Director, Chief Solution Architect and Global Head,
                  NVIDIA AI Technology Center
                </div>
                <div className="speaker-bio">
                  Professor See is currently involved in a number of
                  International computational, mathematical science projects and
                  national AI initiatives. Recently Dr Simon has been appointed
                  as the Executive Director of the ASEAN Applied Research Centre
                  (AARC). His research interests are in the area of
                  High-Performance Computing, Big Data, Artificial Intelligence,
                  Machine Learning, Computational Science, Applied Mathematics
                  and Simulation Methodology.
                </div>
              </div>
            </div>

            <div className="speaker-item-container">
              <div className="image-wrapper">
                <img
                  src={getImage("Vladimir Mariano")}
                  alt="vladimir-mariano"
                />
              </div>
              <div className="bio">
                <div className="speaker-name">
                  <Link
                    to="https://yseali.fulbright.edu.vn/en/faculty/vladimir-mariano-phd"
                    target="_blank"
                  >
                    Dr. Vladimir Mariano
                  </Link>
                </div>
                <div className="speaker-position">
                  Lead Faculty for Technology and Innovation, YSEALI Academy of
                  Fulbright University Vietnam.
                </div>
                <div className="speaker-bio">
                  Dr. Vladimir Mariano (Vlad) is the Lead Faculty for Technology
                  and Innovation at the YSEALI Academy of Fulbright University
                  Vietnam. Vlad graduated with a Ph.D. in Computer Science and
                  Engineering at the Pennsylvania State University, with
                  research interests in machine learning and computer vision.
                </div>
              </div>
            </div>

            <div className="speaker-item-container">
              <div className="image-wrapper">
                <img src={getImage("Julian Salazar")} alt="julian-salazar" />
              </div>
              <div className="bio">
                <div className="speaker-name">
                  <Link to="https://julianslzr.com/" target="_blank">
                    Julian Salazar
                  </Link>
                </div>
                <div className="speaker-position">
                  Senior Research Scientist on Perception Team, Google Research
                </div>
                <div className="speaker-bio">
                  Julian Salazar is a Senior Research Scientist on the
                  Perception team at Google Research, where he is technical lead
                  for a generative AI effort in speech and dialogue. Prior to
                  this he spent over five years at AWS AI Labs, where he
                  developed language models, acoustic models, and novel text
                  adaptation capabilities for Amazon Transcribe. His research
                  centers around large speech and language models, low-resource
                  NLP, non-autoregressive ASR, and most recently speech audio
                  generation. Julian grew up in the Philippines and Canada and
                  has a degree in Mathematics from Harvard University.
                </div>
              </div>
            </div>

            <div className="speaker-item-container">
              <div className="image-wrapper">
                <img
                  src={getImage("Phaedra Boinodiris")}
                  alt="phaedra-boinodiris"
                />
              </div>
              <div className="bio">
                <div className="speaker-name">
                  <Link to="https://linkedin.com/in/phaedra/" target="_blank">
                    Phaedra Boinodiris
                  </Link>
                </div>
                <div className="speaker-position">
                  Global Leader for Trustworthy AI, IBM Consulting
                </div>
                <div className="speaker-bio">
                  Phaedra Boinodiris, based in Morrisville, North Carolina,
                  stands at the forefront of responsible AI leadership and
                  innovation. Currently serving as IBM Consulting's Global
                  Leader for Trustworthy AI, she brings over 13 years of
                  experience to the field. Phaedra is renowned for her expertise
                  in scaling AI responsibly, working to mitigate risks for
                  clients through a comprehensive offering that addresses
                  cultural adoption, AI engineering, and governance. As an
                  acclaimed author of 'AI for the Rest of Us' and a prolific
                  public speaker, Phaedra is deeply committed to advancing AI
                  ethically. Her notable accolades include the United Nations
                  Woman of Influence in STEM and Inclusivity Award in 2019, the
                  Social Innovator Award by IBM in 2018, and being recognized as
                  one of the Top 100 Women in the Games industry by Women in
                  Games International in 2007
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Speakers;
