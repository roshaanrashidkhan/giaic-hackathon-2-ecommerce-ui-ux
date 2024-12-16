import Link from "next/link";
import { ReactNode } from "react";

export default function Footer({footerHeading}: {footerHeading: ReactNode}) {
  return (
    <footer>
      {footerHeading}
      <div className="min-h-[272px] w-full flex justify-center items-center">
        <div className="w-[85%] grid grid-rows-1 md:grid-cols-[1fr_1fr_1fr_1fr_2fr] gap-x-2">
          <div className="flex flex-col gap-2 text-sm font-bold text-gray-500">
            <h5 className="mt-5 mb-2 text-base text-black">Company Info</h5>
            <Link href="/about">About Us</Link>
            <Link href="/career">Career</Link>
            <Link href="/hiring">We are hiring</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="flex flex-col gap-2 text-sm font-bold text-gray-500">
            <h5 className="mt-5 mb-2 text-base text-black">Legal</h5>
            <Link href="/about">About Us</Link>
            <Link href="/career">Career</Link>
            <Link href="/hiring">We are hiring</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="flex flex-col gap-2 text-sm font-bold text-gray-500">
            <h5 className="mt-5 mb-2 text-base text-black">Features</h5>
            <Link href="/about">Business Marketing</Link>
            <Link href="/career">User Analytic</Link>
            <Link href="/hiring">Live Chat</Link>
            <Link href="/blog">Unlimited Support</Link>
          </div>
          <div className="flex flex-col gap-2 text-sm font-bold text-gray-500">
            <h5 className="mt-5 mb-2 text-base text-black">Resources</h5>
            <Link href="/about">IOS & Android</Link>
            <Link href="/career">Watch a Demo</Link>
            <Link href="/hiring">Customers</Link>
            <Link href="/blog">API</Link>
          </div>
          <div className="flex flex-col gap-2 text-sm font-bold text-gray-500 w-full">
            <h5 className="mt-5 mb-2 text-base text-black">Get In Touch</h5>
            <div className="w-full">
              <form className="flex items-center w-full">
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  className="rounded rounded-r-none font-medium outline-none bg-gray-100 w-full px-2 py-3 border border-gray-400 border-r-0"
                />
                <button className="bg-[#23A6F0] text-white p-[13px] rounded-l-none rounded">
                  Subscribe
                </button>
              </form>
              <p className="font-medium text-xs">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-5 mt-4 flex items-center justify-center bg-gray-100">
        <div className="w-[85%] md:text-left text-center">
          <p className="font-bold text-sm text-gray-500">Made With Love By Finland. All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
}
