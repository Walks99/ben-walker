import React from "react";
import styles from "./WebTitle.module.scss";

function webTitle() {
  return (
    <div class={styles.color_heading_container}>
      <h2 class={styles.color_heading}>
        <span class={styles.first}>P</span>
        <span class={styles.second}>R</span>
        <span class={styles.third}>O</span>
        <span class={styles.fourth}>J</span>
        <span class={styles.fifth}>E</span>
        <span class={styles.seventh}>C</span>
        <span class={styles.eighth}>T</span>
        <span class={styles.ninth}>S</span>
      </h2>
    </div>
  );
}

export default webTitle;
