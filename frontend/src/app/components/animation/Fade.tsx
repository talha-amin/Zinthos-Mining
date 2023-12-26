"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  left?: boolean;
  className?: string;
};

function Fade({ children, left = false, className = "" }: Props) {
  return (
    <motion.div
      className={className}
      initial={{
        x: left ? -100 : 100,
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
      //   viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default Fade;
