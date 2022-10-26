import React from "react";
import * as style from "@/styles/about-us/firstSection.module.css";
// import { HeroIllustration } from "../common/SvgIcons";

const FirstSection = () => {
  return (
    <section className={style.first_section_wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.content}>
          <div className={`${style.textWrapper} mt-[165px] mb-[90px]`}>
            <h1 className={style.title}>
              We’re making financial planning{" "}
              <span className={style.mark}>accessible to everyone </span>
            </h1>
            <p className="text-center mt-7">
              With the next generation of financial advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
