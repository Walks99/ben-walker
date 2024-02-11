import React from "react";
import styles from "./MyWork.module.scss";
import WebTitle from "./components/webTitle/WebTitle";
import Projects from "./components/projects/Projects";
import NavBar from "../../commonComponents/navBar/NavBar";

function MyWork() {
  return (
    <div className={styles.myWorkContainer}>
      <div className={styles.contentContainer}>

        <WebTitle className={styles.webTitle}/>
        <Projects className={styles.projects}/>
        <NavBar className={styles.navBar}/>

      </div>
    </div>
  );
}

export default MyWork;
