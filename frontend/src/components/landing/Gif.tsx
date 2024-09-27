"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logogif from "../../../public/images/landing/logogif.gif";
import { companies } from "@/data"; // Ensure the path to your data file is correct

const Gif = () => {
  const [currentText, setCurrentText] = useState("");
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  const typingSpeed = 100; // Adjusted typing speed (slower)
  const backspacingSpeed = 20; // Adjusted backspacing speed
  const pauseDuration = 1500; // Pause duration after a paragraph is fully typed (in milliseconds)

  useEffect(() => {
    const currentParagraph = companies[paragraphIndex].paragraph;
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (charIndex < currentParagraph.length) {
        // Add the next character
        timeoutId = setTimeout(() => {
          setCurrentText((prev) => prev + currentParagraph.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Finished typing, start the pause before backspacing
        setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      // Backspacing mode
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, backspacingSpeed);
      } else {
        // Move to the next paragraph
        setIsTyping(true);
        setParagraphIndex((prevIndex) => (prevIndex + 1) % companies.length);
      }
    }

    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, [charIndex, isTyping, paragraphIndex]);

  return (
    <section className="w-full h-screen flex justify-center items-center bg-neutralcolor">
      <div className="relative w-full h-full flex justify-center items-center">
        {/* The GIF Image */}
        <Image
          src={logogif}
          alt="Animated GIF"
          layout="fill"
          objectFit="cover"
          priority
          style={{ marginTop: '3%' }}
        />

        {/* The overlay text with the typewriter effect */}
        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <motion.h1
            // className="text-white text-center px-4 font-bold" // Remove fixed text size
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white text-center font-bold px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            {currentText}
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Gif;
