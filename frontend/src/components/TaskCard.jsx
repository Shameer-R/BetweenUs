import "../components/TaskCard.css";

function TaskCard() {
  return (
    <>
      <div className="task-card">
        <h2 className="task-header">Upcoming Wedding</h2>
        <h3 className="task-date">November 19th</h3>
        <span>
          <input type="checkbox" id="RSVP" name="RSVP" />
          <label for="RSVP">RSVP</label>
        </span>
        <button className="task-submit-button">Add Item</button>
      </div>
    </>
  );
}

export default TaskCard;
