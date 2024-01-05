"use client";
import React from "react";
import FerrisWheel from "./FerrisWheel";
import Orbits from "./Orbits";
import useMobileDetect from "@/hooks/useMobileDetect";

const Ecosystem2 = () => {
  const isMobile = useMobileDetect();
  return <>{isMobile ? <FerrisWheel /> : <Orbits />}</>;
};

export default Ecosystem2;
