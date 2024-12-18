"use client";

import BigCompanies from "@/components/companies-section";
import Footer from "@/components/footer";
import FooterHeading from "@/components/footerHeading";
import HeroSection from "@/components/hero-section";
import NavMenu from "@/components/nav-menu";
import OurTeam from "@/components/our-team";
import OurUsers from "@/components/our-users-section";
import ProblemSection from "@/components/problem-section";
import SecondaryHeader from "@/components/secondary-header";
import { Button } from "@/components/ui/button";
import VideoSection from "@/components/video-section";
import WorkWithUs from "@/components/work-with-us-section";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function About() {
  const [visibility, setVisibility] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <>
      <SecondaryHeader
        pathname={pathname}
        visibility={visibility}
        setVisibility={setVisibility}
      />
      <main className="w-full">
        {visibility && <NavMenu pathname={pathname} />}
        <HeroSection
          width={350}
          height={100}
          textCSS="text-[#252B42]"
          src="/about-image.png"
          alt="Image"
          firstHeading="ABOUT COMPANY"
          secondHeading="ABOUT US"
          para="We know how large objects will act, but things on a small scale."
          jsxElement={
            <div className="flex sm:block items-center justify-center">
              <Button
                variant="blue"
                size="lg"
                className="w-max font-bold text-2xl"
              >
                GET QUOTE NOW
              </Button>
            </div>
          }
          paraCSS="text-xl text-center sm:text-left text-gray-500"
        />
        <ProblemSection />
        <OurUsers />
        <VideoSection />
        <OurTeam />
        <BigCompanies />
        <WorkWithUs />
      </main>
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
    </>
  );
}
