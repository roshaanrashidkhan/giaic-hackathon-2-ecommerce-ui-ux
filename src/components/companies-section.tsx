import Image from "next/image";
import Heading from "./heading";

export default function BigCompanies() {
  return (
    <section className="w-full flex items-center justify-center py-20 bg-[#FAFAFA]">
      <div className="w-[85%]">
        <div className="flex flex-col gap-4 justify-center w-full">
          <Heading
            headingLgCSS="!text-[40px] text-[#252B42]"
            headingLg="Big Companies Are Here"
            headingSm={
              <>
                Problems trying to resolve the conflict between<br></br>
                the two major realms of Classical physics: Newtonian mechanics
              </>
            }
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-16">
          <Image src="/logo.png" width={103} height={100} alt="Logo" />
          <Image src="/logo.png" width={103} height={100} alt="Logo" />
          <Image src="/logo.png" width={103} height={100} alt="Logo" />
          <Image src="/logo.png" width={103} height={100} alt="Logo" />
          <Image src="/logo.png" width={103} height={100} alt="Logo" />
          <Image src="/logo.png" width={103} height={100} alt="Logo" />
        </div>
      </div>
    </section>
  );
}
