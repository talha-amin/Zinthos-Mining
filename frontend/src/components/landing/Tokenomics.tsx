"use client";
import React, { useEffect, useRef } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { staggeredSlide, tokenomics } from "@/data";
import Fade from "../animation/Fade";
import { motion, useAnimation, useInView } from "framer-motion";

const Tokenomics = () => {
  const showRef = useRef(null);
  const isInView = useInView(showRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    } else {
      mainControls.start("initial");
    }
  }, [isInView]);

  const tokenData = [
    {
      label: 'Token Symbol',
      value: 'ZIN',
    },
    {
      label: 'Total Supply',
      value: '500 Trillion',
    },
    {
      label: 'Blockchain',
      value: 'Blockchain ETH',
    },
  ];
  

  return (
    <section className="sec-p-y">
      <Container>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold pb-2">
          Zinthos Mining Tokenomics
        </h2>
        <div className="relative w-full h-5">
          <Image
            src="/images/landing/section-title.svg"
            className="object-contain"
            fill
            alt="title vector shape"
          />
        </div>
        <p className="text-center text-neutral-400">
          Zinthos Mining tokenomics drive ecosystem growth, balancing supply, demand,
          and utility for sustained value creation.
        </p>
        {/* grid lg:grid-cols-2 */}
        <div className="items-center pt-12">
          {/* <Fade left className="relative w-full aspect-square">
            <div className="absolute pointer-events-none flex items-start justify-center opacity-[40%] w-full h-full">
              <div className="primary-shadow blur-[100px] h-[75%] w-[75%]"></div>
            </div> */}
            {/* <Image
              fill
              src="/images/landing/tokenomics.png"
              className="object-contain"
              alt="tokenomics chart"
            /> */}
          {/* </Fade> */}
          <Fade>
            {/* <ul ref={showRef} className="flex flex-col gap-3">
              {tokenomics.map(({ label, value, tokens, colorClass }, i) => {
                return (
                  <motion.li
                    key={i}
                    variants={staggeredSlide}
                    initial="initial"
                    animate={mainControls}
                    custom={i}
                    className={`tokenomics-item relative overflow-hidden flex items-center justify-between bg-[#ffffff0f] py-3 pr-3 pl-5 rounded-lg after:absolute after:content-[''] after:top-0 after:left-0 after:h-full after:w-2 ${colorClass}`}
                  >
                    <div className="flex flex-col gap-2 justify-between">
                      <span>{value}%</span>
                      <p className="text-sm">{label}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <span>Tokens</span>
                      <span>{tokens.toLocaleString()}</span>
                    </div>
                  </motion.li>
                );
              })}
             </ul>  */}
          <ul className=" flex flex-col gap-3">
  {tokenData.map(({ label, value }, i) => {
    return (
      <li
        key={i}
        className="relative flex items-center justify-center bg-[#ffffff0f] py-3 px-4 md:px-6 rounded-lg"
      >
        <span className="text-sm md:text-base text-center">
          {label}: {value}
        </span>
      </li>
    );
  })}
            </ul>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Tokenomics;
