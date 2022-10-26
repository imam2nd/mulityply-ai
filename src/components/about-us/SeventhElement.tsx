import React from "react";
import { sixthSectionCoreValueContent } from "./utils";

const SeventhSection = () => {
  return (
    <section aria-label="hero section">
      <div className="py-[77.5px] flex flex-col justify-center items-center px-10 mb-[96.76px]">
        <h4 className={"text-[30px] font-bold text-[#000]"}>Core Values</h4>
        <p className="mt-[21.22px] text-[18px]">
          These are the rules that we live our lives by every day.
        </p>
        <div className="grid grid-cols-1 gap-5 mt-[39px] gap-y-12 md:grid-cols-2 md:gap-8 md:gap-y-20 lg:grid-cols-4">
          {sixthSectionCoreValueContent.map((item) => (
            <div className="h-[97px] flex flex-col items-center text-center">
              <img src={item.image} alt="custom_image" />
              <h1 className="text-[18px] font-bold mb-[16px] mt-[15px]">
                {item.title}
              </h1>
              <p> {item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;
