import React from "react";
import styles from "./Home.module.scss";
import WebTitle from "./components/webTitle/WebTitle";
import WebIntro from "./components/webIntro/webIntro";

function Home() {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.contentsContainer}>
        <WebTitle />
        <WebIntro />
      </div>
    </div>
  );
}

export default Home;
