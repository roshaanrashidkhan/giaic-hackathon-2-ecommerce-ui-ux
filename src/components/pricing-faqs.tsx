import Heading from "./heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PricingFaqs() {
  return (
    <section className="w-full flex items-center justify-center my-20">
      <div className="w-[85%] flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <Heading
            headingSmCSS="!text-xl"
            headingSm={
              <>
                Problems trying to resolve the conflict between<br className="hidden md:block"></br>
                the two major realms of Classical physics: Newtonian mechanics
              </>
            }
            headingLg="Pricing Faqs"
            headingLgCSS="!text-[40px] text-[#252B42]"
          />
        </div>
        <Accordion type="single" collapsible className="w-full">
          <div className="grid grid-rows-1 md:grid-cols-2 gap-x-3">
            <div className="justify-items-center">
              <AccordionItem value="item-1" className="justify-items-center">
                <AccordionTrigger>
                  the quick fox jumps over the lazy dog
                </AccordionTrigger>
                <AccordionContent>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="justify-items-center">
                <AccordionTrigger>
                  the quick fox jumps over the lazy dog
                </AccordionTrigger>
                <AccordionContent>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="justify-items-center">
                <AccordionTrigger>
                  the quick fox jumps over the lazy dog
                </AccordionTrigger>
                <AccordionContent>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </AccordionContent>
              </AccordionItem>
            </div>
            <div className="justify-items-center">
              <AccordionItem value="item-4" className="justify-items-center">
                <AccordionTrigger>
                  the quick fox jumps over the lazy dog
                </AccordionTrigger>
                <AccordionContent>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="justify-items-center">
                <AccordionTrigger>
                  the quick fox jumps over the lazy dog
                </AccordionTrigger>
                <AccordionContent>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="justify-items-center">
                <AccordionTrigger>
                  the quick fox jumps over the lazy dog
                </AccordionTrigger>
                <AccordionContent>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </AccordionContent>
              </AccordionItem>
            </div>
          </div>
        </Accordion>
        <p className="text-xl text-center">Haven&apos;t got your answer? Contact our support</p>
      </div>
    </section>
  );
}
