import React from "react";
import * as style from "@/styles/achievements.module.css";

const achievements = [
  {
    title: "1st",
    description: "digital financial advice \n platform to be FCA-regulated",
  },
  {
    title: "3+ years",
    description: "providing holistic \n digital financial advice",
  },
  {
    title: "250,000+",
    description: "advice recommendations \n served to customers",
  },
];

const Achievements = () => {
  return (
    <section className={style.section} aria-label="our service">
      <div className={style.wrapper}>
        <div className={style.achievemetsWrapper}>
          {achievements.map((achievement, i) => (
            <div className={style.achievement} key={i}>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
