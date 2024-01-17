"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useAnimation, useInView, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import Container from "../ui/Container";
import { staggeredSlide } from "@/data";

const faqs = [
  {
    summary: "What is an ICO and how does it work?",
    details:
      "An Initial Coin Offering (ICO) is a fundraising method in the cryptocurrency space. It involves the issuance of a new cryptocurrency token to fund a project's development. Investors can purchase these tokens during the ICO, and in return, they may receive project-specific benefits or future profits.",
  },
  {
    summary: "How can I participate in an ICO?",
    details:
      "To participate in an ICO, you typically need to create an account on the project's official website and follow their specific instructions. This often involves contributing funds in a supported cryptocurrency, such as Bitcoin or Ethereum, during the ICO period. Make sure to use secure wallets and follow the project's guidelines to ensure a smooth participation process.",
  },
  {
    summary: "What should I consider before investing in an ICO?",
    details:
      "Investors should conduct thorough due diligence before investing in any ICO. Key considerations include evaluating the project's whitepaper, team members, technology, roadmap, and the problem it aims to solve. Additionally, check for transparency, regulatory compliance, and community feedback. ICO investments carry risks, so it's crucial to make informed decisions.",
  },
  {
    summary: "Are ICOs regulated, and what are the risks involved?",
    details:
      "The regulatory status of ICOs varies globally. Some countries have established guidelines, while others have implemented stricter regulations. Investors should be aware of the legal landscape in their jurisdiction. Risks associated with ICOs include market volatility, project failure, regulatory changes, and potential fraudulent activities. It's essential to stay informed and exercise caution.",
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

  return (
    <section className="relative sec-p-y">
      <div className="absolute left-[50%] right-0 translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="primary-shadow blur-[150px] opacity-25 aspect-square w-[600px]"></div>
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
                <motion.div
                  variants={staggeredSlide}
                  initial="initial"
                  animate={mainControls}
                  custom={index}
                  key={index}
                  className="rounded-2xl"
                >
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
                </motion.div>
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
