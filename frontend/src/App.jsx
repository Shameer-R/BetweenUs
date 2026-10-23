import { useState } from "react";
import { SquareCheckBig, CalendarDays, Clapperboard } from "lucide-react";
import "./App.css";

function FeatureButton({ featureName, Icon }) {
  return (
    <>
      <button className="feature-button">
        <Icon size={24} />
        <span>{featureName}</span>
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <header>
        <h3>Good Morning</h3>
        <h2>Karyme & Shameer 💜</h2>
      </header>
      <div>
        <FeatureButton featureName="Tasks" Icon={SquareCheckBig} />
        <FeatureButton featureName="Calendar" Icon={CalendarDays} />
        <FeatureButton featureName="Watchlist" Icon={Clapperboard} />
      </div>
    </>
  );
}

export default App;
