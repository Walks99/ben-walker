import React from "react";
import styles from "./MyWork.module.scss";
import WebTitle from "./components/webTitle/WebTitle";

function MyWork() {
  return (
    <div className={styles.myWorkContainer}>
      <div className={styles.contentContainer}>

        <WebTitle />

      </div>
    </div>
  );
}

export default MyWork;
