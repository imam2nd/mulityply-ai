import React from "react";
import { motion } from "framer-motion";
import * as style from "@/styles/about-us/secondSection.module.css";
import { fifthSectionBannerContent } from "./utils";

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

const FifthSection = () => {
  return (
    <section aria-label="hero section" className={`bg-[#F6FBFF]`}>
      <div className={style.wrapper}>
        <div className="flex flex-col items-center text-center mt-[70.78px]">
          <h1 className="text-[30px] font-bold w-[603px]">
            We exist to help people achieve their goals and improve their
            financial wellbeing.
          </h1>
          <p className="font-[18px] mt-5 w-[603px]">
            We exist to help people achieve their goals and improve their
            financial wellbeing. Our holistic, personalised advice shows them
            how, and we make it happen.
          </p>
        </div>
        <div className={style.bannerWrapper}>
          {fifthSectionBannerContent.map((banner, i) => (
            <Service banner={banner} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
