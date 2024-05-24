import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rama Sandeep Gavini</h1>
        <p className={styles.description}>
        Skilled web Development with expertise in creating and maintaining dynamic websites, Proficient in Data Analytics tools like
PowerBI and Tableau. I have the ability to lead and manage teams effectively, ensuring project success through problem solving and
innovative solutions Ready to bring technical expertise, leadership and a result-driven approach to organization.
        </p>
        <a href="mailto:ramasandeep2003@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img 
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
