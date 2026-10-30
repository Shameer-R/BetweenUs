import "../components/Navbar.css";
import { Link } from "react-router";

import { House, CalendarDays, Plus, Heart, Settings } from "lucide-react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to={"/"} className="nav-item">
          <House />
          <span>Home</span>
        </Link>
        <Link to={"/calendar"} className="nav-item">
          <CalendarDays />
          <span>Calendar</span>
        </Link>
        <a href="#" className="nav-item nav-add-button">
          <Plus size={28} />
        </a>
        <Link to={"/memories"} className="nav-item">
          <Heart />
          <span>Memories</span>
        </Link>
        <Link to={"/settings"} className="nav-item">
          <Settings />
          <span>Settings</span>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
