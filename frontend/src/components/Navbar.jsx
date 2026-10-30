import "../components/Navbar.css";
import { NavLink } from "react-router";

import { House, CalendarDays, Plus, Heart, Settings } from "lucide-react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink to={"/"} className="nav-item" end>
          <House />
          <span>Home</span>
        </NavLink>
        <NavLink to={"/calendar"} className="nav-item">
          <CalendarDays />
          <span>Calendar</span>
        </NavLink>
        <a href="#" className="nav-item nav-add-button">
          <Plus size={28} />
        </a>
        <NavLink to={"/memories"} className="nav-item">
          <Heart />
          <span>Memories</span>
        </NavLink>
        <NavLink to={"/settings"} className="nav-item">
          <Settings />
          <span>Settings</span>
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
