import React from "react";
import styles from "./webIntro.module.scss";
import { NavLink } from "react-router-dom";

function webIntro() {
  return (
    <div className={styles.webIntroContainer}>
      <h2>Welcome!</h2>
      <p>
        Hey there! I'm Ben, a 24-year-old career changer who has hung up his
        corporate shoes in search of a new challenge. After five years in sales,
        it was time to shake things up. Taking some time to work as a gardener
        and recalibrating my goals, I was persuaded by a close friend to dip my
        toes into the world of software development, which captivated my
        interest. So here I am, enthusiastic and eager to continue growing as a
        Full Stack Web Developer.<br /><br /> Starting in February 2024, I have undertaken a
        three-month internship at Datacom, Auckland, alongside several other
        candidates from Mission Ready as part of my Certificate in Applied
        Technology Product Solutions. My team has been tasked with developing an
        enterprise web application which we hope to release for production in
        April 2024.<br /><br /> This website is a showcase of my work, and I hope you
        enjoy exploring it as much as I have enjoyed creating it. If you have any
        questions or would like to get in touch, please feel free to contact me
        via the contact form or through my social media links. I look forward to
        hearing from you!
      </p>
      <NavLink to="/exploremywork " className={styles.exploreMyWorkLink}>
        Projects
      </NavLink>
    </div>
  );
}

export default webIntro;
