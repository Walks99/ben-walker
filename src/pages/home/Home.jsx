import React from "react";
import styles from "./Home.module.scss";
import WebTitle from "./components/webTitle/WebTitle";
import WebIntro from "./components/webIntro/webIntro";

function Home() {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.contentsContainer}>
        <div className={styles.webTitleWebIntroWrapper}>
          <WebTitle />
          <WebIntro />
        </div>
      </div>
    </div>
  );
}

export default Home;
