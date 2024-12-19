"use client";

import Footer from "@/components/footer";
import FooterHeading from "@/components/footerHeading";
import NavMenu from "@/components/nav-menu";
import PriceCards from "@/components/price-cards";
import PricingFaqs from "@/components/pricing-faqs";
import SecondaryHeader from "@/components/secondary-header";
import SecondaryHeroSection from "@/components/secondary-hero-section";
import TrialSection from "@/components/trial-section";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Pricing() {
  const pathname = usePathname();
  const [visibility, setVisibility] = useState<boolean>(false);
  return (
    <>
      <SecondaryHeader
        pathname={pathname}
        visibility={visibility}
        setVisibility={setVisibility}
      />
      <main className="w-full">
        {visibility && <NavMenu pathname={pathname} parentCSS="bg-[#F6F6F6]" />}
        <SecondaryHeroSection
          smHeading="PRICING"
          lgHeading="Simple Pricing"
          linkName="Pricing"
          href="/pricing"
        />
        <PriceCards />
        <PricingFaqs />
        <TrialSection />
        <Footer
          footerHeading={
            <FooterHeading
              heading="Bandage"
              content={
                <>
                  <FaFacebook />
                  <FaInstagram />
                  <FaXTwitter />
                </>
              }
              parentCSS="!bg-white shadow-sm"
            />
          }
        />
      </main>
    </>
  );
}
