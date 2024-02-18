import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`${styles.navLinkContainer}`}>
      {isDropdownOpen ? (
        <>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={styles.closeIcon}
            onClick={toggleDropdown}
          />
          <a
            href="https://github.com/walks99/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/ben-walker-8945662a3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1GAIsHn5gaO9r6rEr3eNQqdTh4RIkMbL2/view?usp=sharing"
            download="my-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download my CV
          </a>
        </>
      ) : (
        <FontAwesomeIcon
          icon={faBurger}
          className={styles.burgerIcon}
          onClick={toggleDropdown}
        />
      )}
    </div>
  );
}

export default NavBar;
