import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
    src: string;
    width: number;
    height: number;
    alt: string;
}

export default function SummerSection({src, width, height, alt}: Props) {
    return (
        <section className="flex items-center justify-center w-full h-full">
            <div className="w-[85%] my-10 gap-x-4 gap-y-5 grid grid-rows-1 md:grid-cols-2 items-center justify-center">
                <Image src={src} width={width} height={height} alt={alt} className="order-2 md:order-1" />
                <div className="font-bold flex flex-col gap-5 order-1 justfy-center md:justify-start text-center md:text-left md:order-2">
                    <h6 className="text-gray-400 tracking-[0.1px]">SUMMER 2020</h6>
                    <h2 className="text-[40px] leading-[3rem] tracking-[0.2px]">Part of the Neural Universe</h2>
                    <p className="text-xl font-normal text-gray-500">We know how large objects will act, but things on a small scale.</p>
                    <div className="buttons flex items-center justify-center md:justify-start gap-2">
                        <Button variant="green" size="lg">BUY NOW</Button>
                        <Button variant="outlineGreen" size="lg">READ MORE</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};