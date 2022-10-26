import React from "react";
import { HeadFC } from "gatsby";
import Layout from "@/components/common/Layout";
import HeroSection from "@/components/business-ops/HeroSection";
import BusinessOps from "@/components/business-ops/BusinessOps";
import Achievements from "@/components/common/Achievements";
import ContactForm from "@/components/common/ContactForm";
import Modules from "@/components/common/Modules";
import businessOpsCover from "@/images/business-ops-cover.png";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <HeroSection />
        <BusinessOps />
        <Modules />
        <Achievements />
        <ContactForm />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Business Ops | Multiply</title>;
    <meta
      name="description"
      content="Multiply's platform gives you the power to provide automated advice, across a customer's entire life. Join the leading financial institutions improving engagement, retention, and conversions with the next generation of financial advice."
    ></meta>
    <meta
      name="og:description"
      content="Multiply's platform gives you the power to provide automated advice, across a customer's entire life. Join the leading financial institutions improving engagement, retention, and conversions with the next generation of financial advice."
    ></meta>
    <meta name="image" content={businessOpsCover}></meta>
    <meta name="og:image" content={businessOpsCover}></meta>
  </>
);
