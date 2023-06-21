import React from 'react';
import ContactsCard from './ContactsCard';
import styles from '../../../styles/About/Contacts.module.css';
import font from '../../../styles/Fonts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactsComponent = () => {
  return (
    <div className={styles.cardContainer}>
      <ContactsCard
        logo={<FontAwesomeIcon icon={faPhone} />}
        title="Title 1"
        info1="Info 1-1"
        info2="Info 1-2"
        titleClassName={font.blueTagline}
        info1ClassName={font.taglineInGrey}
        info2ClassName={font.taglineInGrey}
      />
      <ContactsCard
        logo={<FontAwesomeIcon icon={faPhone} />}
        title="Title 2"
        info1="Info 2-1"
        info2="Info 2-2"
        titleClassName={font.blueTagline}
        info1ClassName={font.taglineInGrey}
        info2ClassName={font.taglineInGrey}
      />
      <ContactsCard
        logo={<FontAwesomeIcon icon={faPhone} />}
        title="Title 3"
        info1="Info 3-1"
        info2="Info 3-2"
        titleClassName={font.blueTagline}
        info1ClassName={font.taglineInGrey}
        info2ClassName={font.taglineInGrey}
      />
    </div>
  );
};

export default ContactsComponent;
