import { data } from "react-router";
import "../components/DateIdeaModal.css";
import { X } from "lucide-react";

function DateIdeaModal({ onClose, addDateIdea }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newIdea = {
      id: crypto.randomUUID,
      dateTitle: formData.get("date-idea"),
      dateCategory: formData.get("category"),
      dateDescription: formData.get("description"),
      dateBudget: formData.get("budget"),
      dateStatus: false,
    };

    addDateIdea(newIdea);
    onClose();

    console.log("Form submitted");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Add Date Idea</h2>
          <button
            type="button"
            className="close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <form className="date-idea-form" onSubmit={handleSubmit}>
          <label htmlFor="date-idea">Date Idea:</label>
          <input type="text" id="date-idea" name="date-idea" required />
          <label type="select" htmlFor="category">
            Category:
          </label>
          <select id="category" name="category" required>
            <option value="">Select a category</option>
            <option value="cuisine">Food & Drinks</option>
            <option value="outdoors">Outdoors</option>
            <option value="fun">Fun</option>
            <option value="creative">Creative</option>
            <option value="relaxing">Relaxing</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="budget">Estimated Cost:</label>
          <select id="budget" name="budget" required>
            <option value="">Select a budget</option>
            <option value="low">$</option>
            <option value="medium">$$</option>
            <option value="high">$$$</option>
          </select>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            placeholder="Describe your date idea..."
            rows={4}
          />
          <button className="submit-button" type="submit">
            Add Idea
          </button>
        </form>
      </div>
    </div>
  );
}

export default DateIdeaModal;
