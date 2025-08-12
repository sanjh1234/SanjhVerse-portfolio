import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const MyHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-content">
      <header>
        <div className="title-name-div">
          <a className="title-name-link" href="#home">
            <h1 className="title-name">SANJH RAJ</h1>
            <img className="title-img" src="/spaceImg/myImg.jpg" alt="Image" />
          </a>
        </div>

        <div className="navbar-menu" onClick={toggleMenu}>
          {isOpen ? (
            <HiX className="navbar-menu-icon" />
          ) : (
            <HiMenu className="navbar-menu-icon" />
          )}
        </div>

        <nav className={`nav-bar ${isOpen ? "active" : ""}`}>
          <ul>
            <li className="navbar-item">
              <a href="#home" className="nav-bar-content">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#skills" className="nav-bar-content">
                Skills
              </a>
            </li>
            <li className="navbar-item">
              <a href="#projects" className="nav-bar-content">
                Projects
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="nav-bar-content">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className="nav-bar-content">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
