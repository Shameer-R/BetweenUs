import Navbar from "../components/Navbar";
import "./DateIdeas.css";
import { Heart } from "lucide-react";
import DateIdeaModal from "../components/DateIdeaModal";
import DateIdeaCard from "../components/DateIdeaCard";
import { useState } from "react";

function DateIdeas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateIdeas, setDateIdeas] = useState([]);

  function addDateIdea(newIdea) {
    setDateIdeas((prevIdeas) => [...prevIdeas, newIdea]);
  }

  return (
    <>
      <main className="date-ideas-container">
        <div className="date-ideas-header-container">
          <h1>Date Ideas</h1>

          {dateIdeas.length > 0 && (
            <button
              className="add-date-idea-button"
              onClick={() => setIsModalOpen(true)}
            >
              {" "}
              + Add Idea
            </button>
          )}
        </div>

        {dateIdeas.length == 0 && (
          <div className="empty-date-ideas-container">
            <Heart size={48} color="#bd86f5" />
            <p>Nothing here yet! Add a date idea to get started.</p>
            <button
              className="add-date-idea-button"
              onClick={() => setIsModalOpen(true)}
            >
              {" "}
              + Add Idea
            </button>
          </div>
        )}

        <div className="date-ideas-list">
          {dateIdeas.map((idea) => (
            <DateIdeaCard
              key={idea.id}
              dateTitle={idea.dateTitle}
              dateCategory={idea.dateCategory}
              dateDescription={idea.dateDescription}
              dateBudget={idea.dateBudget}
              dateStatus={idea.dateStatus}
            />
          ))}
        </div>

        {isModalOpen && (
          <DateIdeaModal
            onClose={() => setIsModalOpen(false)}
            addDateIdea={addDateIdea}
          />
        )}

        <Navbar />
      </main>
    </>
  );
}

export default DateIdeas;
