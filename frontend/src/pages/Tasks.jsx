import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import TaskListModal from "../components/TaskModal";
import "../pages/Tasks.css";
import { useState, useEffect } from "react";

function Tasks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const onNavAdd = () => setIsModalOpen(true);
    window.addEventListener("nav-add-click", onNavAdd);
    return () => window.removeEventListener("nav-add-click", onNavAdd);
  });

  return (
    <>
      <div className="tasks-page">
        <h1>Tasks</h1>
        <div className="task-filter-container">
          <button>Active</button>
          <button>Completed</button>
        </div>
        <div className="task-container">
          <TaskCard />
        </div>
      </div>

      {isModalOpen && <TaskListModal onClose={() => setIsModalOpen(false)} />}

      <Navbar />
    </>
  );
}

export default Tasks;
