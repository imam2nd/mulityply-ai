import React from "react";
import type { HeadFC } from "gatsby";
import Layout from "@/components/common/Layout";
import Advice from "@/components/advice/Advice";
import HeroSection from "@/components/advice/HeroSection";
import Achievements from "@/components/common/Achievements";
import ContactForm from "@/components/common/ContactForm";
import completePackageImg from "@/images/complete-package.webp";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <HeroSection />
        <Advice />
        <Achievements />
        <ContactForm />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Advice | Multiply</title>
    <meta
      name="description"
      content="Multiply's platform gives you the power to provide automated advice, across a customer's entire life. Join the leading financial institutions improving engagement, retention, and conversions with the next generation of financial advice."
    ></meta>
    <meta
      name="og:description"
      content="Multiply's platform gives you the power to provide automated advice, across a customer's entire life. Join the leading financial institutions improving engagement, retention, and conversions with the next generation of financial advice."
    ></meta>
    <meta name="image" content={completePackageImg}></meta>
    <meta name="og:image" content={completePackageImg}></meta>
  </>
);
