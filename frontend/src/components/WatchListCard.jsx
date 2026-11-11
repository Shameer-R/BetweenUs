import "../components/WatchListCard.css";
import { Film } from "lucide-react";

function WatchListCard() {
  return (
    <>
      <div className="watchlist-card">
        <div className="poster">
          <Film size={40} />
        </div>
        <h3>Interstellar</h3>
        <p>Movie</p>
      </div>
    </>
  );
}

export default WatchListCard;
