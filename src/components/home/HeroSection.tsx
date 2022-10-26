import React from "react";
import { Link } from "gatsby";
import * as style from "@/styles/home/herosection.module.css";
import { HeroIllustration } from "../common/SvgIcons";

const HeroSection = () => {
  const signupLink = "https://eepurl.com/h_1t0b";
  return (
    <section aria-label="hero section" className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.content}>
          <div className={style.textWrapper}>
            <h1 className={style.title}>
              The only platform that automates the advice lifecycle
            </h1>
            <p className={style.subtitle}>
              {`Multiply's product suite gives you the power to provide automated advice, across a customer's
              entire life. Join the leading financial institutions improving engagement, retention, and conversions
               with the next generation of financial advice.`}
            </p>
            <div className={style.buttonWrapper}>
              <Link to="#book-a-demo">
                <button className={style.callToActionBtn}>Book a demo</button>
              </Link>

              <a href={signupLink} className={style.secondaryActionBtn}>
                Sign up for updates
              </a>
            </div>
          </div>
          <div className={style.imgWrapper}>{<HeroIllustration />}</div>
        </div>
        <p className={style.bottomText}>
          Multiply is authorised and regulated by the Financial Conduct
          Authority
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
