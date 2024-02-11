import React from "react";
import styles from "./Projects.module.scss";

function Projects() {
  return (
    <div className={styles.projects_container}>
      <div className={`${styles.projectElement} ${styles.projectOne}`}>
        <h2>NZ Metro Property Management</h2>
        <img src={process.env.PUBLIC_URL + '/NZmetroPropertyLogo.png'} alt="NZ metro property mangement" />
        <p>Comming soon...</p>
      </div>

      <div className={`${styles.projectElement} ${styles.projectTwo}`}>
        <h2>Level Up Works</h2>
        <img src={process.env.PUBLIC_URL + '/LevelUpWorks-white.png'} alt="NZ metro property mangement" />
        <p>Comming soon...</p>
      </div>

      <div className={`${styles.projectElement} ${styles.projectThree}`}>
        <h2>Enterprise Web App</h2>
        <img src={process.env.PUBLIC_URL + '/DatacomLogo.png'} alt="NZ metro property mangement" />
        <p>Comming soon...</p>
      </div>

    </div>
    
  );
}

export default Projects;
