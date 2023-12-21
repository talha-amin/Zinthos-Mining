import React from "react";
import Container from "../ui/Container";
import Image from "next/image";

const Ecosystem = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute pointer-events-none left-[50%] top-[50%] -translate-y-1/2 -translate-x-1/2 -z-10  w-full max-w-md">
        <div className="relative w-full aspect-square">
          <Image
            src="/images/landing/yellow-sun.png"
            fill
            className="object-contain object-top"
            alt="backgroundImg"
          />
        </div>
      </div>
      <Container>
        <h2 className="text-6xl text-center font-semibold pb-2">Fennec ecosystem</h2>
        <div className="relative w-full h-5">
          <Image src="/images/landing/section-title.svg" className="object-contain" fill alt="title vector shape" />
        </div>
        <div className="grid grid-cols-4 gap-14 pt-12">
          {Array.from({ length: 8 }).map((item, i) => {
            return (
              <div
                key={i}
                className="bg-gradient-to-l from-[#EB6335] to-[#FFD300] rounded-3xl p-4 aspect-[1.5] w-full flex items-center justify-center flex-col text-center text-black"
              >
                <span className="text-3xl font-bold uppercase">nft</span>
                <p className="text-sm font-semibold capitalize">
                  collect and complete your collection
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Ecosystem;
