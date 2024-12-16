import { ReactNode } from "react";
import Product from "./product";

export default function FeatureSection({headings}: {headings?: ReactNode}) {
    interface ProductTypes {
        src: string;
        alt: string;
        productName: string;
        productCategory: string;
        beforePrice: number;
        afterPrice: number;
    }

    const products:ProductTypes[] = [
        {
            src: "/product.png",
            alt: "Product",
            productName: "Graphic Design",
            productCategory: "English Department",
            beforePrice: 16.48,
            afterPrice: 6.48
        },
        {
            src: "/product.png",
            alt: "Product",
            productName: "Graphic Design",
            productCategory: "English Department",
            beforePrice: 16.48,
            afterPrice: 6.48
        },
        {
            src: "/product.png",
            alt: "Product",
            productName: "Graphic Design",
            productCategory: "English Department",
            beforePrice: 16.48,
            afterPrice: 6.48
        },
        {
            src: "/product.png",
            alt: "Product",
            productName: "Graphic Design",
            productCategory: "English Department",
            beforePrice: 16.48,
            afterPrice: 6.48
        },
        {
            src: "/product.png",
            alt: "Product",
            productName: "Graphic Design",
            productCategory: "English Department",
            beforePrice: 16.48,
            afterPrice: 6.48
        },
        {
            src: "/product.png",
            alt: "Product",
            productName: "Graphic Design",
            productCategory: "English Department",
            beforePrice: 16.48,
            afterPrice: 6.48
        },
        {
            src: "/product.png",
            alt: "Product",
            productName: "Graphic Design",
            productCategory: "English Department",
            beforePrice: 16.48,
            afterPrice: 6.48
        },
        {
            src: "/product.png",
            alt: "Product",
            productName: "Graphic Design",
            productCategory: "English Department",
            beforePrice: 16.48,
            afterPrice: 6.48
        },
    ];

    return (
        <section className="w-full flex items-center justify-center my-5">
            <div className="w-[85%] flex flex-col gap-2">
                {headings}
                <div className="grid grid-rows-1 md:grid-cols-4 gap-x-0 md:gap-x-2 gap-y-10 md:gap-y-20 mt-5">
                    {products.map(({src,alt,productName,productCategory,beforePrice,afterPrice}, index) => (
                        <Product key={index} src={src} alt={alt} productName={productName} productCategory={productCategory} beforePrice={beforePrice} afterPrice={afterPrice} />
                    ))}
                </div>
            </div>
        </section>
    );
};