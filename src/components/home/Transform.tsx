import React from "react";
import * as style from "@/styles/home/transform.module.css";

// images import
import gui from "@/images/complete-package.webp";
import curve from "@/images/transform-curve.svg";
import advise from "@/images/advise.svg";
import engage from "@/images/engage.svg";
import execute from "@/images/execute.svg";
import factFind from "@/images/fact-find-process-icon.svg";
import onboard from "@/images/onboard.svg";
import revenueProfing from "@/images/revenue-profiling.svg";
import iso from "@/images/iso.svg";
import fca from "@/images/fca.svg";

const processes = [
  {
    id: 1,
    icon: onboard,
    title: "Onboard",
    features: [{ id: 1, label: "Perform KYC / AML" }],
  },
  {
    id: 2,
    icon: factFind,
    title: "Fact find",
    features: [{ id: 1, label: "Build financial profiles and capture goals" }],
  },
  {
    id: 3,
    icon: advise,
    title: "Advise",
    features: [
      { id: 1, label: "Generate FCA-regulated financial advice" },
      { id: 2, label: "Assign your human team to review specified cases" },
      { id: 3, label: "Show financial plans and recommendations" },
    ],
  },
  {
    id: 4,
    icon: execute,
    title: "Execute",
    features: [
      { id: 1, label: "Integrate your product catalogue" },
      { id: 2, label: "Help customers take key actions" },
    ],
  },

  {
    id: 5,
    icon: engage,
    title: "Engage",
    features: [
      { id: 1, label: "Send the right comms at the right time" },
      {
        id: 2,
        label: "Prompt key customer actions including fact find updates",
      },
    ],
  },

  {
    id: 6,
    icon: revenueProfing,
    title: "Revenue profiling",
    features: [
      { id: 1, label: "Understand what and when to sell to your client base" },
      {
        id: 2,
        label:
          "Identify optimum sales opportunities within the lifecycle of the client",
      },
      { id: 3, label: "Grow with goal based selling" },
    ],
  },
];

const Transform = () => {
  return (
    <section className={style.transformWrapper} aria-label="transform business">
      <div className={style.transform}>
        <div className={style.header}>
          <img src={gui} alt="gui" width={776} height={427} loading="lazy" />
          <h4 className={style.title}>
            Transform your business with the
            <span className={style.underline}> complete</span> <br /> digital
            advice platform.
          </h4>
        </div>
        <div className={style.process}>
          <div className={style.curveWrapper}>
            <p className={style.curveText}>
              Use Multiply’s regulatory <br /> permissions, or your own
            </p>
            <img src={curve} alt="curve" loading="lazy" />
          </div>
          <div className={style.cards}>
            {processes.map((process) => (
              <div className={style.card} key={process.id}>
                <div className={style.carIconWrapper}>
                  <p className={style.cardNumber}>{process.id}.</p>
                  <img
                    src={process.icon}
                    alt={process.title}
                    loading="lazy"
                    className={style.cardIcon}
                  />
                </div>
                <p className={style.cardTitle}>{process.title}</p>
                <ul className={style.cardfeatures}>
                  {process.features.map((feature) => (
                    <li className={style.cardFeature} key={feature.id}>
                      {feature.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={style.iso}>
          <p className={style.isoTitle}>
            Backed by tech and compliance expertise you can trust.
          </p>
          <div className={style.isoImgWrapper}>
            <img
              src={iso}
              alt="ISO 27001"
              width={170}
              height={170}
              loading="lazy"
            />
            <img src={fca} alt="FCA" width={170} height={170} loading="lazy" />
          </div>
          <p className={style.isoDesc}>
            We work closely with each client to ensure that both their advice
            and our tech is risk-appropriate and compliant.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transform;
