import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";

interface Props {
    smHeading: string;
    lgHeading: string;
    linkName: string;
    href: string;
}

export default function SecondaryHeroSection({lgHeading, smHeading, linkName, href}:Props) {
    return (
        <section className="w-full flex items-center justify-center my-20">
            <div className="w-[85%] flex flex-col items-center justify-center text-center font-bold gap-10">
                <h6 className="text-[#737373]">{smHeading}</h6>
                <h1 className="text-6xl text-[#252B42]">{lgHeading}</h1>
                <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/"
                      className="font-bold"
                    >
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href={href}
                      className="font-bold text-[#BDBDBD]"
                    >
                      {linkName}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
        </section>
    );
};