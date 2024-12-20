import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Product from "./product";
import Heading from "./heading";

export default function GridTeamPage() {
  interface ProductTypes {
    src: string;
    alt: string;
    productName: string;
    productCategory: string;
  }

  const products: ProductTypes[] = [
    {
      src: "/media.png",
      alt: "Product",
      productName: "Username",
      productCategory: "profession",
    },
    {
      src: "/media.png",
      alt: "Product",
      productName: "Username",
      productCategory: "profession",
    },
    {
      src: "/media.png",
      alt: "Product",
      productName: "Username",
      productCategory: "profession",
    },
    {
      src: "/media.png",
      alt: "Product",
      productName: "Username",
      productCategory: "profession",
    },
    {
      src: "/media.png",
      alt: "Product",
      productName: "Username",
      productCategory: "profession",
    },
    {
      src: "/media.png",
      alt: "Product",
      productName: "Username",
      productCategory: "profession",
    },
    {
      src: "/media.png",
      alt: "Product",
      productName: "Username",
      productCategory: "profession",
    },
    {
      src: "/media.png",
      alt: "Product",
      productName: "Username",
      productCategory: "profession",
    },
    {
      src: "/media.png",
      alt: "Product",
      productName: "Username",
      productCategory: "profession",
    },
  ];
  return (
    <section className="w-full flex items-center justify-center py-5">
      <div className="w-[85%]">
        <div className="grid grid-cols-1 grid-rows-1 gap-y-3 md:grid-rows-1 md:grid-cols-[50%_25%_25%] gap-x-3">
          <div className="relative w-full h-[80vh] md:h-auto">
            <Image
              src="/img-1.png"
              alt="Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
            />
          </div>
          <div className="relative grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-x-3 gap-y-3">
            <div className="h-[40vh] w-full relative">
              <Image
                src="/img-2.png"
                alt="Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
            <div className="h-[40vh] w-full relative">
              <Image
                src="/img-3.png"
                alt="Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
          <div className="relative grid grid-cols-2 grid-rows-1 md:grid-cols-1 md:grid-rows-2 gap-x-3 gap-y-3">
            <div className="h-[40vh] w-full relative">
              <Image
                src="/img-4.png"
                alt="Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
            <div className="h-[40vh] w-full relative">
              <Image
                src="/img-5.png"
                alt="Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center w-full mt-20">
          <Heading
            headingLgCSS="!text-[40px] text-[#252B42] leading-[2.5rem]"
            headingLg="Meet Our Team"
            headingSm=""
          />
        </div>
        <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 gap-x-0 md:gap-x-2 gap-y-10 md:gap-y-30 mt-16">
          {products.map(({ src, alt, productName, productCategory }, index) => (
            <Product
              width={320}
              height={100}
              key={index}
              src={src}
              alt={alt}
              productName={productName}
              productCategory={productCategory}
              icons={
                <>
                  <span className="text-blue-500">
                    <FaFacebook size={22} />
                  </span>
                  <span className="text-blue-500">
                    <FaInstagram size={22} />
                  </span>
                  <span className="text-blue-500">
                    <FaXTwitter size={22} />
                  </span>
                </>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
