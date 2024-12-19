import { ReactNode } from "react";
import UnorderedItem from "./unordered-item";

interface Props {
    packageType: string;
    para: string;
    price: string;
    time: string;
    detail: ReactNode;
    submitButton: ReactNode;
    css?: string;
}

export default function PriceCard({css, packageType, para, price, time, detail, submitButton}: Props) {
  return (
    <div className={css + " p-12 flex flex-col gap-5 items-center justify-center text-center font-bold border rounded-md"}>
      <h3 className="text-2xl">{packageType}</h3>
      <p className="text-[#737373]">{para}</p>
      <div className="flex items-center gap-2 text-[#23A6F0]">
        <h3 className="text-[40px]">{price}</h3>
        <div className="text-left">
          <h6 className="text-2xl">$</h6>
          <p className="text-sm text-[#8EC2F2]">{time}</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-4 text-left">
        {detail}
      </div>
      {submitButton}
    </div>
  );
}
