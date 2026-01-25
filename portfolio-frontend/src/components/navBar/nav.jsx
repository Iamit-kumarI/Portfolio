import React from "react";
import "./nav.css";

function NavBar() {
  return (
    <nav className="navBar">
      <div className="designText">Amit Kumar</div>

      <ul className="navLinks">
        <li className="navLinksLists">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
        <li className="navLinksLists">
          <a href="#leetcode">Achievement</a>
        </li>
        <li className="navLinksLists">
          <a href="#skills">Skills</a>
        </li>
        <li className="navLinksLists">
          <a href="#projects">Projects</a>
        </li>
        <li className="navLinksLists">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
