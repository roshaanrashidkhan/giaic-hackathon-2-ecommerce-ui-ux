import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function DynamicProduct() {
  return (
    <section className="w-full flex items-center justify-center bg-[#FAFAFA]">
      <div className="w-[85%]">
        <Carousel>
          <CarouselContent>
            <CarouselItem><Image src="/sofa.png" width={400} height={100} alt="Sofa" /></CarouselItem>
            <CarouselItem><Image src="/sofa.png" width={400} height={100} alt="Sofa" /></CarouselItem>
            <CarouselItem><Image src="/sofa.png" width={400} height={100} alt="Sofa" /></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
