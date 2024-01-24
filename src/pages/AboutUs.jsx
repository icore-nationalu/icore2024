import { useEffect } from "react";
import ContactGridItem from "../components/ContactGridItem";
import Image from "../assets/images/about-us-v2.jpg";

import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const location = useLocation();

  const contactInfo = [
    {
      icon: "Mail",
      iconFill: false,
      label: "Email",
      desc: "iCore is here to help!",
      link: "mailto:icore2024@national-u.edu.ph",
      linkText: "icore2024@national-u.edu.ph",
    },
    {
      icon: "LinkedIn",
      iconFill: true,
      label: "LinkedIn",
      desc: "Connect with us.",
      link: "https://www.linkedin.com",
      linkText: "iCORE 2024",
    },
    {
      icon: "Twitter",
      iconFill: true,
      label: "Twitter",
      desc: "Follow more updates.",
      link: "https://www.twitter.com",
      linkText: "@iCORE2024",
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

  useEffect(() => {
    if (location.hash != "") {
      const el = document.getElementById(location.hash.split("#")[1]);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <section id="about">
        <div className="header-container">
          <div className="header-wrapper">
            <span>About Us</span>
            <h1 className="heading">Innovating Boundaries with iCORE</h1>
            <p className="subheading">
              iCORE is more than a conference. It's a catalyst for advancing
              knowledge, fostering global collaborations, and driving real-world
              technological innovations.
            </p>
          </div>
        </div>
        <div className="wrapper">
          <div className="image-wrapper">
            <img src={Image} alt="conference" />
          </div>
        </div>
      </section>

      <section className="story">
        <div className="wrapper">
          <p className="label">Our story</p>
          <h2 className="heading">iCORE's Academic Odyssey</h2>
          <p className="subheading">
            Where knowledge sets sail, and innovation takes flight.
          </p>
          <div className="content">
            <div>
              <p>
                The International Conference on Information and Computing
                Research (iCORE) is a significant event in the field of computer
                science, information technology, and related areas. Year after
                year, iCORE brings together a diverse array of academics,
                researchers, practitioners, and industry experts from across the
                globe, creating a vibrant platform for exchanging cutting-edge
                ideas and advancements in the ever-evolving field. This
                conference is a convergence of the latest research findings,
                technological breakthroughs, and theoretical frameworks, shaping
                the future of computing research. <br /> <br />
                At the heart of iCORE lies a commitment to fostering
                interdisciplinary collaboration and pushing the boundaries of
                knowledge. The conference's scope encompasses a broad spectrum
                of topics, reflecting the multifaceted nature of the field. From
                foundational algorithms and data structure principles to
                emerging technologies like computing for social good, artificial
                intelligence, machine learning, and the Internet of Things. The
                event serves as a forum for presenting original research and
                facilitates insightful discussions on the societal implications
                and ethical considerations associated with the rapid
                advancements in technology. <br /> <br />
                One of the hallmarks of iCORE is its rigorous peer-review
                process, ensuring that only the highest quality and most
                impactful research finds its way to the conference program. Both
                seasoned and emerging researchers vie for the opportunity to
                present their work to a discerning audience, seeking feedback,
                validation, and collaboration. The conference papers cover many
                themes, from theoretical contributions that redefine the
                conceptual underpinnings of computing to applied research with
                immediate practical implications for industries and communities.
                This diversity in content mirrors the dynamic nature of the
                field, where theoretical abstraction and real-world applications
                coalesce. <br /> <br />
                The keynote speakers at iCORE are luminaries in their respective
                fields, providing attendees with insights into the forefront of
                research and development. These keynotes serve not only to
                inspire but also to contextualize the broader impact of the work
                being presented at the conference. Attendees gain a holistic
                understanding of the field's current state, its challenges, and
                the potential avenues for future exploration. The interactive
                sessions that follow keynote presentations foster a sense of
                community, where researchers can engage in meaningful dialogues,
                cross-pollinate ideas, and forge collaborations that transcend
                geographical and institutional boundaries. <br /> <br />
              </p>
            </div>
            <div>
              <p>
                Beyond the formal sessions, iCORE offers a plethora of
                opportunities for networking and collaboration. Poster sessions,
                workshops, and panel discussions allow researchers to showcase
                their work in an informal setting, encouraging one-on-one
                interactions and in-depth discussions. The conference fosters a
                sense of camaraderie, where attendees share not only their
                successes but also the challenges and setbacks, they encountered
                in their research journeys. This spirit of openness and
                collaboration contributes to the collective growth of the
                community, propelling the field of information and computing
                research forward. <br /> <br />
                In addition to its academic focus, iCORE is attuned to the
                practical implications of research in the real world. Industry
                partnerships, technology demonstrations, and exhibitor booths
                allow attendees to explore the latest innovations and
                applications firsthand. This bridge between academia and
                industry is a testament to iCORE's commitment to driving
                technological advancements that have a tangible impact on
                society. Collaborations forged at iCORE have led to
                breakthroughs in various domains, from healthcare and finance to
                energy and transportation, illustrating the transformative power
                of interdisciplinary research. <br /> <br />
                The international dimension of iCORE adds a rich layer of
                cultural diversity to the conference. Researchers from different
                continents converge to share their perspectives, bringing a
                global context to the discussions. The cross-cultural exchange
                enriches the intellectual fabric of the conference and fosters a
                sense of global citizenship among the participants. It is not
                uncommon for collaborations to extend beyond the conference,
                resulting in joint research projects, international
                partnerships, and collaborative initiatives that transcend
                borders. <br /> <br />
                The impact of iCORE reverberates far beyond the confines of the
                conference venue, influencing the trajectory of research,
                industry practices, and societal norms. In its commitment to
                excellence, collaboration, and innovation, iCORE remains at the
                forefront of advancing the frontiers of knowledge, pushing the
                boundaries of what is possible in the dynamic intersection of
                computer science, information technology, and technology as a
                whole. <br /> <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-us" className="contact-us">
        <div className="header-container">
          <div className="header-wrapper">
            <span>Contact Us</span>
            <h1 className="heading">We'd love to hear from you</h1>
            <p className="subheading">Come meet and chat with us.</p>
          </div>
        </div>
        <div className="wrapper">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.1954289965065!2d120.97830487487137!3d14.53081128594735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cb3444b5672b%3A0xe6c66549896c0362!2sNational%20University%20MOA!5e0!3m2!1sen!2sph!4v1705222180627!5m2!1sen!2sph"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
export default AboutUs;
