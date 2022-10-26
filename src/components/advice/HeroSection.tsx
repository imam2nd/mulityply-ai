import React from "react";
import { Link } from "gatsby";
import * as style from "@/styles/advice/herosection.module.css";
import completePackageImg from "@/images/complete-package.webp";

const HeroSection = () => {
  const signupLink = "https://eepurl.com/h_1t0b";
  return (
    <section aria-label="hero section" className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.content}>
          <span>
            <h1 className={style.title}>
              The <span className={style.mark}>full stack</span>
              <br /> digital advice platform
            </h1>
            <p className={style.subtitle}>
              Everything you need to give holistic financial advice that scales.
              <br />
              Transform your business and increase sales with Multiply’s
              complete digital financial advice package.
            </p>
          </span>

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
