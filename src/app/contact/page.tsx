"use client";

import Footer from "@/components/footer";
import FooterHeading from "@/components/footerHeading";
import HeroSection from "@/components/hero-section";
import NavMenu from "@/components/nav-menu";
import SecondaryHeader from "@/components/secondary-header";
import VisitSection from "@/components/visit-section";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaFacebook, FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
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
        {visibility && <NavMenu pathname={pathname} parentCSS="bg-[#F6F6F6]" />}
        <HeroSection
          firstHeadCSS="hidden md:block"
          width={350}
          height={100}
          textCSS="text-[#252B42]"
          src="/contact-image.png"
          alt="Image"
          firstHeading="CONTACT US"
          secondHeading="Get in touch today!"
          para="We know how large objects will act, but things on a small scale."
          jsxElement={
            <div className="flex flex-col items-center justify-center md:justify-start md:items-start gap-5 font-bold text-2xl">
              <h3 className="">Phone: +451 215 215</h3>
              <h3>Fax: +451 215 215</h3>
              <div className="flex items-center gap-5">
                <FaSquareXTwitter size={30} />
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaLinkedin size={30} />
              </div>
            </div>
          }
          paraCSS="text-xl text-center sm:text-left text-gray-500"
        />
        <VisitSection />
      </main>
      <Footer
        footerHeading={
          <FooterHeading
            parentCSS="bg-white shadow-sm"
            css="justify-start"
            heading="Bandage"
            content={
              <>
                <FaFacebook />
                <FaInstagram />
                <FaXTwitter />
              </>
            }
          />
        }
      />
    </>
  );
}
