import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
    css?: string;
    src: string;
    width?: number;
    height?: number;
    alt: string;
    firstHeading: string;
    secondHeading: string;
    para: string;
    jsxElement: ReactNode;
    paraCSS?: string;
}

export default function HeroSection({css, firstHeading, secondHeading, para, jsxElement, src, alt, width, height, paraCSS}: Props) {
    return (
        <section className={css + " w-full flex items-center justify-center min-h-screen bg-[#23A6F0] " }>
            <div className="w-[85%] flex flex-col sm:flex-row items-center justify-center sm:justify-start py-3">
                <div className="sm:w-full text-white flex flex-col sm:justify-start sm:text-left text-center justify-center gap-8">
                    <h6 className="font-bold text-base uppercase">{firstHeading}</h6>
                    <h3 className="font-bold text-4xl  md:text-6xl">{secondHeading}</h3>
                    <p className={paraCSS}>{para}</p>
                    <div className="flex sm:block items-center justify-center">{jsxElement}</div>
                </div>
                {src.length > 0 && <Image src={src} objectFit="cover" layout="fill" width={width} height={height} alt={alt} />}
            </div>
        </section>
    );
};