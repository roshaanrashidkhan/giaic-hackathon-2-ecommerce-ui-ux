"use client";

import Footer from "@/components/footer";
import FooterHeading from "@/components/footerHeading";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CategoryList from "@/components/category-list";
import FilterSection from "@/components/filter-section";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ClientsList from "@/components/clients-list";
import FeatureSection from "@/components/feature-section";
import PaginationSection from "@/components/pagination-section";
import NavMenu from "@/components/nav-menu";

export default function Shop() {
  const [visibility, setVisibility] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <>
      <Header
        bgColor="bg-[#23856D]"
        pathname={pathname}
        visibility={visibility}
        setVisibility={setVisibility}
      />
      <main className="w-full">
        {visibility && <NavMenu pathname={pathname} />}
        <FooterHeading
          css="justify-center text-center"
          nodeCSS="justify-center"
          heading="Shop"
          content={
            <>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/"
                      className="font-bold text-[#BDBDBD]"
                    >
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/shop"
                      className="font-bold text-[#BDBDBD]"
                    >
                      Shop
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </>
          }
        />
        <CategoryList />
        <FilterSection />
        <FeatureSection />
        <PaginationSection />
        <ClientsList />
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
