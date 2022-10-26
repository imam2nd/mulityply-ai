import React from "react";
import ScrollingPanels from "../common/ScrollingPanels";
import * as style from "@/styles/intelligence/intelligence.module.css";

// images import
import aIRevenueProfilerImage from "@/images/aI-revenue-profiler.webp";

const panels = [
  {
    id: "ai-revenue-profiler",
    title: "AI Revenue Profiler",
    headline: "Raise revenues with our AI Revenue profiler",
    description: `Multiply’s AI Revenue Profiler continuously analyses your customer data, so you can clearly understand their financial needs. Make correlations between your customers' circumstances and the products you offer, using our state-of-the-art machine learning technology.`,
    image: aIRevenueProfilerImage,
    background: "#F7FBFF",
    features: [
      {
        head: "Learn more about your customers",
        body: "Access valuable insights on everything from current assets to propensity to invest.",
      },

      {
        head: "Make smarter marketing decisions",
        body: " Use our data analysis tools to discover correlations between your customers and products, then deliver advice that helps them reach their goals.",
      },

      {
        head: "Integrate with ease",
        body: "Plug in our software to your existing system or go full stack with our complete digital advice package.",
      },
    ],
  },
  {
    id: "autonomous-finance-system",
    title: "Autonomous Finance System",
    headline: "Serve more customers with our Autonomous Finance System",
    description:
      "Our Autonomous Finance System identifies your customer’s disposable income and distributes it intelligently. Move money to the right products at precisely the right time, with the next generation of autonomous finance technology.",
    image: aIRevenueProfilerImage,
    background: "#F9FFFD",
    features: [
      {
        head: "Start with a simple fact find",
        body: "Use our platform to find out how much disposable income your customers have as well as their goals.",
      },
      {
        head: "Leave it to our automated system",
        body: "We’ll use our Advice Engine to work out where they should be focusing their money.",
      },
      {
        head: "Point to your products",
        body: "Integrate your product catalogue and automatically set up one-off or recurring payments into specific products.",
      },
    ],
  },
];

const Intelligence = () => {
  return (
    <section
      className={`${style.section} adviceWrapper`}
      aria-label="intelligence"
      id="intelligence"
    >
      <h2 className={style.header}>
        Pick which modules fit your organisation best and we’ll tailor an advice
        solution to your needs.
      </h2>
      <div className="px-2 mt-2 lg:mt-12">
        <ScrollingPanels panels={panels} />
      </div>
    </section>
  );
};

export default Intelligence;
