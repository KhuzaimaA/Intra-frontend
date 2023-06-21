
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import ImageListScroller from "../components/About/ImageListScroller";
import styles from "./home.module.css";
import font from "../../styles/Fonts.module.css";
import CircleLayout from "../components/About/AboutCircleLayout";
import Footer from "../components/Footer/footer";
import ContactsComponent from "../components/About/Contacts";
import JoinUsContainer from "../components/About/JoinUs";
import News from "../components/About/News";

const IndexPage = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const handleToggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.colorHalf}>
          <p className={font.whiteHeadingText}>
            "Ambitions as High as the Sky”
          </p>
          <div className={styles.line}></div>
        </div>
        <div className={styles.imageHalf}>
          <div className={styles.navbarContainer}>
            <FontAwesomeIcon
              icon={faBars}
              className={styles.hamburgerIcon}
              onClick={handleToggleNavbar}
            />
            {isNavbarVisible && (
              <div className={styles.navigationMenu}>
                <p>Menu Item 1</p>
                <p>Menu Item 2</p>
                <p>Menu Item 3</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.secondaryContainer}>
        <div className={styles.textContainer}>
          <div className={font.leftText}>
            <p className={font.greenHeading}>About Us</p>
            <p className={font.blueTagline}>
              Driving Tomorrows Technologies, Today
            </p>
          </div>
          <div className={styles.rightText}>
            <p className={font.greyParagraphText}>
              INTRA Defense Technologies is a SAUDI company, leading in
              development and designing and manufacturing Autonomous Systems and
              Advanced Technologies. We provide advanced technological solutions
              that cater to diverse sectors.
            </p>
            <br />
            <p className={font.greyParagraphText}>
              With a team of highly skilled experts, our innovative solutions
              are built to cater to the needs of various clients, providing them
              with a competitive edge in their respective industries. We
              prioritize quality, efficiency, and innovation, making us a
              reliable partner.
            </p>
          </div>
        </div>
        <div className={styles.aboutUsImage} />

        <div className={styles.visionContainer}>
          <div className={styles.column1}>
            <p className={font.greenHeading}>Subtitle here</p>
            <p className={font.blueTagline}>
              A supporting header can be added here
            </p>
          </div>
          <div className={styles.column2}>
            <div>
              <p className={font.headingInWhite}>Vision</p>
            </div>
            <div>
              {" "}
              <p className={font.taglineInWhite}>
                To revolutionize the way the world operates through the power of
                autonomous technologies.
              </p>
            </div>
          </div>
          <div className={styles.column3}>
            <div>
              <p className={font.headingInBlack}>Mission</p>
            </div>
            <div>
              <p className={font.taglineInGrey}>
                To deliver the greatest value to our customers, partners, and
                stakeholders, while maintaining world-class standards of
                professionalism, integrity, and social responsibility.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.leaderContainer}>
          <div className={styles.leaderContainerLeft}>
            <p className={font.greenHeading}>The Team</p>
            <p className={font.blueTagline}>Meet Our Leaders</p>
          </div>
          <div className={styles.leaderContainerRight}>
            <p className={font.greenBorderTransparentText}>Leaders</p>
            <br />
          </div>
        </div>
        <div>
          <ImageListScroller />
        </div>

        <div>
          <CircleLayout />
        </div>
        <div>
          <News />
        </div>
        <div>
          <JoinUsContainer />
        </div>
        <div>
          <ContactsComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;

