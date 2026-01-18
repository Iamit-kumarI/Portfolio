import React from "react";
import "./nav.css";

function NavBar(){
    return (
      <>
        <nav className="navBar">
          <div className="designText">Amit Kumar</div>
          <ul className="navLinks">
            <a href="google.com" className="navLinksLists">Resume</a>
            <li className="navLinksLists">Achievenment</li>
            <li className="navLinksLists">Skills</li>
            <li className="navLinksLists">Project</li>
            <li className="navLinksLists">Contact</li>
          </ul>
        </nav>
      </>
    );
}
export default NavBar;