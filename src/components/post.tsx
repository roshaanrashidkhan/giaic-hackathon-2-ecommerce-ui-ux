import Image from "next/image";
import { CiAlarmOn } from "react-icons/ci";
import { FaChartArea } from "react-icons/fa";

export default function Post() {
  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="relative">
        <Image
          src="/post-image.png"
          width={650}
          height={150}
          alt="post images"
        />
        <mark className="absolute top-4 left-4 bg-[#E74040] text-white text-sm font-bold px-3 rounded py-1">NEW</mark>
      </div>
      <div className="p-3 flex flex-col gap-2">
        <div className="flex gap-3 text-xs">
          <button className="hover:text-green-700">Google</button>
          <button className="hover:text-green-700">Trending</button>
          <button className="hover:text-green-700">New</button>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg lg:text-xl">Loudest à la Madison #1 (L'integral)</h2>
          <p>
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <div className="flex justify-between items-center text-xs md:text-[10px] lg:text-xs gap-x-2">
            <div className="flex gap-2 items-center">
              <CiAlarmOn className="text-sm lg:text-lg" color="blue" />
              <p>22 April 2024</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaChartArea className="text-sm lg:text-lg" color="green" />
              <p>10 Comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
