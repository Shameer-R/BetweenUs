import "../components/Navbar.css";

import { House, CalendarDays, Plus, Heart, Settings } from "lucide-react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="#" className="nav-item">
          <House />
          <span>Home</span>
        </a>
        <a href="#" className="nav-item">
          <CalendarDays />
          <span>Calendar</span>
        </a>
        <a href="#" className="nav-item nav-add-button">
          <Plus size={28} />
        </a>
        <a href="#" className="nav-item">
          <Heart />
          <span>Memories</span>
        </a>
        <a href="#" className="nav-item">
          <Settings />
          <span>Settings</span>
        </a>
      </nav>
    </>
  );
}

export default Navbar;
