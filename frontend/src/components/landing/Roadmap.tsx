"use client";
import React, { useEffect, useRef } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { FADE_UP_ANIMATION_VARIANTS, roadmap } from "@/data";
import { motion, useAnimation, useInView } from "framer-motion";

const Roadmap = () => {
  const showRef = useRef(null);
  const hideRef = useRef(null);
  const isInView = useInView(showRef);
  const notHiding = useInView(hideRef);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    } else if (!notHiding) {
      mainControls.start("initial");
    }
  }, [isInView, notHiding]);

  const imageVars = {
    initial: { rotateY: -12 },
    animate: {
      rotateY: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="relative sec-p-y" ref={showRef} id="roadmap">
      <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="primary-shadow blur-[150px] opacity-[30%] aspect-square w-[600px]"></div>
      </div>
      <Container style={{ perspective: "576px" }}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold pb-2">
        Zinthos Mining Phases
        </h2>
        <div className="relative w-full h-5 my-3">
          <Image
            src="/images/landing/section-title.svg"
            className="object-contain"
            fill
            alt="title vector shape"
          />
        </div>
        <p className="text-center text-neutral-400">
        Zinthos Mining is structured around 5 strategic phases that progressively expand our mining capacity and Meme ecosystem. Each phase brings new opportunities for Meme holders and miners alike, ensuring steady growth and reinvestment.
        </p>
        <motion.div
          variants={imageVars}
          initial="initial"
          animate={mainControls}
          className="space-y-8 relative mt-12 before:hidden lg:before:block before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-white"
        >
          {roadmap.map(({ title, desc, img }, i) => {
            return (
              <div
                key={i}
                className="even:ml-auto text-center lg:text-start lg:w-1/2 relative flex items-center justify-between  lg:even:flex-row-reverse group is-active"
              >
                <div className="absolute left-0 group-odd:right-0 top-[50%] lg:-translate-y-1/2 hidden lg:flex items-center justify-center rounded-full  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 lg:order-1 lg:group-odd:translate-x-1/2 lg:group-even:-translate-x-1/2">
                  <Image
                    width={50}
                    height={50}
                    className="w-10 h-10"
                    src="/images/icons/bead.svg"
                    alt="icon"
                  />
                </div>
                <div className="relative roadmap-item items-center lg:w-4/5 mx-auto lg:mx-0 shadow-inner px-8 py-6 lg:p-8 rounded-2xl shadow flex gap-4">
                  {/* smaller dot: mobile + desktop */}
                  <div className="absolute group-first:hidden lg:group-first:flex top-0 left-[50%] lg:group-odd:right-0 lg:top-[50%] lg:group-even:left-0  -translate-y-1/2 flex items-center justify-center rounded-full -translate-x-1/2 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 lg:order-1 lg:group-odd:translate-x-1/2 lg:group-even:-translate-x-1/2">
                    <Image
                      width={15}
                      height={15}
                      src="/images/icons/bead.svg"
                      alt="icon"
                    />
                  </div>
                  {/* mobile only small dot */}
                  <div className="absolute z-20 lg:hidden bottom-0 left-[50%] translate-y-1/2 -translate-x-1/2 group-last:hidden">
                    <Image
                      width={15}
                      height={15}
                      src="/images/icons/bead.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="relative aspect-square w-72 hidden lg:inline-block">
                    <Image
                      src={img}
                      fill
                      alt="roadmap item image"
                      className="object-contain"
                    />
                  </div>
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
                  >
                    <motion.div
                      variants={FADE_UP_ANIMATION_VARIANTS}
                      className="flex items-center justify-between space-x-2 mb-1"
                    >
                      <div className="font-semibold text-2xl lg:text-3xl mx-auto lg:mx-0 capitalize">
                        {title}
                      </div>
                    </motion.div>
                    <motion.div
                      variants={FADE_UP_ANIMATION_VARIANTS}
                      className="lg:text-lg font-light font-medium"
                    >
                      {desc}
                    </motion.div>
                  </motion.div>
                </div>
                <hr className="lg:w-1/5 h-[1px] bg-white hidden lg:block" />
                {/* MOBILE ONLY small LINE */}
                <hr className="h-8 w-[4px] bg-[#D9D9D980] lg:hidden bottom-0 absolute left-[50%] -translate-x-1/2 translate-y-full group-last:hidden" />
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
export default Roadmap;
