import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="max-w-7xl mx-auto pt-12 pb-5 px-4 sm:px-6 lg:pt-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <Image width={65} height={65} src="logo.svg" alt="Company logo" className="object-contain" />
            <p className="mt-8 text-gray-400 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center justify-center flex-wrap text-lg font-bold gap-x-8 gap-y-4">
                <Link href="/">Home</Link>
                <Link href="/">NFT Marketplace</Link>
                <Link href="/">Gaming Tournament</Link>
                <Link href="/">Photography</Link>
                <Link href="/">Art Tournament </Link>
                <Link href="/">Roadmap</Link>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="flex space-x-6">
                  <a className="text-gray-400 hover:text-gray-300" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-400 hover:text-gray-300" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-6 w-6"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a className="text-gray-400 hover:text-gray-300" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex justify-center md:justify-start">
                <img src="/placeholder.svg" alt="Visa" className="h-8" />
              </div>
              <div className="flex justify-center md:justify-end">
                <img src="/placeholder.svg" alt="PayPal" className="h-8" />
              </div>
            </div>
          </div>
        </div>
          <p className="text-base text-gray-400 xl:text-center">
            © 2023 Fennec. All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;
