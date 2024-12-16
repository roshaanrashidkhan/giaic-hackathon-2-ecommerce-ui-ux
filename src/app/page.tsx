"use client";

import EditorPick from "@/components/editor-pick-section";
import FeatureSection from "@/components/feature-section";
import Footer from "@/components/footer";
import FooterHeading from "@/components/footerHeading";
import Header from "@/components/header";
import Heading from "@/components/heading";
import HeroSection from "@/components/hero-section";
import NavMenu from "@/components/nav-menu";
import FeaturedPosts from "@/components/posts-section";
import HeadingSection from "@/components/section-heading";
import SummerSection from "@/components/summer-section";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const [visibility, setVisibility] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <>
      <Header
        pathname={pathname}
        visibility={visibility}
        setVisibility={setVisibility}
        bgColor="bg-[#252B42]"
      />
      <main className="w-full">
        {visibility && <NavMenu pathname={pathname} />}
        <HeroSection
          css="bg-[url('/carousel-inner.png')] bg-no-repeat bg-cover bg-[60%_0]"
          src=""
          alt=""
          firstHeading="Summer 2020"
          secondHeading="NEW COLLECTION"
          para="We know how large objects will act, but things on a small scale."
          jsxElement={
            <div className="flex sm:block items-center justify-center">
              <Button
                variant="green"
                size="lg"
                className="w-max font-bold text-2xl"
              >
                SHOP NOW
              </Button>
            </div>
          }
          paraCSS="text-xl w-full sm:w-[40%] text-center sm:text-left"
        />
        <EditorPick />
        <FeatureSection headings={<><HeadingSection heading="Featured Products" css="text-gray-500" />
          <Heading headingLg="BESTSELLER PRODUCTS" headingSm="Problems trying to resolve the conflict between" /></>} />
        <SummerSection
          src="/grid-image.png"
          width={700}
          height={200}
          alt="Grid Image"
        />
        <FeaturedPosts />
      </main>
      <Footer
        footerHeading={
          <FooterHeading
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
