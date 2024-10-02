"use client";
import React, { useState } from "react";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/data";

const Hero = () => {
  

  
  
const buyMethodText = ["ETH","USDT","VISA"]
const buyMethodIcon = ["eth.svg","usdt.svg","visa.svg"]

const ROUND_TITLE = ["Round Not Yet Started","Round 1 Tilte","Round 2 Tilte","Round 3 Tilte"]



  return (
    <section className="relative">
     
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold xl:w-[30ch]"
            >
             Welcome to Zinthos Mining <span className="text-primary" style={{ color: '#00FFFF' }}>(ZIN)</span> Powering the Future of <span className="text-primary" style={{ color: '#00FFFF' }}>Crypto Mining</span>
            </motion.h1>
            <motion.h6
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-lg sm:text-lg md:text-lg lg:text-lg xl:w-[115ch]  text-justify"
            >
Zinthos Mining is a groundbreaking Meme-driven mining project designed to revolutionize the cryptocurrency mining space. We combine cutting-edge mining operations with a sustainable and investor-friendly tokenomics model that rewards participants and reinvests into the future.
</motion.h6>
          
          </motion.div>
          
        </div>
      </Container>
    </section>
  );
};

export default Hero;
