"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useAnimation, useInView, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import Container from "../ui/Container";

const faqs = [
  {
    summary: "What is the primary aim of Degen Forest?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.Risus habitant leo egestas mauris diam eget morbi tempus vulputate. Et orci sagittis posuere.",
  },
  {
    summary: "dui consequat a pellentesque?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.Risus habitant leo egestas mauris diam eget morbi tempus vulputate. Et orci sagittis posuere.",
  },
  {
    summary: "dui consequat a pellentesque?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.Risus habitant leo egestas mauris diam eget morbi tempus vulputate. Et orci sagittis posuere.",
  },
  {
    summary: "dui consequat a pellentesque?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.Risus habitant leo egestas mauris diam eget morbi tempus vulputate. Et orci sagittis posuere.",
  },
  {
    summary: "dui consequat a pellentesque?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.Risus habitant leo egestas mauris diam eget morbi tempus vulputate. Et orci sagittis posuere.",
  },
];

const FAQs = () => {
  const showRef = useRef(null);
  const isInView = useInView(showRef, { amount: 0.3 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    } else {
      mainControls.start("initial");
    }
  }, [isInView]);

  const animVars = {
    initial: (index: number) => ({
      x: "150%",
      transition: {
        delay: 0.05 * index,
        duration: 0.75,
      },
    }),
    animate: (index: number) => ({
      x: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.75,
      },
    }),
  };

  return (
    <section className="relative py-20 ">
      <div className="absolute left-[50%] right-0 translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="primary-shadow blur-[150px] aspect-square w-[600px]"></div>
      </div>
      <Container>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h2 className="relative mb-5 inline-block text-2xl font-bold sm:text-3xl md:text-5xl">
            Frequently Asked Questions
            {/* <div className="absolute -top-1/4 right-0 translate-x-[200%] hidden md:block">
              <Image
                src="/icons/thin-star.svg"
                alt="Star Icon"
                width={35}
                height={35}
              />
            </div> */}
          </h2>
          <p className="text-sm font-thin text-neutral-400 max-w-[68ch] md:text-lg">
            The key to creating an effective FAQ page is to anticipate the
            questions your customers or users may have and provide clear and
            concise answers.
          </p>
          <div
            ref={showRef}
            className="my-20 w-full space-y-4 text-start lg:w-[65%]"
          >
            {faqs.map(({ summary, details }, index) => {
              return (
                <div key={index} className="rounded-2xl">
                  <details className="border-1 group open:border-[#EB63354D] rounded-2xl border border-[#424141] bg-black px-5 py-3 text-sm text-neutral-400 transition duration-300 sm:text-lg md:px-6 md:py-4 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-[0.5rem] duration-200">
                      <h2 className="font-medium group-open:text-white">
                        {summary}
                      </h2>
                      <FaChevronDown />
                    </summary>

                    <p className="pt-3 text-sm leading-relaxed text-neutral-400">
                      {details}
                    </p>
                  </details>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      {/* -----------shapes below-------------- */}
      {/* left shadow */}
      <div className="absolute -top-[10%] left-0 -z-10 -translate-x-1/2 translate-y-2/3">
        <div className="shadow-effect opacity-50 blur-[150px]"></div>
      </div>
      {/* right shadow */}
      <div className="absolute -right-[10%] top-0 -z-10">
        <div className="shadow-effect opacity-75 blur-[200px]"></div>
      </div>
      {/* composite shape */}
      <div className="absolute -right-[20%] -top-[35%] -z-10 -rotate-3 -rotate-6 opacity-50">
        <div className="relative aspect-square w-[1000px]">
          {/* <Image
            fill
            src="/images/landing/cta-curve.svg"
            alt="design asset line"
          /> */}
        </div>
      </div>
      {/* circle */}
      <div className="absolute left-0 top-[10%] -z-10 -translate-x-1/2 rotate-180">
        <div className="relative aspect-[1] w-full">
          <Image
            fill
            className="object-contain"
            src="/images/landing/cta-circle.svg"
            alt="design asset line"
          />
        </div>
      </div>
      {/* -----------shapes above-------------- */}
    </section>
  );
};

export default FAQs;
