import React from "react";
import * as style from "@/styles/modules.module.css";
import { Link } from "gatsby";

// images import
import engagementEngineIcon from "@/images/engagement-engine-icon.svg";
import customerSupportIcon from "@/images/customer-support-dashboards-icon.svg";
import factFindIcon from "@/images/fact-find-icon.svg";
import performanceDashboardsIcon from "@/images/performance-dashboards-icon.svg";
import adviceEngineIcon from "@/images/advice-engine-icon.svg";
import riskEngineIcon from "@/images/risk-engine-icon.svg";
import lifePlanIcon from "@/images/life-plan-icon.svg";
import contentLibraryIcon from "@/images/content-library-icon.svg";
import adviserWorkflowIcon from "@/images/adviser-workflow-engine-icon.svg";

const modules = [
  {
    id: 1,
    moduleIcon: factFindIcon,
    moduleType: "ADVICE",
    moduleLabel: "Fact Find",
    moduleDesc: "White label content marketing",
    moduleUrl: "/digital-financial-advice#fact-find",
    isExternal: false,
  },
  {
    id: 2,
    moduleIcon: adviceEngineIcon,
    moduleType: "ADVICE",
    moduleLabel: "Advice Engine",
    moduleDesc: "Automated financial advice",
    moduleUrl: "/digital-financial-advice#advice-engine",
    isExternal: false,
  },
  {
    id: 3,
    moduleIcon: riskEngineIcon,
    moduleType: "ADVICE",
    moduleLabel: "Risk Engine",
    moduleDesc: "Manage advice risk",
    moduleUrl: "/digital-financial-advice#risk-engine",
    isExternal: false,
  },
  {
    id: 4,
    moduleIcon: adviserWorkflowIcon,
    moduleType: "ADVICE",
    moduleLabel: "Adviser Workflow Engine",
    moduleDesc: "Connect human advisers",
    moduleUrl: "/digital-financial-advice#adviser-system",
    isExternal: false,
  },
  {
    id: 5,
    moduleIcon: engagementEngineIcon,
    moduleType: "ADVICE",
    moduleLabel: "Engagement Engine",
    moduleDesc: "Trigger customer actions",
    moduleUrl: "/digital-financial-advice#engagement-engine",
    isExternal: false,
  },
  {
    id: 6,
    moduleIcon: lifePlanIcon,
    moduleType: "ADVICE",
    moduleLabel: "Life Plan",
    moduleDesc: "White label customer plans",
    moduleUrl: "/digital-financial-advice#life-plan",
    isExternal: false,
  },
  {
    id: 7,
    moduleIcon: contentLibraryIcon,
    moduleType: "ADVICE",
    moduleLabel: "Content Library",
    moduleDesc: "White label content marketing",
    moduleUrl: "/digital-financial-advice#content-library",
    isExternal: false,
  },
  {
    id: 8,
    moduleIcon: performanceDashboardsIcon,
    moduleType: "BUSINESS OPS",
    moduleLabel: "Performance Dashboards",
    moduleDesc: "Customised reports",
    moduleUrl: "/business-ops#performance-dashboards",
    isExternal: false,
  },
  {
    id: 9,
    moduleIcon: customerSupportIcon,
    moduleType: "BUSINESS OPS",
    moduleLabel: "Customer Support Dashboards",
    moduleDesc: "Offer enhanced customer support",
    moduleUrl: "/business-ops#customer-support-dashboards",
    isExternal: false,
  },
];

const Modules = () => {
  return (
    <section className={style.sectionWrapper} aria-label="modules">
      <div className={style.section}>
        <h4 className={style.sectionTitle}>
          Integrate these modules with Multiply’s{" "}
          <span className={style.underline}>
            full stack digital advice platform
          </span>
        </h4>
        <p className={style.sectionDesc}>
          Both our AI Revenue Profiler and Autonomous Finance System can work as
          stand-alone solutions, but each can easily integrate with our wider
          ecosystem of digital financial advice products too.
        </p>
        <div className={style.cards}>
          {modules.map((module) => (
            <Link
              to={module?.moduleUrl}
              className={
                module.moduleType === "ADVICE"
                  ? `${style.card} ${style.cardOne}`
                  : `${style.card} ${style.cardTwo}`
              }
              key={module.id}
            >
              <div className={style.cardHeader}>
                <img
                  src={module.moduleIcon}
                  alt={module.moduleLabel}
                  width={26}
                  height={26}
                  loading="lazy"
                />
                <p
                  className={
                    module.moduleType === "ADVICE"
                      ? `${style.cardType} ${style.bgOne}`
                      : `${style.cardType} ${style.bgTwo}`
                  }
                >
                  {module.moduleType}
                </p>
              </div>
              <p className={style.cardTitle}>{module.moduleLabel}</p>
              <p className={style.cardDesc}>{module.moduleDesc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
