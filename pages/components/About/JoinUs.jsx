import React from "react";
import styles from "../../../styles/About/JoinUs.module.css";
import font from "../../../styles/Fonts.module.css";
const JoinUsContainer = () => {
  return (
    <div className={styles.joinUsContainer}>
      <div className={styles.column1}>
        <p className={font.greenHeading}>Careers</p>
        <p className={font.blueTagline}>Join Us</p>
        <br/>
        <p className={font.taglineInGrey}>Some Text</p>
        <div className={styles.textButtonContainer}>
          <button className={styles.button}>Apply</button>
        </div>
      </div>
      <div className={styles.column2}>
        <div className={styles.imageContainer1} />
        <div className={styles.imageContainer2} />
        <div className={styles.imageContainer3}></div>
      </div>
    </div>
  );
};

export default JoinUsContainer;
