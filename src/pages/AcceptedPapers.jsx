import Papers from "../assets/data/papers.json";

const AcceptedPapers = () => {
  return (
    <>
      <section id="accepted-papers">
        <div className="header-wrapper">
          <h1 className="heading">Accepted Papers</h1>
        </div>
      </section>
      <section className="accepted-paper-container">
        <div className="wrapper">
          <div className="accepted-paper-wrapper">
            <ul>
              {Papers.map(({ title, authors, isWithdrawn }, i) => {
                return (
                  <li
                    className={`paper-item ${isWithdrawn ? "withdrawn" : ""}`}
                    key={i}
                  >
                    <p className="paper-title">
                      <span>{title}</span> {isWithdrawn && "(WITHDRAWN)"}
                    </p>
                    <p className="paper-authors">
                      {authors.map((v, i) => {
                        const isLast = authors.length - 1 == i;

                        return authors.length == 1 ? (
                          <span key={i}>{v}</span>
                        ) : isLast ? (
                          <span key={i}> and {v}</span>
                        ) : (
                          <span key={i}>{v}, </span>
                        );
                      })}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default AcceptedPapers;
