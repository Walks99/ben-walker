import React from "react";
import { useEffect } from "react";
import styles from "./Projects.module.scss";

function Projects() {
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 500px)');
    if (mql.matches) {
      const projectElements = document.querySelectorAll('.projectElement');
      projectElements.forEach((element) => {
        element.style.height = window.innerHeight * 0.8 + 'px';
      });
    }
  }, []);
  return (
    <div className={styles.projects_container}>
      <a
        href="https://device-info-using-browser-apis.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`${styles.projectElement} ${styles.projectFour}`}>
          <h2>Fingerprinting with Browser API's</h2>
          <img
            src={process.env.PUBLIC_URL + "/fingerprint.png"}
            alt="NZ metro property mangement"
            className={styles.fingerprintLogo}
          />
          <p></p>
        </div>
      </a>

      <div className={`${styles.projectElement} ${styles.projectOne}`}>
        <h2>NZ Metro Property Management</h2>
        <img
          src={process.env.PUBLIC_URL + "/NZmetroPropertyLogo.png"}
          alt="NZ metro property mangement"
        />
        <p>Coming soon...</p>
      </div>

      <div className={`${styles.projectElement} ${styles.projectTwo}`}>
        <h2>Level Up Works</h2>
        <img
          src={process.env.PUBLIC_URL + "/LevelUpWorks-blue.png"}
          alt="NZ metro property mangement"
        />
        <p>Coming soon...</p>
      </div>

      <div className={`${styles.projectElement} ${styles.projectThree}`}>
        <h2>Enterprise Web App</h2>
        <img
          src={process.env.PUBLIC_URL + "/DatacomLogo.png"}
          alt="NZ metro property mangement"
        />
        <p>Coming soon...</p>
      </div>
    </div>
  );
}

export default Projects;
