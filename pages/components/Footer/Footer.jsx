import React from 'react';
import styles from '../../../styles/Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

library.add(faFacebook, faTwitter, faInstagram);

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.centerContent}>
                <p>@ 2023 INTRA - All Rights Reserved</p>
            </div>
            <div className={styles.rightContent}>
                <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} />
                <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
                <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
            </div>
        </footer>
    );
}

export default Footer;
