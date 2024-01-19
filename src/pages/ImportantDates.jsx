import Icon from "../components/Icon";
import ImportantDateItem from "../components/ImportantDateItem";
import importantDatesData from "../assets/data/important_dates.json";

const ImportantDates = () => {
  return (
    <>
      <section id="important-dates">
        <div className="header-container">
          <div className="header-wrapper">
            <span>Important Dates</span>
            <h1 className="heading">Navigate through crucial milestones</h1>
            <p className="subheading">
              Save these key dates, ensuring your active participation in the
              culmination of these milestones on the conference days.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <div className="dates-wrapper">
            <ul className="date-list">
              {importantDatesData &&
                importantDatesData.map(
                  ({ label, dateText, dateTextShort, dateEnd }, i) => {
                    return (
                      <ImportantDateItem
                        key={i}
                        label={label}
                        dateText={dateText}
                        dateTextShort={dateTextShort}
                        dateEnd={dateEnd}
                      />
                    );
                  }
                )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default ImportantDates;
