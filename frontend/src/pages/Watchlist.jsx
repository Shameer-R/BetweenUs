import Navbar from "../components/Navbar";
import WatchListCard from "../components/WatchListCard";
import "../pages/Watchlist.css";
import { Tv, Film, Search } from "lucide-react";

function Watchlist() {
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
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
        </div>
      </div>

      <Navbar />
    </>
  );
}

export default Watchlist;
