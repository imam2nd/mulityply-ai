import React from "react";
import * as style from "@/styles/about-us/thirdSection.module.css";
import IrishLifeLogo from "@/images/about_us_irish_life.svg";

const ThirdSection = () => {
  return (
    <section className={style.csWrapper} aria-label="irish life">
      <div className="flex flex-col md:flex-row items-center justify-center py-[46.69px]">
        <div className={"mr-[45.1px] mb-0 md:mb-[5px]"}>
          <img
            src={IrishLifeLogo}
            alt="case study logo"
            width={179}
            height={70}
            className={style.csLogo}
            loading="lazy"
          />
        </div>
        {/* <div className={style.testimony}> */}
        <div className="w-[654.82px]">
          <h4 className={"text-[22px] font-bold text-[#000]"}>
            With the Multiply-powered holistic advice solution, Irish Life is
            helping their customers plan for a better financial future.
          </h4>
          <p className="mt-[14.62px] text-[18px]">
            We started working with our first B2B customer, Irish Life, in 2022.
            Irish Life is a market leader in assurance and pensions in Ireland,
            with more than 1.6 million customers.{" "}
          </p>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default ThirdSection;
