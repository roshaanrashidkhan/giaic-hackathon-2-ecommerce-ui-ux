import { MapPin, Phone } from "lucide-react";
import Heading from "./heading";
import { Button } from "./ui/button";
import { BsEnvelopeFill } from "react-icons/bs";
import { PiArrowBendRightDown } from "react-icons/pi";

export default function VisitSection() {
  return (
    <section className="w-full flex items-center justify-center bg-[#fafafa] md:bg-white py-20">
      <div className="w-[85%] flex flex-col gap-5">
        <div className="flex flex-col-reverse items-center justify-center">
          <Heading
            headingLgCSS="!text-2xl leading-10 md:!text-[40px] text-[#252B42] w-[90%] md:w-[60%] md:!leading-[3rem]"
            headingSmCSS="text-sm font-medium md:font-bold"
            headingLg="We help small businesses with big ideas"
            headingSm="VISIT OUR OFFICE"
          />
        </div>
        <div className="grid grid-rows-1 md:items-center md:justify-center lg:justify-left md:grid-cols-2 lg:grid-cols-3 py-14">
          <div className="flex flex-col items-center justify-center gap-2 text-[#252B42] font-bold w-full p-10 bg-white">
            <Phone className="text-[#23A6F0]" size={100} />
            <div className="text-center">
              <h6>georgia.young@example.com</h6>
              <h6>georgia.young@ple.com</h6>
            </div>
            <h6>Get Support</h6>
            <Button variant="borderBlue" size="lg" className="rounded-[2rem]">
              Submit Request
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 bg-[#252B42] text-white font-bold p-10">
            <MapPin className="text-[#23A6F0]" size={100} />
            <div className="text-center">
              <h6>georgia.young@example.com</h6>
              <h6>georgia.young@ple.com</h6>
            </div>
            <h6>Get Support</h6>
            <Button variant="borderBlue" size="lg" className="rounded-[2rem]">
              Submit Request
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-[#252B42] font-bold w-full p-10 bg-white">
            <BsEnvelopeFill className="text-[#23A6F0]" size={100} />
            <div className="text-center">
              <h6>georgia.young@example.com</h6>
              <h6>georgia.young@ple.com</h6>
            </div>
            <h6>Get Support</h6>
            <Button variant="borderBlue" size="lg" className="rounded-[2rem]">
              Submit Request
            </Button>
          </div>
        </div>
        <div className="text-[#252B42] font-bold flex flex-col items-center justify-center text-center gap-4">
          <PiArrowBendRightDown className="text-[#23A6F0]" size={100} />
          <h6>WE Can&apos;t WAIT TO MEET YOU</h6>
          <h2 className="text-6xl">Let&apos;s Talk</h2>
          <Button variant="blue" size="lg">
            Try it free now
          </Button>
        </div>
      </div>
    </section>
  );
}
