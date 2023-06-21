import React from "react";
import styles from "../../../styles/About/AboutCircleLayout.module.css";
import Card from "./Card";
import font from "../../../styles/Fonts.module.css";

const CircleLayout = () => {
  return (
    <div className={styles.circleLayout}>
      <h1 className={font.greenHeading }>INTRA </h1>
      <h1 className={font.blueTagline }>In Numbers</h1>
      <div className={styles.cardContainer}>
        <Card title="Hello" number={1} />
        <Card title="Hello" number={2} />
        <Card title="Hello" number={3} />
        <Card title="Hello" number={4} />
        <Card title="Hello" number={5} />
        <Card title="Hello" number={6} />
        <Card title="Hello" number={7} />
      </div>
    </div>
  );
};

export default CircleLayout;
