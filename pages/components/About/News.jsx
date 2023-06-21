import React from "react";
import styles from "../../../styles/About/News.module.css";
import font from "../../../styles/Fonts.module.css";

const News = () => {
  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsContainerLeft}>
        <div className={styles.newsImage}>
          <div className={styles.overlayTextLeft}>
            <p className={font.greenHeading}>News</p>
            <p className={font.blueTagline}>Check our Latest News</p>
          </div>
          <img src="/images/news1.jpeg" alt="News Image 1" className={styles.newsImage1} />
        </div>
      </div>
      <div className={styles.newsContainerRight}>
        <p className={font.greenBorderTransparentText}>News</p>
        {/* <div className={styles.newsImages}>
          <div className={styles.newsImage}>
            <img src="/images/news3.jpeg" alt="News Image 2" className={styles.newsImage2} />
            <div className={styles.overlayTextRight}>
              <p>Overlay Text 2</p>
            </div>
          </div>
          <div className={styles.newsImage}>
            <img src="/images/news4.jpg" alt="News Image 3" className={styles.newsImage3} />
            <div className={styles.overlayTextRight}>
              <p>Overlay Text 3</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default News;
