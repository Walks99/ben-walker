import React from "react";
import styles from "./MyWork.module.scss";
import WebTitle from "./components/webTitle/WebTitle";
import Projects from "./components/projects/Projects";

function MyWork() {
  return (
    <div className={styles.myWorkContainer}>
      <div className={styles.contentContainer}>

        <WebTitle />
        <Projects />

      </div>
    </div>
  );
}

export default MyWork;
