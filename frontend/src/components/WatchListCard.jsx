import "../components/WatchListCard.css";
import { Film } from "lucide-react";

function WatchListCard({
  id,
  title,
  type,
  poster,
  watched,
  onDelete,
  onToggleWatched,
}) {
  return (
    <>
      <div className="watchlist-card">
        <div className="poster">
          <img src={poster}></img>
        </div>
        <h3>{title}</h3>
        <p>{type}</p>
      </div>
    </>
  );
}

export default WatchListCard;
