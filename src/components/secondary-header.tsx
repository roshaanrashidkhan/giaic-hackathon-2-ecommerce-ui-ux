"use client"

import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";
import { TbMenuDeep } from "react-icons/tb";

interface Props {
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
}

export default function SecondaryHeader({
  pathname,
  setVisibility,
  visibility,
}: Props) {
  return (
    <header className="w-full flex items-center justify-center py-7 bg-[#F6F6F6] md:bg-white">
      <nav className="w-[85%]">
        <div className="hidden w-full py-5 md:items-center md:justify-center md:grid grid-cols-[20%_50%_30%]">
          <h2 className="font-bold text-2xl">Bandage</h2>
          <div className="flex md:gap-2 lg:gap-5 items-center text-gray-500 font-bold md:text-xs lg:text-sm tracking-wider">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="flex md:gap-3 lg:gap-6 items-center justify-self-end text-[#23A6F0] font-bold">
            <Link href="/login">Login</Link>
            <Link
              href="/signup"
              className="flex items-center text-sm lg:text-sm xl:text-base gap-2 text-white bg-[#23A6F0] hover:bg-[#278bc5] px-6 py-3 rounded-md"
            >
              <span>Become a member</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="flex w-[95%] bg-[#F6F6F6] md:hidden md:bg-white items-center justify-between gap-2">
          <h2 className="font-bold text-2xl">Bandage</h2>
          <div className="flex gap-3 items-center">
            {(pathname.length <= 1 || pathname.includes('about')) && (
              <>
                <BsSearch size={20} />
                <FiShoppingCart size={20} />
              </>
            )}
            <LuMenu
              className={!visibility ? `block` : "hidden"}
              size={30}
              onClick={() => setVisibility(!visibility)}
            />
            <TbMenuDeep
              className={visibility ? `block` : "hidden"}
              size={30}
              onClick={() => setVisibility(!visibility)}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
