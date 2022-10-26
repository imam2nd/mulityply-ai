import React from "react";
import { motion } from "framer-motion";
import * as style from "@/styles/about-us/secondSection.module.css";
import { banners } from "./utils";

const Service = (props: {
  banner: { title: string; description: string; image: any };
}) => {
  const { banner } = props;
  const variants = {
    open: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "50%" },
  };
  return (
    <div className={style.banner}>
      <div className={style.bannerImageWrapper}>
        <motion.img
          variants={variants}
          transition={{ duration: 0.5 }}
          initial={"hidden"}
          whileInView={"open"}
          src={banner.image}
          alt={banner.title}
          viewport={{ once: true }}
          loading="lazy"
        />
      </div>
      <div className={style.bannerContent}>
        <span>
          <h3>{banner.title}</h3>
        </span>
        <div>{banner.description}</div>
      </div>
    </div>
  );
};

const SecondSection = () => {
  return (
    <section aria-label="hero section" className={style.wrapper}>
      <div className={style.bannerWrapper}>
        {banners.map((banner, i) => (
          <Service banner={banner} key={i} />
        ))}
      </div>
    </section>
  );
};

export default SecondSection;
