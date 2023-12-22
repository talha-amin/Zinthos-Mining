import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { tokenomics } from "@/app/data";

const Tokenomics = () => {
  return (
    <section className="py-24">
      <Container>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold pb-2">
          Fennec Tokenomics
        </h2>
        <div className="relative w-full h-5">
          <Image
            src="/images/landing/section-title.svg"
            className="object-contain"
            fill
            alt="title vector shape"
          />
        </div>
        <p className="text-center text-neutral-400">Fennec tokenomics drive ecosystem growth, balancing supply, demand, and utility for sustained value creation.</p>
        <div className="grid lg:grid-cols-2 items-center pt-12">
          <div className="relative w-full aspect-square">
            <Image
              fill
              src="/images/landing/tokenomics.png"
              className="object-contain"
              alt="tokenomics chart"
            />
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              {tokenomics.map(({ label, value, tokens, colorClass }, i) => {
                return (
                  <li
                    key={i}
                    className={`tokenomics-item relative overflow-hidden flex items-center justify-between bg-[#ffffff0f] py-3 pr-3 pl-5 rounded-lg after:absolute after:content-[''] after:top-0 after:left-0 after:h-full after:w-2 ${colorClass}`}
                  >
                    <div className="flex flex-col gap-2 justify-between">
                      <span>{value}%</span>
                      <p className="text-sm">{label}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <span>Tokens</span>
                      <span>{tokens.toLocaleString()}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Tokenomics;
