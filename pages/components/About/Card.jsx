import React from "react";
import styles from "../../../styles/About/Card.module.css";

const Card = ({title, number}) => {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.rightColumn}>
        <div className={styles.topLeft}>{title}</div>
      <div className={styles.buttonLeft}>{number}</div>
        </div>
     
      <div className={styles.topRight}>
          Icon
        {/* <img src={icon} alt={styles.icon} /> */}
       </div>
      
    </div>
  );
};

export default Card;
