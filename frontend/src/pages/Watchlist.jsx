import Navbar from "../components/Navbar";
import WatchListCard from "../components/WatchListCard";
import "../pages/Watchlist.css";

function Watchlist() {
  return (
    <>
      <h1>Watchlist</h1>
      <div className="watchlist-container">
        <WatchListCard />
        <WatchListCard />
        <WatchListCard />
        <WatchListCard />
      </div>
      <Navbar />
    </>
  );
}

export default Watchlist;
