import React from "react";
import { Link } from "gatsby";
import * as style from "@/styles/business-ops/herosection.module.css";
import businessOpsCover from "@/images/business-ops-cover.png";

const HeroSection = () => {
  const signupLink = "https://eepurl.com/h_1t0b";
  return (
    <section aria-label="hero section" className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.content}>
          <h1 className={style.title}>
            Tools to keep your digital financial advice
            <br className="hidden md:inline" /> operating
            <span className={style.mark}> smoothly </span>
          </h1>
          <p className={style.subtitle}>
            Use our dashboards to monitor the performance of your advice
            <br className="hidden md:inline" />
            and enhance your customer service.
          </p>
          <div className={style.imgWrapper}>
            <img src={businessOpsCover} alt="business ops gui" />
          </div>
          <div className={style.buttonWrapper}>
            <Link to="#book-a-demo">
              <button className={style.callToActionBtn}>Book a demo</button>
            </Link>
            <a href={signupLink} className={style.secondaryActionBtn}>
              Sign up for updates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
