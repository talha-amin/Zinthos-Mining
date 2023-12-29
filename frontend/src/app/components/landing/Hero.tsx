"use client";
import Image from "next/image";
import React from "react";
import HeroTimer from "./HeroTimer";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Fade from "../animation/Fade";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/app/data";
import { UseFennecContext } from "@/app/context/FennecContext";

const Hero = () => {


  const {address,setAddress} = UseFennecContext();



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
      <Container>
        <div className="grid lg:grid-cols-2 items-center gap-8 pt-32">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
            className="flex flex-col gap-6 text-center lg:text-start"
          >
            <motion.h1
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold xl:w-[20ch]"
            >
              Revolutionizing <span className="text-primary">Crypto</span> and{" "}
              <span className="text-primary">Fintech</span> Products
            </motion.h1>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="font-bold max-w-[45ch] text-xs md:text-sm lg:text-base text-neutral-300 mx-auto lg:mx-0"
            >
              Explore the Future of Finance with Innovative Solutions,
              Seamlessly Bridging Traditional and Digital Economies.
            </motion.p>
          </motion.div>
          {/* hero box */}
          <Fade className="p-[1px] max-w-md mx-auto lg:ms-auto overflow-hidden hero-box-wrapper w-full mt-5">
            <div className="hero-box w-full bg-black px-4 py-6 lg:p-6 text-white mx-auto w-full relative">
              <div className="absolute left-[50%] top-0 -translate-x-1/2 -translate-y-1/2 opacity-[65%] pointer-events-none">
                <div className="shadow-effect blur-[150px] aspect-square w-[350px]"></div>
              </div>
              <h2 className="text-2xl font-bold text-center mb-4">
                Buy In Before Price Increase
              </h2>
              <p className="text-center text-xs md:text-sm lg:text-lg font-bold mb-6">
                STAGE 2: PUBLIC ROUND
              </p>
              <HeroTimer />
              <div className=" mx-auto">
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
              <div className="flex items-center gap-5 md:gap-4 mb-6  mx-auto">
                <hr className="h-[1px] bg-white w-full" />
                <span className="text-xs whitespace-nowrap">Instant Buy</span>
                <hr className="h-[1px] bg-white w-full" />
              </div>
              <div className="text-white grid grid-cols-3 gap-5 sm:gap-8 items-center mb-6  mx-auto">
                <button className="inline-flex gap-1 sm:gap-3 items-center justify-center rounded-md text-[9px] sm:text-sm font-medium ring ring-[.75px] ring-white h-10 px-2 sm:px-4 py-1 sm:py-2">
                  <div className="h-[75%] sm:h-full aspect-square relative">
                    <Image
                      fill
                      className="object-contain"
                      src="/images/icons/eth.svg"
                      alt="ethereum Icon"
                    />{" "}
                  </div>{" "}
                  ETH
                </button>
                <button className="inline-flex gap-1 sm:gap-3 items-center justify-center rounded-md text-[9px] sm:text-sm font-medium ring ring-[.75px] ring-white h-10 px-2 sm:px-4 py-1 sm:py-2">
                  <div className="h-[75%] sm:h-full aspect-square relative">
                    <Image
                      fill
                      className="object-contain"
                      src="/images/icons/usdt.svg"
                      alt="ethereum Icon"
                    />{" "}
                  </div>{" "}
                  USDT
                </button>
                <button className="inline-flex gap-1 sm:gap-3 items-center justify-center rounded-md text-[9px] sm:text-sm font-medium ring ring-[.75px] ring-white h-10 px-2 sm:px-4 py-1 sm:py-2">
                  <div className="h-[75%] sm:h-full aspect-square relative">
                    <Image
                      fill
                      className="object-contain"
                      src="/images/icons/visa.svg"
                      alt="ethereum Icon"
                    />{" "}
                  </div>{" "}
                  Card
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label htmlFor="ethAmount" className="text-xs">
                    Pay with Eth
                  </label>
                  <div className="inline-flex gap-3 items-center justify-center rounded-md text-xs sm:text-sm font-medium ring ring-[.75px] ring-white h-10 px-2 sm:px-4 py-1 sm:py-2">
                    <input
                      id="ethAmount"
                      type="number"
                      className="w-fit min-w-0 bg-transparent focus:outline-none"
                      placeholder="0"
                    />
                    <div className="h-full aspect-square relative">
                      <Image
                        fill
                        className="object-contain"
                        src="/images/icons/eth.svg"
                        alt="ethereum Icon"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="ethAmount" className="text-xs">
                    Receive Fennec
                  </label>
                  <div className="inline-flex gap-3 items-center justify-center rounded-md text-xs sm:text-sm font-medium ring ring-[.75px] ring-white h-10 px-2 sm:px-4 py-1 sm:py-2">
                    <input
                      id="ethAmount"
                      type="number"
                      className="w-fit min-w-0 bg-transparent focus:outline-none"
                      placeholder="0"
                    />
                    <div className="h-full aspect-square relative">
                      <Image
                        fill
                        className="object-contain"
                        src="/logo.svg"
                        alt="ethereum Icon"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <Button fullWidth className="" onClick={()=>setAddress("data 2")} >
                  Buy Fennec {address}
                </Button>
              </div>
            </div>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
