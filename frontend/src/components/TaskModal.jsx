import "../components/TaskModal.css";
import { X } from "lucide-react";

function TaskModal({ onClose }) {
  return (
    <>
      <div className="taskmodal-overlay">
        <div className="taskmodal-container">
          <div className="taskmodal-header">
            <h2>Add Task</h2>
            <button
              type="button"
              className="close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          <input placeholder="Enter Task"></input>
          <input type="date" placeholder="Enter Date"></input>

          <button className="task-submit-button">Submit</button>
        </div>
      </div>
    </>
  );
}

export default TaskModal;
