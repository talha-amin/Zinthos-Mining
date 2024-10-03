import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white bg-darkGray/25 relative overflow-hidden">
      <div className="absolute left-[50%] bottom-0 -translate-x-1/2 translate-y-1/2 opacity-25 pointer-events-none">
        <div className="shadow-effect blur-[150px] aspect-square w-[200px]"></div>
      </div>
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
          {/* Logo and Text */}
          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:space-x-4">
            <Image
              width={100}
              height={100}
              src="/logo.svg"
              alt="Company logo"
              className="object-contain"
            />
            <p className="mt-4 text-gray-400 text-base max-w-[32ch] lg:mt-0">
              Welcome to Zinthos Mining (ZIN) – Powering the Future of Crypto Mining
            </p>
          </div>
          
          {/* Social Media Links */}
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Link href={"https://t.me/ZinthosOfficial"} className="relative aspect-square w-8 lg:w-10 inline-block">
              <Image
                src="/images/icons/facebook.svg"
                fill
                className="object-contain"
                alt="fb icon"
              />
            </Link>
            <Link href={"https://x.com/ZinthosOfficial"} className="relative aspect-square w-8 lg:w-10 inline-block">
              <Image
                src="/images/icons/twitter.svg"
                fill
                className="object-contain"
                alt="twitter icon"
              />
            </Link>
          </div>

          {/* Copyright Text */}
          <p className="text-sm lg:text-base text-gray-400 mt-4 lg:mt-0 lg:self-end">
            Copyright © 2024 Zinthos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
