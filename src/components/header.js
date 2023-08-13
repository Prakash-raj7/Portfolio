import React from "react";
import "../css/header.css";
function Header()
{
    return(
    <div className="header">
        <nav>
            <ul className="navbar-list">
            <li className="navbar-item">
            <a href="#projects" className="navbar-link">
              Projects
            </a>
          </li>
          
          <li className="navbar-item">
            <a href="#skills" className="navbar-link">
              Skills
            </a>
            </li>
            <li className="navbar-item">
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
            </ul>
        </nav>
    </div>
    );
}
export default Header;