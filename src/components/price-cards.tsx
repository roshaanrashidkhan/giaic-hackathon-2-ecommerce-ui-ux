import Heading from "./heading";
import { Switch } from "@/components/ui/switch";
import PriceCard from "./price-card";
import { Button } from "./ui/button";
import UnorderedItem from "./unordered-item";
import Image from "next/image";

export default function PriceCards() {
  return (
    <section className="w-full flex items-center justify-center py-20 bg-[#fafafa]">
      <div className="w-[85%] flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <Heading
            headingSm={
              <>
                Problems trying to resolve the conflict between<br className="hidden md:block"></br>
                the two major realms of Classical physics: Newtonian mechanics
              </>
            }
            headingLg="Pricing"
            headingLgCSS="!text-[40px] text-[#252B42]"
          />
        </div>
        <div className="flex items-center gap-3">
          <h6 className="text-[#252B42] font-bold">Monthly</h6>
          <Switch />
          <h6 className="text-[#252B42] font-bold">Yearly</h6>
          <h6 className="text-sm font-bold bg-[#B2E3FF] text-[#23A6F0] px-4 py-3 rounded-3xl">
            Save 25%
          </h6>
        </div>
        <div className="w-full grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 items-end my-20 gap-y-3 gap-x-1">
          <PriceCard
            css="border-[#23A6F0]"
            submitButton={
              <Button variant="navyBlue" size="full">
                Try for free
              </Button>
            }
            detail={
              <>
                <UnorderedItem color="green" name="Unlimited Product Updates" />
                <UnorderedItem color="green" name="Unlimited Product Updates" />
                <UnorderedItem color="green" name="Unlimited Product Updates" />
                <UnorderedItem color="green" name="Unlimited Product Updates" />
                <UnorderedItem color="gray" name="1GB Cloud Storage" />
                <UnorderedItem
                  color="gray"
                  name="Email and Community Support"
                />
              </>
            }
            packageType="FREE"
            para="Organize across all apps by hand"
            price="0"
            time="Per Month"
          />
          <PriceCard
            css="md:min-h-[110%] border-[#23A6F0] text-white bg-[#252B42]"
            submitButton={
              <Button variant="blue" size="full">
                Try for free
              </Button>
            }
            detail={
              <>
                <UnorderedItem color="green" name="Unlimited Product Updates" />
                <UnorderedItem color="green" name="Unlimited Product Updates" />
                <UnorderedItem color="green" name="Unlimited Product Updates" />
                <UnorderedItem color="green" name="Unlimited Product Updates" />
                <UnorderedItem color="gray" name="1GB Cloud Storage" />
                <UnorderedItem
                  color="gray"
                  name="Email and Community Support"
                />
              </>
            }
            packageType="STANDARD"
            para="Organize across all apps by hand"
            price="9.99"
            time="Per Month"
          />
          <PriceCard
            css="border-[#23A6F0]"
            submitButton={
              <Button variant="blue" size="full">
                Try for free
              </Button>
            }
            detail={
              <>
                <UnorderedItem color="green" name="Unlimited Product Updates" />
                <UnorderedItem color="green" name="Unlimited Product Updates" />
                <UnorderedItem color="green" name="Unlimited Product Updates" />
                <UnorderedItem color="green" name="Unlimited Product Updates" />
                <UnorderedItem color="gray" name="1GB Cloud Storage" />
                <UnorderedItem
                  color="gray"
                  name="Email and Community Support"
                />
              </>
            }
            packageType="PREMIUM"
            para="Organize across all apps by hand"
            price="19.99"
            time="Per Month"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-10">
            <h4 className="text-xl text-[#252B42] text-center">Trusted By Over 4000 Big Companies</h4>
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-y-10 gap-x-5">
                <Image src="/logo.png" width={103} height={100} alt="Logo" />
                <Image src="/logo.png" width={103} height={100} alt="Logo" />
                <Image src="/logo.png" width={103} height={100} alt="Logo" />
                <Image src="/logo.png" width={103} height={100} alt="Logo" />
                <Image src="/logo.png" width={103} height={100} alt="Logo" />
                <Image src="/logo.png" width={103} height={100} alt="Logo" />
            </div>
        </div>
      </div>
    </section>
  );
}
