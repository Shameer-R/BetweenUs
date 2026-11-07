import "../components/DateIdeaCard.css";
import { Trash2 } from "lucide-react";

function DateIdeaCard({
  dateTitle,
  dateCategory,
  dateDescription,
  dateBudget,
  dateStatus,
  onDateStatusChange,
}) {
  return (
    <>
      <div className={`date-idea-card ${dateStatus ? "completed" : ""}`}>
        <button className="date-idea-card-trash-button">
          <Trash2 size={15} />
        </button>

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
          <input
            type="checkbox"
            checked={dateStatus}
            onChange={onDateStatusChange}
          />
        </div>
      </div>
    </>
  );
}

export default DateIdeaCard;
