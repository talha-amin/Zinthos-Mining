"use client";
import { companies } from "@/app/data";
import { motion } from "framer-motion";
import Image from "next/image";

const Companies = () => {
  const marqueeVariants = {
    animate: {
      x: "-100%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="mt-12 w-full ">
      <div className="bg-neutralcolor py-12">
        <div className="relative w-full gap-20 overflow-hidden whitespace-nowrap">
          {Array.from({ length: 2 }).map((item, i) => {
            return (
              <motion.div
                key={i}
                variants={marqueeVariants}
                animate="animate"
                className="inline-flex min-w-full items-center justify-around gap-16 pr-16"
              >
                {companies.map(({ logo }, i) => {
                  return (
                    <>
                    <Image
                      key={i}
                      width={115}
                      height={30}
                      src={logo}
                      className="object-contain"
                      alt="google icon"
                    />
                    <Image
                      width={115}
                      height={30}
                      src="/images/icons/aesterik.svg"
                      className="object-contain"
                      alt="google icon"
                    />
                    </>
                  );
                })}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Companies;
