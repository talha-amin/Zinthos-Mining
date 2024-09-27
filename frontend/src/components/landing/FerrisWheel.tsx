"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../ui/Container";

const FerrisWheel = () => {
  const duration = 20;
  const ferrisItems = [
    {
      image: "/images/landing/circle-1.png",
      href: "/",
    },
    {
      image: "/images/landing/circle-2.png",
      href: "/",
    },
    {
      image: "/images/landing/circle-3.png",
      href: "/",
    },
    {
      image: "/images/landing/circle-4.png",
      href: "/",
    },
    {
      image: "/images/landing/circle-5.png",
      href: "/",
    },
    {
      image: "/images/landing/circle-6.png",
      href: "/",
    },
  ];

  return (
    <section className="sec-p-y">
      <Container>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold pb-2">
        Zinthos Mining ecosystem
        </h2>
        <div className="relative w-full h-5">
          <Image
            src="/images/landing/section-title.svg"
            className="object-contain"
            fill
            alt="title vector shape"
          />
        </div>
        <motion.div
          animate={{ rotate: "360deg" }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
          className="w-4/5 sm:w-2/3 rounded-full aspect-square relative mx-auto mt-16"
        >
          {ferrisItems.map(({image, href}, idx) => {
            return (
              <div
                key={idx}
                className="w-[1px] bg-[#D9D9D9] h-1/2 absolute left-1/2 top-0 origin-bottom -translate-x-1/2"
                style={{ rotate: `${idx * 60}deg` }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute top-8 left-0 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative w-3 h-3">
                      <Image src="/images/icons/bead.svg" fill alt="Image" />
                    </div>
                  </div>
                  <div
                    className={
                      `w-16 h-16 xs:w-20 xs:h-20 rounded-10 top-0 left-0 -translate-x-1/2 -translate-y-1/2 absolute revolving-object`
                    }
                  >
                    <Link
                      href={href}
                      className="inline-block relative w-full h-full rounded-full pointer-events-auto"
                    >
                      <motion.div
                        animate={{ rotate: "-360deg" }}
                        transition={{
                          duration,
                          ease: "linear",
                          repeat: Infinity,
                        }}
                        className="w-full h-full"
                      >
                        <Image
                          src={image}
                          fill
                          alt="Image"
                          style={{ rotate: `-${idx * 60}deg` }}
                        />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="absolute w-16 h-16 flex rounded-full items-center  border-[0.5px] justify-center bg-[#080808] border-[#646464] logoShadow  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <motion.div
              animate={{ rotate: "-360deg" }}
              transition={{
                duration,
                ease: "linear",
                repeat: Infinity,
              }}
              className="relative  w-2/3 h-2/3  pointer-events-auto "
            >
              <Image
                src={"/logo.svg"}
                className="object-contain"
                fill
                alt="Logo"
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FerrisWheel;
