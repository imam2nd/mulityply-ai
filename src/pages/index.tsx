import React from "react";
import type { HeadFC } from "gatsby";
import HeroSection from "@/components/home/HeroSection";
import CaseStudy from "@/components/home/CaseStudy";
import ServicesPanel from "@/components/home/ServicesPanel";
import Transform from "@/components/home/Transform";
import Layout from "@/components/common/Layout";
import ContactForm from "@/components/common/ContactForm";
import thumbnailImage from "@/images/thumbnail.jpg";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <HeroSection />
        <ServicesPanel />
        <CaseStudy />
        <Transform />
        <ContactForm />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home | Multiply</title>
    <meta
      name="description"
      content="Multiply's platform gives you the power to provide automated advice, across a customer's entire life. Join the leading financial institutions improving engagement, retention, and conversions with the next generation of financial advice."
    ></meta>
    <meta
      name="og:description"
      content="Multiply's platform gives you the power to provide automated advice, across a customer's entire life. Join the leading financial institutions improving engagement, retention, and conversions with the next generation of financial advice."
    ></meta>
    <meta name="image" content={thumbnailImage}></meta>
    <meta name="og:image" content={thumbnailImage}></meta>
  </>
);
