import CallForPaperPDF from "../assets/documents/iCORE-Call-for-Papers.pdf";
const CallForPaper = () => {
  return (
    <>
      <section id="call-for-paper">
        <div className="header-wrapper">
          <span>Call for Papers</span>
          <h1 className="heading">Ignite Change with Your Research</h1>
          <p className="subheading">
            Submit your paper to our esteemed conference, where passionate
            thinkers converge to challenge assumptions, shift paradigms, and
            revolutionize the way we perceive the world.
          </p>
          <div className="download">
            <a
              href={CallForPaperPDF}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Call for Paper
            </a>
          </div>
        </div>
      </section>
      <section className="call-for-paper-container">
        <div className="wrapper">
          <div>
            <h3>
              Theme: Future Earth: Technology's Role in Shaping Sustainable
              Outcomes
            </h3>
            <p>
              The International Conference on Information and Computing Research
              (iCORE) is a significant event in the field of computer science,
              information technology, and related areas. Year after year, iCORE
              brings together a diverse array of academics, researchers,
              practitioners, and industry experts from across the globe,
              creating a vibrant platform for exchanging cutting-edge ideas and
              advancements in the ever-evolving field.
            </p>

            <h3>Track 1 - Sustainability and Social Good</h3>
            <ul>
              <li>
                <p>Systems for Social Good</p>
              </li>
              <li>
                <p>Responsible AI</p>
              </li>
              <li>
                <p>Explainable AI</p>
              </li>
              <li>
                <p>Generative AI</p>
              </li>
              <li>
                <p>Societal Implications of Technology</p>
              </li>
            </ul>

            <h3>Track 2 - AI and Machine Learning</h3>
            <ul>
              <li>
                <p>Human Language Technology</p>
              </li>
              <li>
                <p>Intelligent Computing Applications</p>
              </li>
              <li>
                <p>Computer Vision</p>
              </li>
            </ul>

            <h3>Track 3 - Hypermedia</h3>
            <ul>
              <li>
                <p>Animation</p>
              </li>
              <li>
                <p>Multimedia Systems</p>
              </li>
              <li>
                <p>Interactive Systems</p>
              </li>
              <li>
                <p>Game & Simulations</p>
              </li>
              <li>
                <p>Meta & Realities</p>
              </li>
            </ul>

            <h3>Track 4 -Emerging Technologies</h3>
            <ul>
              <li>
                <p>Education in Engineering and Technology</p>
              </li>
              <li>
                <p>Data Science, Computing Technologies & Algorithms</p>
              </li>
              <li>
                <p>Communications Networking</p>
              </li>
              <li>
                <p>Information & Security</p>
              </li>
              <li>
                <p>Internet of Everything</p>
              </li>
              <li>
                <p>Smart Computing</p>
              </li>
              <li>
                <p>Green Computing</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default CallForPaper;
