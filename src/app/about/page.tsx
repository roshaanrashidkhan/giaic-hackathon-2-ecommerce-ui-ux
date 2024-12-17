"use client"

import HeroSection from "@/components/hero-section";
import NavMenu from "@/components/nav-menu";
import SecondaryHeader from "@/components/secondary-header";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function About() {
  const [visibility, setVisibility] = useState<boolean>(false);
    const pathname = usePathname();
  return (
    <>
      <SecondaryHeader pathname={pathname} visibility={visibility} setVisibility={setVisibility} />
      <main className="w-full">
        {visibility && <NavMenu pathname={pathname} />}
        <HeroSection
          width={350}
          height={100}
          textCSS="text-black"
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
      </main>
    </>
  );
}
