import React from "react";
import "./NavigationBar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h3>Calender App</h3>
      <div className="nav-links">
        <a href="/admin" className="nav-item">
          Admin
        </a>
        <a href="/" className="nav-item">
          User
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
