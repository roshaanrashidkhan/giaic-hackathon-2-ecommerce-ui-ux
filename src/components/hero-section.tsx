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
    textCSS?: string;
}

export default function HeroSection({css, firstHeading, secondHeading, para, jsxElement, src, alt, width, height, paraCSS, textCSS}: Props) {
    return (
        <section className={css + " w-full flex items-center justify-center min-h-[85vh] overflow-hidden" }>
            <div className="w-[85%] h-full flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-10">
                <div className={textCSS + " flex flex-col sm:justify-start sm:text-left text-center justify-center gap-8 w-full sm:w-[70%]"}>
                    <h6 className="font-bold text-base uppercase">{firstHeading}</h6>
                    <h3 className="font-bold text-4xl md:text-6xl">{secondHeading}</h3>
                    <p className={paraCSS}>{para}</p>
                    <div className="flex sm:block items-center justify-center">{jsxElement}</div>
                </div>
                {src.length > 0 && <Image className="self-end -mb-10 w-full sm:w-[60%]" quality={100} src={src} width={width} height={height} alt={alt} />}
            </div>
        </section>
    );
};