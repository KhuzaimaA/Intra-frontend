import React from 'react';

import styles from "../../../styles/About/imageListScroller.module.css"

const images = [
  '/images/Chairman.jpeg',
  '/images/CEO.jpeg',
  '/images/vp_business.jpeg',
  '/images/vp_engineering.png',
];

export default function ImageListScroller() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index}`} className={styles.img} />
        ))}
      </div>
    </div>
  );
}
