import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import DateIdeas from "./pages/DateIdeas.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/date-ideas" element={<DateIdeas />} />
      </Routes>
    </>
  );
}

export default App;
