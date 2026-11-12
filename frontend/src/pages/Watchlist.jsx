import Navbar from "../components/Navbar";
import WatchListCard from "../components/WatchListCard";
import "../pages/Watchlist.css";
import { Tv, Film, Search } from "lucide-react";

import interstellar from "../assets/images/Interstellar.jpg.webp";
import inception from "../assets/images/Inception.jpg.webp";
import breakingBad from "../assets/images/BreakingBad.jpg.webp";

function Watchlist() {
  const watchList = [
    { id: 1, title: "Interstellar", type: "Movie", imageUrl: interstellar },
    { id: 2, title: "Inception", type: "Movie", imageUrl: inception },
    {
      id: 3,
      title: "Breaking Bad",
      type: "TV Show",
      imageUrl: breakingBad,
    },
  ];
  return (
    <>
      <div className="watchlist-page">
        <h1>Watchlist</h1>

        <div className="watchlist-filter-container">
          <div className="watchlist-filter-buttons">
            <button>All</button>
            <button>
              <Film size={13} />
              Movies
            </button>
            <button>
              <Tv size={13} />
              TV Shows
            </button>
          </div>

          <div className="watchlist-search">
            <Search size={13} />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="watchlist-container">
          {watchList.map((media) => (
            <WatchListCard
              id={media.id}
              title={media.title}
              type={media.type}
              poster={media.imageUrl}
            />
          ))}
        </div>
      </div>

      <Navbar />
    </>
  );
}

export default Watchlist;
