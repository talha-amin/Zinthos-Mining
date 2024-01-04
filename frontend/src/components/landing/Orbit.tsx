"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  image: string;
  href: string;
  duration?: number;
  position?: string;
  children?: ReactNode;
};

const Orbit = ({
  image,
  href,
  duration = 20,
  position = "top",
  children,
}: Props) => {
  const itemClass =
    position === "right"
      ? "top-[50%] right-0 translate-x-1/2 -translate-y-1/2"
      : position === "bottom"
      ? "bottom-0 left-[50%] -translate-x-1/2 translate-y-1/2"
      : position === "left"
      ? "left-0 top-[50%] -translate-x-1/2 -translate-y-1/2"
      : "top-0 left-[50%] -translate-x-1/2 -translate-y-1/2";

  return (
    <>
      <div className="absolute w-full aspect-square pointer-events-none">
        <motion.div
          animate={{ rotate: "360deg" }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
          className="relative w-full aspect-square border-[0.5px] border-[#646464]/75 rounded-full pointer-events-none"
        >
          <div
            className={
              "w-16 h-16 rounded-10 absolute revolving-object" + " " + itemClass
            }
          >
            <Link
              href={href}
              className="inline-block relative w-full h-full rounded-full pointer-events-auto"
            >
              <motion.div
                animate={{ rotate: "-360deg" }}
                transition={{ duration, ease: "linear", repeat: Infinity }}
                className="w-full h-full"
              >
                <Image src={image} fill alt="Image" />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
        <div
          className="relative aspect-square pointer-events-none"
          style={{ width: "calc(100% - 110px)" }}
        >
          {children ?? (
              <div className="relative flex items-center justify-center w-full h-full rounded-full border-[0.5px] bg-[#080808] border-[#646464] logoShadow pointer-events-auto ">
                <Image src={"/logo.svg"} className="object-contain" width={45} height={45} alt="Logo" />
              </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Orbit;
