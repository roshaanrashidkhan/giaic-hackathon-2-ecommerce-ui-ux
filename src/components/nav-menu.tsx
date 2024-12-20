import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export default function NavMenu({pathname, parentCSS}: {pathname: string, parentCSS?: string;}) {
  return (
    <section className={parentCSS + " w-full md:hidden flex flex-col items-center justify-center gap-5 py-10 transition-all duration-200 ease-in text-3xl text-gray-400 font-medium"}>
      <Link href="/">Home</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/contact">Contact</Link>
      {(pathname.length > 1 && pathname != '/about' && pathname != '/contact') && (<><div className="flex items-center gap-2 text-3xl font-medium text-[#23A6F0]">
        <FaRegUser />
        <Link href="/login">Login</Link>
        <span>/</span>
        <Link href="/register">Register</Link>
      </div>
      <div className="contents gap-5 items-center text-[#23A6F0]">
        <BsSearch size={30} />
        <div className="flex gap-1 items-center">
          <FiShoppingCart size={30} />
          <span className="text-xs">1</span>
        </div>
        <div className="flex gap-1 items-center">
          <FaRegHeart size={30} />
          <span className="text-xs">1</span>
        </div>
      </div></>)}
    </section>
  );
}