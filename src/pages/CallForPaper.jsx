import { Fragment } from "react";
import CallForPaperPDF from "../assets/documents/iCORE-Call-for-Papers.pdf";
import { Link } from "react-router-dom";

const CallForPaper = () => {
  const tracks = [
    {
      trackName: "Sustainability and Social Good",
      trackItems: [
        "Systems for Social Good",
        "Responsible AI",
        "Explainable AI",
        "Generative AI",
        "Societal Implications of Technology",
      ],
    },
    {
      trackName: "AI and Machine Learning",
      trackItems: [
        "Human Language Technology",
        "Intelligent Computing Applications",
        "Computer Vision",
      ],
    },
    {
      trackName: "Hypermedia",
      trackItems: [
        "Animation",
        "Multimedia Systems",
        "Interactive Systems",
        "Game & Simulations",
        "Meta & Realities",
      ],
    },
    {
      trackName: "Emerging Technologies",
      trackItems: [
        "Education in Engineering and Technology",
        "Data Science, Computing Technologies & Algorithms",
        "Communications Networking",
        "Information & Security",
        "Internet of Everything",
        "Smart Computing",
        "Green Computing",
      ],
    },
  ];
  return (
    <>
      <section id="call-for-paper">
        <div className="header-wrapper">
          {/* <span>Call for Papers</span> */}
          {/* 
          <h1 className="heading">Ignite Change with Your Research</h1>
          <p className="subheading">
            Submit your paper to our esteemed conference, where passionate
            thinkers converge to challenge assumptions, shift paradigms, and
            revolutionize the way we perceive the world.
          </p>
           */}
          <div className="download">
            <a
              href={CallForPaperPDF}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Call for Papers
            </a>
          </div>
        </div>
      </section>
      <section className="call-for-paper-container">
        <div className="wrapper">
          <div>
            <h3>
              Future Earth: Technology's Role in Shaping Sustainable Outcomes
            </h3>
            <p>
              The 3rd International Conference on Information and Computing
              Research (iCORE) 2024 is a significant event in the field of
              computer science, information technology, and related areas. Year
              after year, iCORE brings together a diverse array of academics,
              researchers, practitioners, and industry experts from across the
              globe, creating a vibrant platform for exchanging cutting-edge
              ideas and advancements in the ever-evolving field.
            </p>

            <h3>Submission Guidelines</h3>
            <p>
              Authors are encouraged to submit original, unpublished research
              papers using the{" "}
              <Link to="/assets/iCORE-template.docx" target="_blank">
                iCORE format
              </Link>{" "}
              through the conference submission system. The{" "}
              <a
                href="https://easychair.org/conferences/?conf=icore2024"
                target="_blank"
              >
                Easychair Submission link
              </a>{" "}
              will open on March 30, 2024. Submissions will go through a
              rigorous peer-review process by an expert panel. Accepted papers
              will be presented and published in the conference proceedings.
            </p>
            {tracks.map(({ trackName, trackItems }, i) => {
              return (
                <Fragment key={i}>
                  <h3>
                    Track {i + 1} - {trackName}
                  </h3>
                  <ul>
                    {trackItems.map((v, i) => {
                      return (
                        <li key={i}>
                          <p>{v}</p>
                        </li>
                      );
                    })}
                  </ul>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CallForPaper;
