import { ReactNode } from "react";

interface Props {
  headingLg: string;
  headingSm: string | ReactNode;
  headingLgCSS?: string;
  headingSmCSS?: string;
}

export default function Heading({
  headingLg,
  headingSm,
  headingLgCSS,
  headingSmCSS,
}: Props) {
  return (
    <>
      <h3
        className={
          headingLgCSS +
          " text-lg md:text-2xl font-bold text-center tracking-[0.1px]"
        }
      >
        {headingLg}
      </h3>
      <h4
        className={headingSmCSS + " text-gray-600 text-center tracking-[0.2px]"}
      >
        {headingSm}
      </h4>
    </>
  );
}
