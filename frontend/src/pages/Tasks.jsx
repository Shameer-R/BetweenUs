import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import "../pages/Tasks.css";

function Tasks() {
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

      <Navbar />
    </>
  );
}

export default Tasks;
