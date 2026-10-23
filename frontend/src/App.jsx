import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Hi, Sham 👋</h1>
      </header>
      <main>
        <span className="up-next">
          <h2>Up next ❤️</h2>
          <p>See all →</p>
        </span>
        <img
          style={{ width: "20%" }}
          src="./src/assets/images/CoralinePoster.jpg"
          alt="Coraline Poster"
        />
        <h2>Our Watchlist</h2>
        <p>Find our next movie together</p>
      </main>
    </>
  );
}

export default App;
