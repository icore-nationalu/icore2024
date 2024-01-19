import { Link } from "react-router-dom";
import TestImage from "../assets/test-image.png";
import Icon from "../components/Icon";
import SpeakerListItem from "../components/SpeakerListItem";
import speakersData from "../assets/data/speakers.json";
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
        </div>
      </section>
    </>
  );
};
export default Speakers;
