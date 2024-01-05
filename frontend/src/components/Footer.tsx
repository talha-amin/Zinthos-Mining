import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white bg-darkGray/25 relative overflow-hidden">
      <div className="absolute left-[50%] bottom-0 -translate-x-1/2 translate-y-1/2 opacity-25 pointer-events-none">
        <div className="shadow-effect blur-[150px] aspect-square w-[200px]"></div>
      </div>
      <div className="max-w-7xl mx-auto pt-12 pb-5 px-4 sm:px-6 lg:pt-16 lg:px-8">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-7 gap-8">
          <div className="lg:col-span-2">
            <Image
              width={65}
              height={65}
              src="logo.svg"
              alt="Company logo"
              className="object-contain"
            />
            <p className="mt-8 text-gray-400 text-base max-w-[32ch] hidden lg:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:flex content-center items-center lg:justify-center gap-x-14 gap-y-4 flex-wrap col-span-3 text-lg text-neutral-300">
            {[
              { label: "Home", href: "/" },
              { label: "NFT Marketplace", href: "/" },
              { label: "Gaming Tournament", href: "/" },
              { label: "Photography", href: "/" },
              { label: "Art Tournament", href: "/" },
              { label: "Roadmap", href: "/" },
            ].map(({ label, href }, index) => {
              return (
                <Link key={index} className="hover:text-white duration-300 text-sm" href={href}>
                  {label}
                </Link>
              );
            })}
          </div>
          <div className="col-span-2 flex lg:justify-end">
            <div className="flex flex-col-reverse lg:flex-col gap-4">
              <div className="flex lg:justify-start justify-between lg:items-center">
                <Link
                  className="relative aspect-square w-full lg:w-10 inline-block"
                  href={"/"}
                >
                  <Image
                    src="/images/icons/facebook.svg"
                    fill
                    className="object-contain"
                    alt="fb icon"
                  />
                </Link>
                <Link
                  className="relative aspect-square w-full lg:w-10 inline-block"
                  href={"/"}
                >
                  <Image
                    src="/images/icons/instagram.svg"
                    fill
                    className="object-contain"
                    alt="fb icon"
                  />
                </Link>
                <Link
                  className="relative aspect-square w-full lg:w-10 inline-block"
                  href={"/"}
                >
                  <Image
                    src="/images/icons/twitter.svg"
                    fill
                    className="object-contain"
                    alt="fb icon"
                  />
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-4 bg-white flex items-center justify-center rounded-md sm:rounded-xl">
                  <Link
                    className="relative w-16 h-3 inline-block"
                    href={"/"}
                  >
                    <Image
                      src="/images/icons/visa.svg"
                      fill
                      className="object-contain"
                      alt="fb icon"
                    />
                  </Link>
                </div>
                <div className="px-3 py-4 bg-white flex items-center justify-center rounded-md sm:rounded-xl">
                  <Link
                    className="relative w-16 h-3 inline-block"
                    href={"/"}
                  >
                    <Image
                      src="/images/icons/paypal.svg"
                      fill
                      className="object-contain"
                      alt="fb icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-base text-gray-400 text-center mt-6">
          Copyright © 2023 Fennec. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
