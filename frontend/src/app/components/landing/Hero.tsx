import Image from "next/image";
import React from "react";
import HeroTimer from "./HeroTimer";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute pointer-events-none left-0 top-0 -z-10  w-full">
        <div className="relative w-full aspect-square">
          <Image
            src="/images/landing/sun.png"
            fill
            className="object-contain object-top"
            alt="backgroundImg"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-8 pt-32">
        <h1 className="text-center text-7xl font-bold max-w-[20ch]">
          Revolutionizing <span className="text-primary">Crypto</span> and{" "}
          <span className="text-primary">Fintech</span> Products
        </h1>
        <p className="text-xl font-bold max-w-[45ch]">
          Explore the Future of Finance with Innovative Solutions, Seamlessly
          Bridging Traditional and Digital Economies.
        </p>
        {/* hero box */}
        <div className="p-[1px] overflow-hidden hero-box-wrapper w-full max-w-4xl mt-5">
          <div className="hero-box w-full bg-black p-6 text-white mx-auto w-full relative">
            <div className="absolute left-[50%] top-0 -translate-x-1/2 -translate-y-1/2 opacity-[65%] pointer-events-none">
              <div className="shadow-effect blur-[150px] aspect-square w-[350px]"></div>
            </div>
            <h2 className="text-3xl font-bold text-center mb-4">
              Buy In Before Price Increase
            </h2>
            <p className="text-center text-xl font-bold mb-6">STAGE 2: PUBLIC ROUND</p>
            <HeroTimer />
            <div className="max-w-md mx-auto">
              <div className="flex justify-between items-center h-6 mb-1">
                <span className="text-xs">SOFTCAP</span>
                <span className="text-xs">HARDCAP</span>
              </div>
              <div className="bg-white h-6 rounded-full mb-4">
                <div
                  className="bg-gradient-to-l from-[#FFD300] to-[#EB6335] h-full rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="text-center mb-6">
              <span className="text-xs">
                USDT RAISED: $5,161,020.05 / $5,828,309
              </span>
            </div>
            <div className="flex items-center gap-5 md:gap-4 mb-6 max-w-md mx-auto md:px-5">
              <hr className="h-[1px] bg-white w-full" />
              <span className="text-xs whitespace-nowrap">Instant Buy</span>
              <hr className="h-[1px] bg-white w-full" />
            </div>
            <div className="text-white flex justify-around items-center space-x-2 mb-6 max-w-md mx-auto md:px-8">
              <button className="inline-flex gap-3 items-center justify-center rounded-md text-sm font-medium ring ring-1 ring-white h-10 px-4 py-2">
                <Image width={20} height={20} className="object-contain" src="/images/icons/eth.svg" alt="ethereum Icon"/> ETH
              </button>
              <button className="inline-flex gap-3 items-center justify-center rounded-md text-sm font-medium ring ring-1 ring-white h-10 px-4 py-2">
              <Image width={20} height={20} className="object-contain" src="/images/icons/usdt.svg" alt="ethereum Icon"/> USDT
              </button>
              <button className="inline-flex gap-3 items-center justify-center rounded-md text-sm font-medium ring ring-1 ring-white h-10 px-4 py-2">
              <Image width={20} height={20} className="object-contain" src="/images/icons/visa.svg" alt="ethereum Icon"/> Card
              </button>
            </div>
            <div className="flex justify-center">
              <Button fullWidth className="max-w-md">
                Buy Fennec
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
