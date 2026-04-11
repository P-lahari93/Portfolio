import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left"></div>

      <div className="nav-logo">Lahari.dev</div>

      <div className="nav-menu">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;