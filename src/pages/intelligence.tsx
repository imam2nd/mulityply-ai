import React from "react";
import { HeadFC } from "gatsby";
import Layout from "@/components/common/Layout";
import HeroSection from "@/components/intelligence/HeroSection";
import Intelligence from "@/components/intelligence/Intelligence";
import Achievements from "@/components/common/Achievements";
import ContactForm from "@/components/common/ContactForm";
import Modules from "@/components/common/Modules";
import completePackageImg from "@/images/complete-package-intelligence.webp";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <HeroSection />
        <Intelligence />
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
    <title>Intelligence | Multiply</title>;
    <meta
      name="description"
      content="Multiply's platform gives you the power to provide automated advice, across a customer's entire life. Join the leading financial institutions improving engagement, retention, and conversions with the next generation of financial advice."
    />
    <meta
      name="og:description"
      content="Multiply's platform gives you the power to provide automated advice, across a customer's entire life. Join the leading financial institutions improving engagement, retention, and conversions with the next generation of financial advice."
    />
    <meta name="image" content={completePackageImg} />
    <meta name="og:image" content={completePackageImg} />
  </>
);
