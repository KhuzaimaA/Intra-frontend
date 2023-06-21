import React from 'react';
import styles from '../../../styles/About/ContactsCard.module.css';

const ContactsCard = ({ logo, title, info1, info2, titleClassName, info1ClassName, info2ClassName }) => {
  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <h1 className={`${styles.title} ${titleClassName}`}>{title}</h1>
      <p className={`${styles.info} ${info1ClassName}`}>{info1}</p>
      <p className={`${styles.info} ${info2ClassName}`}>{info2}</p>
    </div>
  );
};

export default ContactsCard;
