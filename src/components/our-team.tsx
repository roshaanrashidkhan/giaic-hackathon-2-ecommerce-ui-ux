import { FaFacebook, FaInstagram } from "react-icons/fa";
import Heading from "./heading";
import Product from "./product";
import { FaXTwitter } from "react-icons/fa6";

export default function OurTeam() {
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
  ];
  return (
    <section className="w-full flex items-center justify-center my-20">
      <div className="w-[85%]">
        <div className="flex flex-col gap-2 justify-center w-full">
          <Heading
            headingLgCSS="!text-[40px] text-[#252B42]"
            headingLg="Meet Our Team"
            headingSm={
              <>
                Problems trying to resolve the conflict between<br></br>
                the two major realms of Classical physics: Newtonian mechanics
              </>
            }
          />
        </div>
        <div className="grid grid-rows-1 md:grid-cols-4 gap-x-0 md:gap-x-2 gap-y-10 md:gap-y-20 mt-16">
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
