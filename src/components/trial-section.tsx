import { FaSquareXTwitter } from "react-icons/fa6";
import Heading from "./heading";
import { Button } from "./ui/button";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function TrialSection() {
  return (
    <section className="w-full flex items-center justify-center my-40">
      <div className="w-[85%] flex flex-col items-center justify-center gap-10">
        <Heading
          headingSm={
            <>
              Met minim Mollie non desert Alamo est sit cliquey dolor<br className="hidden md:block"></br>
              do met sent. RELIT official consequent.
            </>
          }
          headingLg="Start your 14 days free trial"
          headingLgCSS="!text-[40px] text-[#252B42] leading-[3rem]"
        />
        <Button variant="blue" size="lg">
          Try it free now
        </Button>
        <div className="flex items-center gap-5">
          <FaSquareXTwitter size={30} />
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaLinkedin size={30} />
        </div>
      </div>
    </section>
  );
}
