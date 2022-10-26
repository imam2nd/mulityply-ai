import React from "react";
import { fourthSectionContent } from "./utils";
import * as style from "@/styles/about-us/firstSection.module.css";

const FourthSection = () => {
  return (
    <section className={""} aria-label="irish life">
      <div className="py-[77.5px] flex flex-col justify-center items-center px-[170px] md:px-5">
        <h4 className={"text-[30px] font-bold text-[#000]"}>
          The <span className={style.mark}>next generation</span> of financial
          technology.
        </h4>
        <div className="grid grid-cols-1 gap-5 mt-[39px] gap-y-12 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          {fourthSectionContent.map((item) => (
            <div className="h-[97px] w-[287px] flex flex-col items-center text-center">
              <p className="text-[22px] font-bold mb-[16px]">{item.title}</p>
              {item.tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
