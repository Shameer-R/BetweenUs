import Navbar from "../components/Navbar";
import WatchListCard from "../components/WatchListCard";
import "../pages/Watchlist.css";

function Watchlist() {
  return (
    <>
      <div className="watchlist-page">
        <h1>Watchlist</h1>
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
