import React from "react";
import { Link } from "gatsby";
import * as style from "@/styles/intelligence/herosection.module.css";
import completePackageImg from "@/images/complete-package-intelligence.webp";

const HeroSection = () => {
  const signupLink = "https://eepurl.com/h_1t0b";
  return (
    <section aria-label="hero section" className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.content}>
          <h1 className={style.title}>
            Intelligent financial planning and analysis <br /> software designed
            to <span className={style.mark}>increase conversions</span>
          </h1>
          <p className={style.subtitle}>
            Multiply’s unique financial planning and analysis software allows
            you to intelligently <br /> connect your customers to the right
            products, at the right time.
          </p>
          <div className={style.imgWrapper}>
            <img src={completePackageImg} alt="complete package gui" />
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
