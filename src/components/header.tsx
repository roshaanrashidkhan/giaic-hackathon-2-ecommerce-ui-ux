"use client"

import { FiPhone, FiShoppingCart } from "react-icons/fi";
import { BsEnvelope, BsSearch } from "react-icons/bs";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaRegUser, FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { TbMenuDeep } from "react-icons/tb";
import { LuMenu } from "react-icons/lu";

interface Props {
  visibility: boolean;
  setVisibility: Function;
  pathname: string;
  bgColor: string;
}

export default function Header({visibility, setVisibility, pathname, bgColor}: Props) {
  return (
    <header className="flex w-full justify center items-center">
      <nav className="flex flex-col w-full justify-center items-center">
        <div className={bgColor + " md:flex hidden w-full text-white py-5 items-center justify-center"}>
          <div className="w-[95%] flex items-center justify-between gap-2 font-bold 2xl:text-base lg:text-sm md:text-[10px]">
            <div className="flex items-center gap-6 justify-self-start">
              <div className="flex gap-1 items-center">
                <FiPhone className="text-sm xl:text-xl" />
                <h5>(225) 555-0118</h5>
              </div>
              <div className="flex gap-1 items-center">
                <BsEnvelope className="text-sm xl:text-xl" />
                <h5>michelle.rivera@example.com</h5>
              </div>
            </div>
            <div className="para justify-self-center">
              <p>Follow Us and get a chance to win 80% off</p>
            </div>
            <div className="flex items-center gap-2 justify-self-end">
              <p>Follow Us : </p>
              <div className="icons flex gap-4">
                <FaInstagram className="text-sm xl:text-xl" />
                <FaYoutube className="text-sm xl:text-xl" />
                <FaFacebook className="text-sm xl:text-xl" />
                <FaTwitter className="text-sm xl:text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-[#252B42] w-full flex items-center justify-center py-4">
          <div className="w-[95%] md:grid grid-cols-[20%_50%_30%] hidden">
            <h2 className="font-bold text-2xl">Bandage</h2>
            <div className="nav-links flex md:gap-2 lg:gap-5 items-center text-gray-500 font-bold md:text-xs lg:text-sm tracking-wider">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/">Pages</Link>
            </div>
            <div className="flex md:gap-3 lg:gap-6 items-center justify-self-end text-[#23A6F0]">
              <div className="flex items-center gap-2 md:text-xs lg:text-sm font-bold">
                <FaRegUser />
                <Link href="/login">Login</Link>
                <span className="text-sm">/</span>
                <Link href="/register">Register</Link>
              </div>
              <div className="flex gap-6 items-center">
                <BsSearch size={20}  />
                <div className="flex gap-1 items-center">
                    <FiShoppingCart size={20} />
                    <span>1</span>
                </div>
                <div className="flex gap-1 items-center">
                    <FaRegHeart size={20} />
                    <span>1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[95%] md:hidden items-center justify-between gap-2">
            <h2 className="font-bold text-2xl">Bandage</h2>
            <div className="flex gap-3 items-center">
              {(pathname.length <= 1 || pathname === '/') && (<><BsSearch size={20}  />
              <FiShoppingCart size={20} /></>)}
              <LuMenu className={!visibility ? `block` : "hidden"} size={30} onClick={(e) => setVisibility(!visibility)} />
              <TbMenuDeep className={visibility ? `block` : "hidden"} size={30} onClick={(e) => setVisibility(!visibility)} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
