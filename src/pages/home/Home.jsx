import React, { useRef, useState, useEffect } from "react";
import styles from "./Home.module.scss";
import WebTitle from "./components/webTitle/WebTitle";
import WebIntro from "./components/webIntro/webIntro";
import MyWork from "./components/myWork/Projects";
import NavBar from "../../commonComponents/navBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointDown,
  faHandPointUp,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [isHandClicked, setIsHandClicked] = useState(false);
  const myWorkRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsHandClicked(true);
    } else {
      setIsHandClicked(false);
    }
  };

  const scrollToMyWork = () => {
    myWorkRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = async () => {
    await window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.contentsContainer}>
        <div className={styles.webTitleAndIntroContainer}>
          <WebTitle />
          <div className={styles.webIntroContainer}>
            <WebIntro />
          </div>
          <div className={styles.pointingHandContainer}>
            {isHandClicked ? (
              <FontAwesomeIcon
                icon={faHandPointUp}
                className={styles.faHandPointUp}
                onClick={scrollToTop}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHandPointDown}
                className={styles.faHandPointDown}
                onClick={scrollToMyWork}
              />
            )}
          </div>
        </div>
        <div ref={myWorkRef}>
          <MyWork />
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
