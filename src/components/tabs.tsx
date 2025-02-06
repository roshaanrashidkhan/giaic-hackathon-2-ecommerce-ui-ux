import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function TabsComponent() {
  return (
    <section className="w-full flex items-center justify-center mt-10">
      <div className="w-[85%]">
        <Tabs defaultValue="description">
          <TabsList className="flex items-center justify-center gap-5 bg-white">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="info">Additional Information</TabsTrigger>
            <TabsTrigger value="reviews">Reviews (0)</TabsTrigger>
          </TabsList>
          <hr className="bg-gray-200 h-0.5 my-5" />
          <TabsContent value="description">
            <div className="grid grid-cols-3 relative text-[#252B42] gap-x-10 items-start">
              <Image
                src="/desc-pic.png"
                layout="responsive"
                width={400}
                height={200}
                className="object-cover shadow-[7px_7px_0_8px_#F5F5F5] rounded-[2px]"
                alt="description image"
              />
              <div>
                <h2 className="text-2xl font-bold">The quick fox jumps over</h2>
                <br></br>
                <div className="text-sm text-[#737373] w-[95%]">
                  <p>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                    <br></br>
                    <br></br>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                    <br></br>
                    <br></br>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="text-2xl font-bold text-left">
                    the quick fox jumps over
                  </h2>
                  <Accordion type="multiple" className="my-5">
                    <AccordionItem value="question-1">
                      <AccordionTrigger className="font-bold py-2 text-sm text-[#737373]">
                        the quick fox jumps over
                      </AccordionTrigger>
                      <AccordionContent className="pl-6">
                        Met minim Mollie non desert Alamo est sit cliquey dolor
                        do met sent. RELIT official consequent door ENIM RELIT
                        Mollie. Excitation venial consequent sent nostrum met.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="question-2">
                      <AccordionTrigger className="font-bold py-2 text-sm text-[#737373]">
                        the quick fox jumps over
                      </AccordionTrigger>
                      <AccordionContent className="pl-6">
                        Met minim Mollie non desert Alamo est sit cliquey dolor
                        do met sent. RELIT official consequent door ENIM RELIT
                        Mollie. Excitation venial consequent sent nostrum met.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="question-3">
                      <AccordionTrigger className="font-bold py-2 text-sm text-[#737373]">
                        the quick fox jumps over
                      </AccordionTrigger>
                      <AccordionContent className="pl-6">
                        Met minim Mollie non desert Alamo est sit cliquey dolor
                        do met sent. RELIT official consequent door ENIM RELIT
                        Mollie. Excitation venial consequent sent nostrum met.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="question-4">
                      <AccordionTrigger className="font-bold py-2 text-sm text-[#737373]">
                        the quick fox jumps over
                      </AccordionTrigger>
                      <AccordionContent className="pl-6">
                        Met minim Mollie non desert Alamo est sit cliquey dolor
                        do met sent. RELIT official consequent door ENIM RELIT
                        Mollie. Excitation venial consequent sent nostrum met.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-left">
                    the quick fox jumps over
                  </h2>
                  <Accordion type="multiple" className="my-5">
                    <AccordionItem value="question-5">
                      <AccordionTrigger className="font-bold py-2 text-sm text-[#737373]">
                        the quick fox jumps over
                      </AccordionTrigger>
                      <AccordionContent className="pl-6">
                        Met minim Mollie non desert Alamo est sit cliquey dolor
                        do met sent. RELIT official consequent door ENIM RELIT
                        Mollie. Excitation venial consequent sent nostrum met.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="question-6">
                      <AccordionTrigger className="font-bold py-2 text-sm text-[#737373]">
                        the quick fox jumps over
                      </AccordionTrigger>
                      <AccordionContent className="pl-6">
                        Met minim Mollie non desert Alamo est sit cliquey dolor
                        do met sent. RELIT official consequent door ENIM RELIT
                        Mollie. Excitation venial consequent sent nostrum met.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="question-7">
                      <AccordionTrigger className="font-bold py-2 text-sm text-[#737373]">
                        the quick fox jumps over
                      </AccordionTrigger>
                      <AccordionContent className="pl-6">
                        Met minim Mollie non desert Alamo est sit cliquey dolor
                        do met sent. RELIT official consequent door ENIM RELIT
                        Mollie. Excitation venial consequent sent nostrum met.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="info">Change your password here.</TabsContent>
          <TabsContent value="reviews">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
