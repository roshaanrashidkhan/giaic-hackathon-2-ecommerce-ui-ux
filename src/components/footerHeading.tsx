import { ReactNode } from "react";

interface Props {
    heading: string;
    content: ReactNode;
    css?: string;
    nodeCSS?: string;
}

export default function FooterHeading({heading, content, css, nodeCSS}: Props) {
  return (
    <div className="heading min-h-[142px] w-full bg-[#FAFAFA] shadow-sm flex justify-center items-center">
      <div className={css + " w-[85%] flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between"}>
        <h2 className="text-2xl font-bold">{heading}</h2>
        <div className={nodeCSS + " text-2xl text-[#23A6F0] flex gap-4 items-center"}>
          {content}
        </div>
      </div>
    </div>
  );
}
