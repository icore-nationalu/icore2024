import iCORE2022 from "../assets/images/icore2022.png";
import iCORE2021 from "../assets/images/icore2021.png";

const PastConferences = () => {
  return (
    <>
      <section id="past">
        <div className="header-wrapper">
          <span>Past Conferences</span>
          <h1 className="heading">Reflections of Excellence</h1>
          <p className="subheading">
            Relive the moments that defined excellence in each edition, paving
            the way for a legacy of intellectual exploration and collaborative
            advancement.
          </p>
        </div>
      </section>
      <section className="past-container">
        <div className="wrapper">
          <div className="past-grid">
            <div className="past-grid-item">
              <div className="image-wrapper">
                <img src={iCORE2022} alt="icore-2022" />
              </div>
              <div className="content-wrapper">
                <div className="title">
                  <a
                    href="https://sites.google.com/view/icore2022/"
                    target="_blank"
                  >
                    2nd International Conference in Information and Computing
                    Research
                  </a>
                </div>
                <div className="description-wrapper">
                  This year's theme aims to promote socially responsible
                  research and studies that would contribute to a better
                  society. This event will serve as a venue to showcase ideas
                  that are vital to post-pandemic recoverydsdsd
                </div>
              </div>
            </div>
            <div className="past-grid-item">
              <div className="image-wrapper">
                <img src={iCORE2021} alt="icore-2021" />
              </div>
              <div className="content-wrapper">
                <div className="title">
                  <a
                    href="https://www.computer.org/csdl/proceedings/icore/2021"
                    target="_blank"
                  >
                    1st International Conference in Information and Computing
                    Research
                  </a>
                </div>
                <div className="description-wrapper">
                  The conference aims to provide a platform for researchers from
                  both the academe and industry to present and exchange research
                  outputs and ideas that can help address the challenges of
                  humankind while advancing research amid the post-pandemic.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PastConferences;
