import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { roadmap } from "@/app/data";

const Roadmap = () => {
  return (
    <section className="relative">
      <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="primary-shadow blur-[150px] aspect-square w-[600px]"></div>
      </div>
      <Container>
        <h2 className="text-6xl text-center font-semibold pb-2">
          Fennnec Roadmap
        </h2>
        <div className="relative w-full h-5 my-3">
          <Image
            src="/images/landing/section-title.svg"
            className="object-contain"
            fill
            alt="title vector shape"
          />
        </div>
        <p className="text-center text-neutral-400">
          Fennec tokenomics drive ecosystem growth, balancing supply, demand,
          and utility for sustained value creation.
        </p>
        <div className="space-y-8 relative mt-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white">
          {roadmap.map(({ title, desc }, i) => {
            return (
              <div key={i} className="even:ml-auto w-1/2 relative flex items-center justify-between  md:even:flex-row-reverse group is-active">
                <div className="absolute left-0 group-odd:right-0 top-[50%] md:-translate-y-1/2 flex items-center justify-center rounded-full  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:translate-x-1/2 md:group-even:-translate-x-1/2">
                  <Image
                    width={50}
                    height={50}
                    className="w-10 h-10"
                    src="/images/icons/bead.svg"
                    alt="icon"
                  />
                </div>
                <div className="relative roadmap-item w-4/5 shadow-inner p-8 rounded-2xl shadow">
                  <div className="absolute md:group-odd:right-0 md:group-even:left-0 top-[50%] md:-translate-y-1/2 flex items-center justify-center rounded-full  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:translate-x-1/2 md:group-even:-translate-x-1/2">
                    <Image
                      width={15}
                      height={15}
                      src="/images/icons/bead.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-semibold text-3xl">{title}</div>
                  </div>
                  <div className=" text-xl font-medium">{desc}</div>
                </div>
                <hr className="w-1/5 h-[1px] bg-white" />
              </div>
            );
          })}
         
        </div>
      </Container>
    </section>
  );
};

export default Roadmap;
