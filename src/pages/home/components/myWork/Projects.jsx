import React from "react";
import styles from "./Projects.module.scss";
import { useEffect, useRef } from "react";

function Projects() {
  const projectElementRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      const mql = window.matchMedia('(max-width: 500px)');
      if (mql.matches) {
        const projectElements = projectElementRef.current.children;
        Array.from(projectElements).forEach((element) => {
          element.style.height = window.innerHeight * 0.9 + 'px';
        });
      }
    };

    // Call the function once on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
 }, []);

  return (
    <div className={styles.projects_container}>
      <a
        href="https://device-info-using-browser-apis.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div ref={projectElementRef} className={`${styles.projectElement} ${styles.projectFour}`}>
          <h2>Fingerprinting with Browser API's</h2>
          <img
            src={process.env.PUBLIC_URL + "/fingerprint.png"}
            alt="NZ metro property mangement"
            className={styles.fingerprintLogo}
          />
          <p></p>
        </div>
      </a>

      <div ref={projectElementRef} className={`${styles.projectElement} ${styles.projectOne}`}>
        <h2>NZ Metro Property Management</h2>
        <img
          src={process.env.PUBLIC_URL + "/NZmetroPropertyLogo.png"}
          alt="NZ metro property mangement"
        />
        <p>Coming soon...</p>
      </div>

      <div ref={projectElementRef} className={`${styles.projectElement} ${styles.projectTwo}`}>
        <h2>Level Up Works</h2>
        <img
          src={process.env.PUBLIC_URL + "/LevelUpWorks-blue.png"}
          alt="NZ metro property mangement"
        />
        <p>Coming soon...</p>
      </div>

      <div ref={projectElementRef} className={`${styles.projectElement} ${styles.projectThree}`}>
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
