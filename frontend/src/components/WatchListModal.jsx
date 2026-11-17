import "../components/WatchListModal.css";
import { X } from "lucide-react";

function WatchListModal({ onClose }) {
  return (
    <>
      <div className="watchlist-modal-overlay">
        <div className="watchlist-modal-container">
          <div className="watchlist-modal-header">
            <h2>Add Show or Movie</h2>
            <button
              type="button"
              onClick={onClose}
              className="close-btn"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchListModal;
