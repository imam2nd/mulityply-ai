import React from "react";
import * as style from "@/styles/about-us/thirdSection.module.css";

const EightSection = () => {
  return (
    <section className={"bg-[#1F1D1D]"} aria-label="irish life">
      <div className="grid items-center grid-cols-1 gap-5 items-center justify-center py-[60px] px-[150px] md:grid-cols-3">
        <div className="items-center text-center">
          <h1
            className={`${style.eight_element_title} text-[60px] text-[#1CC9D4]`}
          >
            1st{" "}
          </h1>
          <p className="text-[30px] font-bold text-[#fff]">
            FCA authorised holistic advice engine
          </p>
        </div>
        <div className="items-center text-center">
          <h1
            className={`${style.eight_element_title} text-[60px] text-[#1CC9D4]`}
          >
            3+ years
          </h1>
          <p className="text-[30px] font-bold text-[#fff]">
            providing holistic digital financial advice
          </p>
        </div>
        <div className="items-center text-center">
          <h1
            className={`${style.eight_element_title} text-[60px] text-[#1CC9D4]`}
          >
            250,000+
          </h1>
          <p className="text-[30px] font-bold text-[#fff]">
            advice recommendations served to customers
          </p>
        </div>
      </div>
    </section>
  );
};

export default EightSection;
