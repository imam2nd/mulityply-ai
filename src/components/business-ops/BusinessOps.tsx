import React from "react";
import ScrollingPanels from "../common/ScrollingPanels";
import * as style from "@/styles/intelligence/intelligence.module.css";

// images import
import performanceDashboardImg from "@/images/performance-dashboard.png";
import customerSupportDashboardImg from "@/images/customer-support-dashboard.png";

const panels = [
  {
    id: "performance-dashboards",
    title: "Performance Dashboards",
    headline: "Precise Performance Dashboards built for your business",
    description: `Our Performance Dashboards are completely customisable and designed to give you valuable insights. Track your digital financial advice service in real-time, 24/7, and generate performance reports you can share with wider stakeholders.`,
    image: performanceDashboardImg,
    background: "#f9fffd",
    features: [
      {
        head: "Track performance",
        body: "Dynamically track and gain insights across all your data points.",
      },

      {
        head: "Get total clarity",
        body: "Access key information on everything from advice delivered to cost-per-customer conversion.",
      },

      {
        head: "Find opportunities",
        body: "Utilise unique insights from your data to adapt your advice rules, as well as your broader sales and marketing strategy",
      },
    ],
  },
  {
    id: "customer-support-dashboards",
    title: "Customer Support Dashboards",
    headline:
      "Customer Support Dashboards that increase conversions & retention",
    description:
      "Give your customer support team all the tools they need to serve your clients successfully.",
    image: customerSupportDashboardImg,
    background: "#F9FFFD",
    features: [
      {
        head: "Provide instant support",
        body: "Use tools like our Live Chat feature to give customers immediate online support.",
      },
      {
        head: "Reduce drop-offs",
        body: "Fix any customer issues within a few clicks, so they're more likely to stay in the sign-up process.",
      },
      {
        head: "Integrate with ease",
        body: "Integrate with ease Embed our Customer Support Dashboard into your overall digital strategy. ",
      },
    ],
  },
];

const BusinessOps = () => {
  return (
    <section
      className={style.section}
      aria-label="intelligence"
      id="intelligence"
    >
      <h2 className={style.header}>
        Pick which modules fit your organisation best and we'll tailor an advice
        solution to your needs.
      </h2>
      <div className="mt-2 lg:mt-12 px-2">
        <ScrollingPanels panels={panels} />
      </div>
    </section>
  );
};

export default BusinessOps;
