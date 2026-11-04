import "../components/DateIdeaCard.css";

function DateIdeaCard({
  dateTitle,
  dateCategory,
  dateDescription,
  dateBudget,
  dateStatus,
}) {
  return (
    <>
      <div className="date-idea-card">
        <div className="date-idea-card-header">
          <h3>{dateTitle}</h3>
          <p className="date-idea-category">{dateCategory}</p>
        </div>

        <p>{dateDescription}</p>

        <div className="date-idea-card-footer">
          <p>
            {dateBudget === "low"
              ? "$"
              : dateBudget === "medium"
                ? "$$"
                : "$$$"}
          </p>
          <p>{dateStatus ? "Completed" : "Not Completed"}</p>
        </div>
      </div>
    </>
  );
}

export default DateIdeaCard;
