import React from "react";
import Orbit from "./Orbit";
import Image from "next/image";
import Container from "../ui/Container";

const Orbits = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <Container className="flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold pb-2">
          Fennec ecosystem
        </h2>
        <div className="relative w-full h-5 mb-10">
          <Image
            src="/images/landing/section-title.svg"
            className="object-contain"
            fill
            alt="title vector shape"
          />
        </div>
        <div className="relative w-3/5 aspect-square">
          <div className="absolute left-[50%] top-[50%] w-3/5 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
            <div className="shadow-effect blur-[200px] aspect-square w-full"></div>
          </div>
          <Orbit
            image="/images/landing/circle-6.png"
            duration={20}
            position="right"
            href="/"
          >
            <Orbit
              image="/images/landing/circle-5.png"
              duration={30}
              position="top"
              href="/"
            >
              <Orbit
                image="/images/landing/circle-4.png"
                duration={40}
                position="left"
                href="/"
              >
                <Orbit
                  image="/images/landing/circle-3.png"
                  duration={50}
                  position="bottom"
                  href="/"
                >
                  <Orbit
                    image="/images/landing/circle-2.png"
                    duration={25}
                    position="right"
                    href="/"
                  >
                    <Orbit
                      image="/images/landing/circle-1.png"
                      duration={35}
                      position="top"
                      href="/"
                    ></Orbit>
                  </Orbit>
                </Orbit>
              </Orbit>
            </Orbit>
          </Orbit>
        </div>
      </Container>
    </section>
  );
};

export default Orbits;
