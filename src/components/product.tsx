import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  productName: string;
  productCategory: string;
  beforePrice: number;
  afterPrice: number;
}

export default function Product({
  src,
  alt,
  afterPrice,
  beforePrice,
  productCategory,
  productName,
}: Props) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Image src={src} alt={alt} width={400} height={120} />
      <div className="text-center flex flex-col gap-2 font-bold tracking-[0.2px]">
        <h4>{productName}</h4>
        <h5 className="text-sm text-gray-500">{productCategory}</h5>
        <div className="price flex gap-2 items-center justify-center text-center font-bold tracking-[0.2px]">
          <h6 className="text-gray-400 text-base">${beforePrice}</h6>
          <h6 className="text-green-800 text-base">${afterPrice}</h6>
        </div>
        <div className="color-paletter flex items-center justify-center gap-2 text-center">
          <span className="bg-blue-500 p-2 rounded-full"></span>
          <span className="bg-green-800 p-2 rounded-full"></span>
          <span className="bg-yellow-600 p-2 rounded-full"></span>
          <span className="bg-black p-2 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
