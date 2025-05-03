import React from "react";
import "./Nav.css";
import BrandLogo from "../../assets/Images/e-logo.png";

interface NavProps {
  showMenu: string;
  toggleMenu: () => void;
}

const Nav: React.FC<NavProps> = (props) => {
  return (
    <nav id="navbar">
      <div className="nav-wrapper">
        <img src={BrandLogo} alt="Brand Logo" />
        <p className="brand">
        <strong>Stop Struggling</strong> with Your Teen</p>
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            props.toggleMenu();
          }}
          className={props.showMenu === "active" ? "menu-button active" : "menu-button"}
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
