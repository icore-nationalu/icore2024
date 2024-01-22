const Sponsorship = () => {
  const registration_fee = [
    {
      type: "Bronze $1,000 AUD",
      fee: "Access to one ticket to the conference and one ticket for the Gala Dinner at the Australian Parliament House. We will also display a Logo on the Conference Website and any publications.",
    },
    {
      type: "Silver $3,000 AUD",
      fee: "All features of Bronze plus 3 tickets to the Conference and Gala Dinner plus opportunities for a stall for demos and talks.",
    },
    {
      type: "Gold $5,000 AUD",
      fee: "All features of Bronze and Silver and includes 5 tickets to the conference and gala dinner plus an an opportunity for a speaker to deliver a talk on a subject of conference theme.",
    },
  ];

  const inclusions = [
    "Logo placement on website and other advertising material",
    "Branded items in delegate bagss",
    "Sub-event sponsorship such as the Gala Dinner, Talks or Lunches",
  ];

  return (
    <>
      <section id="registration">
        <div className="header-container">
          <div className="header-wrapper">
            <span>Sponsorship</span>
            <h1 className="heading">Embrace the Power of Partnership</h1>
            <p className="subheading">
              Unlock opportunities and become a proud sponsor of our
              transformative conference. Join forces with us in shaping the
              future together!
            </p>
          </div>
        </div>
      </section>
      <div className="registration-wrapper">
        <div className="wrapper">
          <div>
            <div className="grid-table cols-2">
              <div className="table-header">
                <p>Sponsorships</p>
              </div>
              <div className="table-content">
                <div className="row-header">
                  <span>TYPE</span>
                </div>
                <div className="row-header">
                  <span>FEE</span>
                </div>
                {registration_fee.map((v, i) => {
                  return Object.entries(v).map((e) => {
                    return (
                      <div className="row" key={`${i}-${e[0]}`}>
                        <span>{e[1]}</span>
                      </div>
                    );
                  });
                })}
                <div className="spacer row-header">
                  <span>INCLUSIONS</span>
                </div>
                {inclusions &&
                  inclusions.map((v, i) => {
                    return (
                      <div className="row colspan-2" key={i}>
                        <span>{v}</span>
                      </div>
                    );
                  })}
              </div>
            </div>

            <h3 className="heading">Contact Information</h3>
            <p className="content">
              Email{" "}
              <a href="mailto:icore2024@national-u.edu.ph." className="link">
                icore2024@national-u.edu.ph
              </a>{" "}
              for more information.
            </p>
          </div>

          <section className="acad-db-wrapper">
            <div className="wrapper">
              <p>Sponsors</p>
              <div className="acad-db">
                <div className="acad-db-item"></div>
                <div className="acad-db-item"></div>
                <div className="acad-db-item"></div>
                <div className="acad-db-item"></div>
                <div className="acad-db-item"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Sponsorship;
