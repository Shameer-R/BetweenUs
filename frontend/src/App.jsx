import { useState } from "react";
import {
  SquareCheckBig,
  CalendarDays,
  Clapperboard,
  Heart,
} from "lucide-react";
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
      <div className="feature-buttons">
        <FeatureButton featureName="Tasks" Icon={SquareCheckBig} />
        <FeatureButton featureName="Calendar" Icon={CalendarDays} />
        <FeatureButton featureName="Watchlist" Icon={Clapperboard} />
      </div>
      <div className="upcoming-section">
        <h3>Coming up</h3>
        <div className="upcoming-inner-section">
          <span>
            <h4>Our next date</h4>
            <Heart></Heart>
          </span>
          <p>Nothing planned yet. Add something together!</p>
        </div>
      </div>
    </>
  );
}

export default App;
