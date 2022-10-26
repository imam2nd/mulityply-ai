import React from "react";
import * as style from "@/styles/home/casestudy.module.css";
import csLogo from "@/images/casestudy-logo.png";
import csPerson from "@/images/casestudy-person.webp";
import csOutdoor from "@/images/casestudy-outdoor.webp";

const CaseStudy = () => {
  return (
    <section className={style.csWrapper} aria-label="case study">
      <div className={style.cs}>
        <div className={style.csContentWrapper}>
          <div className={style.csContent}>
            <div className={style.styledLine}></div>
            <div className={style.header}>
              <img
                src={csLogo}
                alt="case study logo"
                width={179}
                height={70}
                className={style.csLogo}
                loading="lazy"
              />
              <p className={style.smallTitle}>
                Market leading assurance and pensions company in Ireland
              </p>
            </div>
            <div className={style.testimony}>
              <h4 className={style.bigTitle}>
                “We chose Multiply because of their unique digital advice
                technology, that will enable Irish Life to help our customers
                take good care of their health and financial wellbeing. In turn
                helping our long-term business growth.”
              </h4>
              <div className={style.psersonInfo}>
                <img
                  src={csPerson}
                  alt="person"
                  width={100}
                  height={100}
                  className={style.personImg}
                  loading="lazy"
                />
                <div>
                  <p className={style.personName}>Susan Gibson</p>
                  <p className={style.personRole}>
                    Chief Digital & <br /> Innovation Officer
                  </p>
                </div>
              </div>
            </div>
            <img
              src={csOutdoor}
              alt="outdoor"
              width={400}
              height={600}
              className={style.csImgMobile}
              loading="lazy"
            />
          </div>
        </div>
        <img
          src={csOutdoor}
          alt="outdoor"
          width={400}
          height={600}
          className={style.csImg}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default CaseStudy;
