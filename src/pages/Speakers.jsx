import { Link } from "react-router-dom";
import TestImage from "../assets/test-image.png";
import Icon from "../components/Icon";
import SpeakerListItem from "../components/SpeakerListItem";
import speakersData from "../assets/data/speakers.json";

import getImage from "../assets/images/committee/square/index.jsx";
const Speakers = () => {
  const { keynote, session, moderators } = speakersData;
  const speakers = [
    {
      title: "Keynote Speakers",
      desc: "Experience intellectual enlightenment as industry luminaries share visionary insights at iCORE's Keynote Sessions, illuminating the forefront of information and computing research.",
      data: keynote,
    },
    {
      title: "Session Speakers",
      desc: "Delve into a symphony of expertise with our esteemed Session Speakers. Each presentation is a nuanced exploration, shaping the future trajectory of the field.",
      data: session,
    },
    {
      title: "Panel Discussion Moderators",
      desc: "Guided by seasoned facilitators, our Panel Discussion Moderators steer dialogues that transcend conventional boundaries, fostering a nuanced exploration of diverse perspectives in information and computing research.",
      data: moderators,
    },
  ];
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
            <div className="speaker-item">
              <div className="photo">
                <img src={getImage("Simon See")} alt="" />
              </div>
              <div className="content">
                <div className="speaker-name">
                  <Link
                    to="https://www.linkedin.com/in/simonsee/"
                    target="_blank"
                  >
                    Simon See
                  </Link>
                  <Icon
                    iconName="ExternalLink"
                    stroke="#8693A0"
                    className="icon"
                    height="20px"
                    width="20px"
                  />
                </div>
                <p className="position">
                  <span>Senior Director</span>, Chief Solution Architect and
                  Global Head, NVIDIA AI Technology Center
                </p>
                <p className="description">
                  Professor Simon See is currently the Solution Architecture and
                  Engineering Senior Director, Chief Solution Architect & Global
                  Head for Nvidia AI Technology Center, NVIDIA Corporation. He
                  is also a Professor at Shanghai Jiao Tong University,
                  Professor in Beijing University of Posts and
                  Telecommunications (BUPT), and Professor in Universitas
                  Indonesia (UI). He is being conferred as a Distinguished Fudan
                  Scholar in September 2018 by Fudan University, Shanghai,
                  China. Previously Professor See is also the Chief Scientific
                  Computing Advisor for BGI (China) and has a position in
                  Nanyang Technological University (Singapore) and King-Mong
                  Kung University of Technology (Thailand). Professor See is
                  currently involved in a number of International computational,
                  mathematical science projects and national AI initiatives.
                  Recently Dr Simon has been appointed as the Executive Director
                  of the ASEAN Applied Research Centre (AARC). His research
                  interests are in the area of High-Performance Computing, Big
                  Data, Artificial Intelligence, Machine Learning, Computational
                  Science, Applied Mathematics and Simulation Methodology.
                  Professor See is also leading some of the AI initiatives in
                  the Asia Pacific. He is a Steering Committee member of NSCC’s
                  flagship High Performance Computing Conference Supercomputing
                  Asia (SCA) since March 2018. He has published over 200 papers
                  in these areas and has won various awards.
                  <br /> <br />
                  Professor See is a Fellow member of IET, Chairman of TaskForce
                  of IEEE’s CIS Neural Networks Technical Committee, a member of
                  IEEE, SIAM, AAAI, SCS, and also on the Advisory Team of AIP
                  (AI Professional Association), International Advisory Board of
                  Institute of Operations Research & Analytics (IORA), Advisory
                  Team of Machine Intelligence and Data Analytics Research
                  Centre (MIDARC), School of Computing Sciences (India) and
                  Board of Studies, MS Tech Programs of Mahindra University,
                  Editorial Board Member of Journal of Computational and
                  Cognitive Engineering (JCCE), and the committee member of more
                  than 50 conferences.
                  <br /> <br />
                  Professor See graduated from the University of Salford (UK)
                  with a Ph.D. in electrical engineering and numerical analysis
                  in 1993. Prior to joining NVIDIA, Dr. See worked for SGI, DSO
                  National Lab. of Singapore, IBM, International Simulation Ltd
                  (UK), Sun Microsystems and Oracle. He is also providing
                  consultancy to a number of national research and
                  supercomputing centers
                </p>
              </div>
            </div>

            <div className="speaker-item">
              <div className="photo">
                <img src={getImage("Vladimir Mariano")} alt="" />
              </div>
              <div className="content">
                <div className="speaker-name">
                  <Link
                    to="https://yseali.fulbright.edu.vn/en/faculty/vladimir-mariano-phd/?fbclid=IwAR1Jv19ZethiTqDuNwYbLs4sbrfcwUasPB__lTdj8He9hFwcl24Vi6V02GM"
                    target="_blank"
                  >
                    Dr. Vladimir Mariano
                  </Link>
                  <Icon
                    iconName="ExternalLink"
                    stroke="#8693A0"
                    className="icon"
                    height="20px"
                    width="20px"
                  />
                </div>
                <p className="position">
                  <span>Lead Faculty for Technology and Innovation</span>,
                  YSEALI Academy of Fulbright University Vietnam.
                </p>
                <p className="description">
                  Dr. Vladimir Mariano (Vlad) is the Lead Faculty for Technology
                  and Innovation at the YSEALI Academy of Fulbright University
                  Vietnam. Vlad graduated with a Ph.D. in Computer Science and
                  Engineering at the Pennsylvania State University, with
                  research interests in machine learning and computer vision. He
                  has worked on industrial projects with the National Robotics
                  Engineering Center of Carnegie Mellon University and
                  VideoMining Corporation in Pennsylvania, USA. He published
                  three U.S. patents with VideoMining.
                  <br /> <br />
                  As an academic, Vlad has served as Director and Associate
                  Professor of the Institute of Computer Science at the
                  University of the Philippines Los Banos. In Vietnam, Vlad
                  served as Lecturer and Research Coordinator of the School of
                  Science and Technology at the Royal Melbourne Institute of
                  Technology. During his time in academia, Vlad also co-founded
                  and served as Chief Technology Officer for several technology
                  startup companies. These startups delivered various services
                  including drone-based aerial surveys, video analysis of retail
                  stores and mobile app development for human resource services.
                  <br /> <br />
                  On the side, Vlad teaches kids coding, assembling electronics
                  and making robots. He enjoys traveling, art work and playing
                  the piano.
                </p>
              </div>
            </div>
          </div>
          {/*  
          {speakers &&
            speakers.map(({ title, desc, data }, i) => {
              return (
                <>
                  <div className="speakers-header">
                    <h2 className="heading">{title}</h2>
                    <p className="description">{desc}</p>
                  </div>
                  <div className="speakers-list">
                    {data &&
                      data.map((speaker, index) => {
                        const {
                          speaker_name,
                          speaker_link,
                          speaker_position,
                          speaker_institution,
                          speaker_desc,
                        } = speaker;
                        return (
                          <SpeakerListItem
                            key={index}
                            name={speaker_name}
                            link={speaker_link}
                            position={speaker_position}
                            institution={speaker_institution}
                          />
                        );
                      })}
                  </div>
                </>
              );
            })}

            */}
        </div>
      </section>
    </>
  );
};
export default Speakers;
