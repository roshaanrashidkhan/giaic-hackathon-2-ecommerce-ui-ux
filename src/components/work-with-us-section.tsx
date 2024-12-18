import Image from "next/image";
import { Button } from "./ui/button";

export default function WorkWithUs() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#2A7CC7] text-white">
      <div className="w-full h-full grid grid-cols-[60%_40%]">
        <div className="h-full self-center justify-items-center">
          <div className="w-[60%] h-full flex flex-col gap-10 py-[20%]">
            <h6 className="font-bold text-base uppercase">WORK WITH US</h6>
            <h3 className="font-bold text-[40px] xxl:text-6xl">Now Let&apos;s grow Yours</h3>
            <p className="text-sm">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
            <div className="flex sm:block items-center justify-center">
              <Button variant="outlineBlue" size="lg" >Button</Button>
            </div>
          </div>
        </div>
        <div className="w-full h-full object-cover relative">
          <Image
            src="/woman.png"
            layout="fill"
            className="object-cover w-full h-full"
            alt="Side Image"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}