"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import useMobileDetect from "@/app/hooks/useMobileDetect";

type Props = {
  children: ReactNode;
  left?: boolean;
  className?: string;
};

function Fade({ children, left = false, className = "" }: Props) {
  const isMobile = useMobileDetect();
  const x = isMobile ? 0 : left ? -100 : 100;
  return (
    <motion.div
      className={className}
      initial={{
        y: -30,
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0, // Slide in to its original position
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
