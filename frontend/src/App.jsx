import { useState } from "react";
import { SquareCheckBig, Clapperboard, Heart, Lightbulb } from "lucide-react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";

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
        <FeatureButton featureName="Date Ideas" Icon={Lightbulb} />
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
      <Navbar />
    </>
  );
}

export default App;
