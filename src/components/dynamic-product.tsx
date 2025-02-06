import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function DynamicProduct() {
  return (
    <section className="w-full flex items-center justify-center bg-[#FAFAFA] pb-10">
      <div className="w-[85%] flex items-start justify-between gap-3">
        <div className="w-full">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image src="/sofa.png" width={500} height={100} alt="Sofa" />
              </CarouselItem>
              <CarouselItem>
                <Image src="/sofa.png" width={500} height={100} alt="Sofa" />
              </CarouselItem>
              <CarouselItem>
                <Image src="/sofa.png" width={500} height={100} alt="Sofa" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-1 bg-transparent border-none text-white hover:bg-transparent hover:text-white" />
            <CarouselNext className="right-1 bg-transparent border-none text-white hover:bg-transparent hover:text-white" />
          </Carousel>
          <div className="flex gap-3 mt-3">
            <Image src="/sofa.png" width={120} height={100} alt="Sofa" />
            <Image className="opacity-50" src="/sofa.png" width={120} height={100} alt="Sofa" />
          </div>
        </div>
        <div>
          <h2 className="text-xl">Floating Phone</h2>
          <div className="flex gap-1 mt-2">
            <Star className="text-yellow-400 w-5 h-5" />
            <Star className="text-yellow-400 w-5 h-5" />
            <Star className="text-yellow-400 w-5 h-5" />
            <Star className="text-yellow-400 w-5 h-5" />
            <Star className="text-yellow-400 w-5 h-5" />
            <span>10 reviews</span>
          </div>
          <h3 className="mt-4 font-bold text-2xl text-[#252B42]">$1,139.33</h3>
          <h4 className="mt-1 text-sm font-bold text-[#737373]">
            Availability : <span className="text-[#23A6F0]">In Stock</span>
          </h4>
          <p className="mt-8 text-[#858585] text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <hr className="my-8 bg-[#BDBDBD] h-0.5" />
          <div className="flex gap-2">
            <span className="bg-[#23A6F0] w-7 h-7 rounded-full"></span>
            <span className="bg-[#2DC071] w-7 h-7 rounded-full"></span>
            <span className="bg-[#E77C40] w-7 h-7 rounded-full"></span>
            <span className="bg-[#252B42] w-7 h-7 rounded-full"></span>
          </div>
          <div className="mt-10 flex gap-4 items-center">
            <Button variant="blue" size="md">Select Options</Button>
            <div className="bg-white p-2 border rounded-full">
              <Heart strokeWidth={1} className="" />
            </div>
            <div className="bg-white p-2 border rounded-full">
              <ShoppingCart strokeWidth={1} className="" />
            </div>
            <div className="bg-white p-2 border rounded-full">
              <Eye strokeWidth={1} className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
