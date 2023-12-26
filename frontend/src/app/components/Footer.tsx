import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white bg-darkGray relative overflow-hidden">
      <div className="absolute left-[50%] bottom-0 -translate-x-1/2 translate-y-1/2 opacity-[65%] pointer-events-none">
        <div className="shadow-effect blur-[200px] aspect-square w-[100px]"></div>
      </div>
      <div className="max-w-7xl mx-auto pt-12 pb-5 px-4 sm:px-6 lg:pt-16 lg:px-8">
        <div className="grid md:grid-cols-7 gap-8">
          <div className="md:col-span-2">
            <Image
              width={65}
              height={65}
              src="logo.svg"
              alt="Company logo"
              className="object-contain"
            />
            <p className="mt-8 text-gray-400 text-base max-w-[32ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="flex content-center items-center md:justify-center gap-x-6 gap-y-4 flex-wrap col-span-3 text-lg font-bold text-neutral-300">
            <Link href="/">Home</Link>
            <Link href="/">NFT Marketplace</Link>
            <Link href="/">Gaming Tournament</Link>
            <Link href="/">Photography</Link>
            <Link href="/">Art Tournament </Link>
            <Link href="/">Roadmap</Link>
          </div>
          <div className="col-span-2 flex md:justify-end">
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <Link
                  className="relative aspect-square w-10 inline-block"
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
                  className="relative aspect-square w-10 inline-block"
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
                  className="relative aspect-square w-10 inline-block"
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
                <div className="px-8 py-4 bg-white flex items-center justify-center rounded-lg">
                  <Link
                    className="relative aspect-[1.85] w-8 inline-block rounded-lg"
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
                <div className="px-4 py-2 bg-white flex items-center justify-center rounded-lg">
                  <Link
                    className="relative aspect-[1.85] w-16 inline-block"
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
        <p className="text-base text-gray-400 xl:text-center mt-6">
          © 2023 Fennec. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
