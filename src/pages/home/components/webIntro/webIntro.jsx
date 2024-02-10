import React from "react";
import styles from "./webIntro.module.scss";
import { NavLink } from "react-router-dom";

function webIntro() {
  return (
    <div className={styles.webIntroContainer}>
      <h2>Glad to have you hear!</h2>
      <p>
        In my first month of learning to program with HTML, CSS, and JavaScript,
        I've embarked on an exhilarating journey into the world of web
        development. Starting with the essential building blocks of HTML, I've
        gained a solid grasp of structuring web content and incorporating key
        elements like headings, paragraphs, images, and links. CSS has empowered
        me to bring my creations to life, enabling precise control over layout,
        styling, and aesthetics. By diving into Flexbox and animations, I've
        discovered how to craft visually engaging and dynamic designs. As I
        venture into the realm of JavaScript, I'm excited to unlock
        interactivity and functionality, taking my skills to the next level.
        This first month has ignited a passion for creating immersive web
        experiences, and I'm eager to see where this journey takes me next.
      </p>
        <NavLink to="/exploremywork " className={styles.exploreMyWorkLink}>
            Projects
        </NavLink>
    </div>
  );
}

export default webIntro;
