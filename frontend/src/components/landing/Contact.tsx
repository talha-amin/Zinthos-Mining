"use client";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import Fade from "../animation/Fade";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/data";
const Contact = () => {
  return (
    <div className="text-white sec-p-y flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center w-full max-w-6xl">
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
          className="flex flex-col space-y-6 lg:w-1/2"
        >
          <motion.h1
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-5xl font-bold text-primary flex items-center justify-center" style={{ color: '#00FFFF' }}>
          
            Join Us Today!
          </motion.h1>
          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-neutral-300  text-center"
          >
            Be a part of the Zinthos Mining revolution. Invest in the ZIN token and benefit from a unique profit distribution model that puts growth, liquidity, and value at the forefront. Together, we are building the future of crypto mining.
          </motion.p>
          {/* <div className="space-y-4">
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex items-center space-x-3 lg:text-xl text-neutral-300"
            >
              <Image
                width={40}
                height={40}
                className="object-contain"
                src="/images/icons/email.svg"
                alt="emailIcon"
              />
              <span>kenzi.lawson@example.com</span>
            </motion.div>
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex items-center space-x-3 lg:text-xl text-neutral-300"
            >
              <Image
                width={40}
                height={40}
                className="object-contain"
                src="/images/icons/phone.svg"
                alt="emailIcon"
              />

              <span>(603) 555-0123</span>
            </motion.div>
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex items-center space-x-3 lg:text-xl text-neutral-300"
            >
              <Image
                width={40}
                height={40}
                className="object-contain"
                src="/images/icons/location.svg"
                alt="emailIcon"
              />

              <span>
                4517 Washington Ave. Manchester, <br /> Kentucky 39495
              </span>
            </motion.div>
          </div> */}
        </motion.div>
        {/* <div className="relative overflow-hidden bg-darkGray/25 px-4 py-8 lg:p-8 rounded-xl mt-10 lg:mt-0 lg:w-1/2 lg:ml-10">
          <div className="absolute left-[50%] top-0 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
            <div className="shadow-effect blur-[150px] aspect-square w-[300px]"></div>
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-6 text-center">
            Say Something
          </h2>
          <form className="flex flex-col space-y-4">
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            <input
              className="ring ring-1 ring-white/25 flex h-12 w-full rounded-md px-3 py-2 text-sm bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              id="name"
              placeholder="Your name"
            />
            <label htmlFor="phone" className="font-medium">
              Phone
            </label>

            <input
              className="ring ring-1 ring-white/25 flex h-12 w-full rounded-md px-3 py-2 text-sm bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="Phone number"
            />
            <label htmlFor="email" className="font-medium">
              Email
            </label>

            <input
              className="ring ring-1 ring-white/25 flex h-12 w-full rounded-md px-3 py-2 text-sm bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="Email"
            />
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your text..."
              className="resize-none h-32 ring ring-1 ring-white/25 flex h-12 w-full rounded-md px-3 py-2 text-sm bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
            <div className="flex justify-center">
              <Button squared>Submit</Button>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
