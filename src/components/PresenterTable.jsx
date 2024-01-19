const PresenterTable = ({ data }) => {
  return (
    <div className={`presenter-table cols-${data.rowHeaders.length}`}>
      {data.rowHeaders.map((v, i) => {
        return (
          <div className="row-header" key={i}>
            <span>{v}</span>
          </div>
        );
      })}
      {data.items.map((v, i) => {
        return Object.entries(v).map((e) => {
          if (e[0] != "author") {
            return (
              <div className="row" key={`${i}-${e[0]}`}>
                {e[0] == "title" ? (
                  <span>
                    {e[1]} <br /> {data.items[i].author}
                  </span>
                ) : (
                  <span>{e[1]}</span>
                )}
              </div>
            );
          }
        });
      })}
    </div>
  );
};
export default PresenterTable;
