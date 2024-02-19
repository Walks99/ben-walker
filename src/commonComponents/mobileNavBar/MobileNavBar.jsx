import React from "react";
import styles from "./MobileNavBar.module.scss";

function MobileNavBar() {
  return (
    <div className={styles.mobileNavBarContainer}>
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
    </div>
  );
}

export default MobileNavBar;
