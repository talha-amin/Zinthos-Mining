"use client"
import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <></>;
};

export default SmoothScroll;
