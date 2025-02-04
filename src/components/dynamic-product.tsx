import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";

export default function DynamicProduct() {
  return (
    <section className="w-full flex items-center justify-center bg-[#FAFAFA]">
      <div className="w-[85%] flex items-start justify-between gap-3">
        <Carousel className="w-full">
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
          <h3 className="mt-4">$1,139.33</h3>
          <h4 className="mt-1">
            Availability : <span>In Stock</span>
          </h4>
          <p className="mt-8">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <hr className="my-8 border-2" />
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
