import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import DateIdeas from "./pages/DateIdeas.jsx";
import Calendar from "./pages/Calendar.jsx";
import Memories from "./pages/Memories.jsx";
import Settings from "./pages/Settings.jsx";
import Tasks from "./pages/Tasks.jsx";
import Watchlist from "./pages/Watchlist.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/date-ideas" element={<DateIdeas />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </>
  );
}

export default App;
