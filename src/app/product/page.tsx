"use client"

import DynamicProduct from "@/components/dynamic-product";
import FooterHeading from "@/components/footerHeading";
import Header from "@/components/header";
import NavMenu from "@/components/nav-menu";
import TabsComponent from "@/components/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Product() {
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
          css="justify-center text-center sm:!flex-row-reverse"
          nodeCSS="justify-center"
          heading=""
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
        <DynamicProduct />
        <TabsComponent />
      </main>
    </>
  );
}
