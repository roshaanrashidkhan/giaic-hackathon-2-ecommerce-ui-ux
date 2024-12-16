interface Props {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  category: string;
  css?: string;
}

import Image from "next/image";

export default function CategoryImage({
  src,
  width,
  height,
  alt,
  category,
  css
}: Props) {
  return (
    <div className={css + " relative"}>
      <Image src={src} width={width} height={height} alt={alt} layout="fill" objectFit="cover" objectPosition="top" />
      <h4 className="lg:px-8 lg:py-3 md:px-3 md:py-2 px-4 py-2 rounded-md bg-white text-black absolute bottom-3 left-3 lg:bottom-5 lg:left-5 text-sm lg:text-base font-bold">
        {category}
      </h4>
    </div>
  );
}
