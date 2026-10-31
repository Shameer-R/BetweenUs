import Navbar from "../components/Navbar";
import "./DateIdeas.css";
import { Heart } from "lucide-react";
import DateIdeaModal from "../components/DateIdeaModal";

function DateIdeas() {
  return (
    <>
      <main className="date-ideas-container">
        <div className="date-ideas-header-container">
          <h1>Date Ideas</h1>
        </div>

        <p>Our future adventures together!</p>

        <div className="empty-date-ideas-container">
          <Heart size={48} color="#bd86f5" />
          <p>Nothing here yet! Add a date idea to get started.</p>
          <button className="add-date-idea-button"> + Add Idea</button>
        </div>

        <DateIdeaModal />
        <Navbar />
      </main>
    </>
  );
}

export default DateIdeas;
