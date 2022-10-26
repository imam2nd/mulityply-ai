import React from "react";
import Layout from "@/components/common/Layout";
import FirstSection from "../components/about-us/FirstSection";
import SecondSection from "../components/about-us/SecondSection";
import ThirdSection from "../components/about-us/ThirdSection";
import FourthSection from "../components/about-us/FourthSection";
import FifthSection from "../components/about-us/FifthSection";
import SixthSection from "../components/about-us/SixthSection";
import SeventhSection from "../components/about-us/SeventhElement";
import EightSection from "../components/about-us/EightSection";
import ContactForm from "@/components/common/ContactForm";

const AboutUs = () => {
  return (
    <Layout>
      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EightSection />
        <ContactForm />
      </main>
    </Layout>
  );
};

export default AboutUs;
