import React from "react";
import "./NavigationBar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div>Calender App</div>
      <div className="nav-links">
        <a href="/admin" className="nav-item">
          Admin
        </a>
        <a href="/user" className="nav-item">
          User
        </a>
      </div>
    </nav>
  );
};

export default Navbar;