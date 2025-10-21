import React from "react";
// import { JsonLd } from "@/components/JsonLd";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

function page() {
  return (
    <>
      {/* <JsonLd /> */}
      <div id="home">
        <HomeSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}

export default page;
