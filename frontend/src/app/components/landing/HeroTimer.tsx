"use client"
import React, { useState, useEffect } from "react";

const HeroTimer = () => {
  const targetDate = new Date("2023-12-31T00:00:00");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
      };
    }

    const days = String(Math.floor(difference / (1000 * 60 * 60 * 24)));
    const hours = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = String(Math.floor((difference % (1000 * 60)) / 1000));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 items-center gap-3 mb-6 max-w-sm mx-auto">
      {Object.entries(timeRemaining).map(([unit, value], i) => (
        <div key={i} className="bg-gradient-to-b from-[#EB6335] to-[#FFD300] rounded-lg p-4 aspect-square w-full flex items-center justify-center flex-col">
          <span
            className="text-3xl font-bold"
            dangerouslySetInnerHTML={{ __html: value }}
          />
          <p className="text-sm font-semibold uppercase">{unit.toUpperCase()}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroTimer;
