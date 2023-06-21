import React from "react";
import styles from "../../../styles/About/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ onToggle }) => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.menuBarContainer}>
        {/* Add your menu bar content and styling */}
        <ul>
          <li>About</li>
          <li>Join Us</li>
          <li>Leaders</li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className={styles.hamburgerIcon}
        onClick={onToggle}
      />
      {/* Add any other content or menu items for the navigation bar */}
    </div>
  );
};

export default Navbar;
