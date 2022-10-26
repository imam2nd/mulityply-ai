import React from "react";
import * as style from "@/styles/advice/advice.module.css";
// images import
import factFindImage from "@/images/fact_find.png";
import adviceEngineImage from "@/images/advice-engine.png";
import riskEngineImage from "@/images/risk.png";
import adviserSystemImage from "@/images/adviser_system.png";
import engagementEngineImage from "@/images/engagement_engine.png";
import lifePlanImage from "@/images/life_plan.png";
import contentLibraryImage from "@/images/content_library.png";
import ScrollingPanels from "../common/ScrollingPanels";

const Advice = () => {
  return (
    <section
      className={`${style.section} adviceWrapper`}
      aria-label="Advice"
      id="advice"
    >
      <h2 className={style.header}>
        Pick which modules fit your organisation best and we'll tailor an advice
        solution to your needs.
      </h2>
      <div className="mt-2 lg:mt-6 px-2">
        <ScrollingPanels panels={panels} />
      </div>
    </section>
  );
};

export default Advice;

const panels = [
  {
    id: "fact-find",
    title: "Fact Find",
    headline: "Fact Find",
    description:
      "Gather all the customer data you need online to build financial profiles, capture goals and onboard customers efficiently and easily.",
    image: factFindImage,
    background: "#F6FBFF",
    features: [
      {
        head: "White label with ease",
        body: "Integrate the Fact Find module into your existing tech stack.",
      },
      {
        head: "Customise your question set",
        body: "Add and adapt questions depending on what you want to discover.",
      },
      {
        head: "Improve user experience",
        body: " Give your customers a mobile-friendly fact finding experience, carefully designed to reduce drop-offs.",
      },
    ],
  },
  {
    id: "advice-engine",
    title: "Advice Engine",
    headline: "Advice Engine",
    description:
      "Enable automated financial advice at scale or create a hybrid proposition, with the UK's first holistic and FCA-approved financial Advice Engine.",
    image: adviceEngineImage,
    background: "#F9FFFD",
    features: [
      {
        head: "Plug in to our permissions",
        body: "Generate tried and tested financial plans, using Multiply's FCA-approved permissions.",
      },
      {
        head: "Adapt to your own advice rules",
        body: "Prefer to use your own house views? No problem. Customise the Advice Engine module to create your own automated financial advice.",
      },
      {
        head: "Integrate your product suite",
        body: "Let our automated system handle the simple cases, so your advisers can spend more time supporting more complex customers.",
      },
    ],
  },
  {
    id: "risk-engine",
    title: "Risk Engine",
    headline: "Risk Engine",
    description:
      "Manage risk automatically and efficiently, across the entire lifecycle of your customers.",
    image: riskEngineImage,
    background: "#FFF7F2",
    features: [
      {
        head: "Automate risk analysis",
        body: "Use our Risk Engine module to automatically evaluate every advice case that comes through, 24/7.",
      },
      {
        head: "Assign complex advice cases",
        body: "Handover specified cases to your advisers when a human touch is needed.",
      },
      {
        head: "Comply with confidence",
        body: "Be confident you're compliant, through our FCA-approved risk technology.",
      },
    ],
  },
  {
    id: "adviser-system",
    title: "Adviser Workflow Engine",
    headline: "Adviser Workflow Engine",
    description:
      "Access all the tools your advisers need to control your digital financial advice proposition.",
    image: adviserSystemImage,
    background: "#FFFEF3",
    features: [
      {
        head: "Customise your advice",
        body: "Modify your plans and recommendations online and schedule customer appointments when necessary.",
      },
      {
        head: "Create dynamic dashboards",
        body: "Build dashboards for advisers that give them access to key insights.",
      },
      {
        head: "Improve adviser efficiency",
        body: "Let our automated system handle the simple cases, so your advisers can spend more time supporting more complex customers.",
      },
    ],
  },
  {
    id: "engagement-engine",
    title: "Engagement Engine",
    headline: "Engagement Engine",
    description:
      "Generate goals-based interactions to create stronger and more profitable relationships with your customers, using Multiply's adaptable Engagement Engine.",
    image: engagementEngineImage,
    background: "#F3FDFF",
    features: [
      {
        head: "Trigger key customer interactions",
        body: "Send targeted and timely communications, designed to help your customers' reach their goals.",
      },
      {
        head: "Give goals-based advice, at the right time",
        body: "Make more of the data discovered during your fact finds and present your products as a solution at key life events.",
      },
      {
        head: "Build brand loyalty",
        body: "Increase customer satisfaction by providing more valuable communications based on their goals.",
      },
    ],
  },
  {
    id: "life-plan",
    title: "Life Plan",
    headline: "Life Plan",
    description:
      "Bring your financial plans to life, with an engaging interface that's personalised to each customer.",
    image: lifePlanImage,
    background: "#FBFBFB",
    features: [
      {
        head: "Trigger key customer interactions",
        body: "Send targeted and timely communications, designed to help your customers reach their goals.",
      },
      {
        head: "Give goals based advice, at the right time",
        body: "Make more of the data discovered during your fact finds and present your products as a solution at key life events.",
      },
      {
        head: "Build brand loyalty",
        body: "Increase customer satisfaction by providing more valuable communications based on their goals.",
      },
    ],
  },
  {
    id: "content-library",
    title: "Content Library",
    headline: "Content Library",
    description:
      "Educate and inform your customers with helpful content that keeps your business relevant and front of mind.",
    image: contentLibraryImage,
    background: "#FCF6E7",
    features: [
      {
        head: "Access evergreen content",
        body: "Send your customers simple explainers on everything from insurance to investing.",
      },
      {
        head: "Keep customers informed",
        body: "Work with our experts to generate content that explains the impact of the latest headlines.",
      },
      {
        head: "Deliver the right content, at the right time",
        body: "Provide helpful content at key stages in your customers lives, so they make better financial decisions.",
      },
    ],
  },
];
