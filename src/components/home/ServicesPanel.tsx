import React from "react";
import { motion } from "framer-motion";
import {
  GrowthIcon,
  LightningIcon,
  TickIcon,
  ArrowStroke,
} from "../common/SvgIcons";
import * as style from "@/styles/home/services.module.css";
import integrationImage from "@/images/services-integration.png";
import recommendationImage from "@/images/recommendation.png";
import customerEngagementImage from "@/images/customer-engagement.png";

const banners = [
  {
    title: "Digitise your advice or give your team superpowers",
    description:
      "Go fully automated with our white label and offer compliant advice, using our regulatory permissions or your own. Alternatively, combine our technology with the talents of your human team to offer hybrid advice.",
    image: integrationImage,
    icon: <LightningIcon />,
  },
  {
    title: "Create tailored plans that last a lifetime",
    description:
      "Plug in to our platform and give guidance across savings, investments, protection and pensions. Whatever your customers’ needs, we can create plans that cater to them.",
    image: recommendationImage,
    icon: <GrowthIcon />,
  },
  {
    title: "Give the right advice, at the right time",
    description:
      "Easily connect your product catalogue and customise your advice, so you can match customers with the right service at different life stages. You make more sales and they make better decisions - everybody wins.",
    image: customerEngagementImage,
    icon: <TickIcon />,
  },
];
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

const Service = (props: {
  banner: { title: string; description: string; image: any; icon: JSX.Element };
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
          {banner.icon}
          <h3>{banner.title}</h3>
        </span>
        <p>{banner.description}</p>
      </div>
    </div>
  );
};

const ServicesPanel = () => {
  return (
    <section className={style.section} aria-label="our service">
      <span className={style.strokeWrapper}>
        <ArrowStroke />
      </span>
      <div className={style.wrapper}>
        <h2 className={style.serviceTitle}>
          Increase leads and sales with a new digital advice proposition.{" "}
          <span className={style.mark}>In weeks</span>, not months.
        </h2>
        <div className={style.bannerWrapper}>
          {banners.map((banner, i) => (
            <Service banner={banner} key={i} />
          ))}
        </div>
        <h2 className={style.achievementsTitle}>
          We're leading the way in advice lifecycle automation
        </h2>
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

export default ServicesPanel;
