import React, { useEffect, useState } from 'react';

interface CountdownProps {
  targetUnixTimestamp: number;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetUnixTimestamp }) => {
  const calculateTimeRemaining = (): { years: number; months: number; days: number; hours: number; minutes: number,seconds:number } => {
    const now = Math.floor(new Date().getTime() / 1000);
    const timeRemaining = targetUnixTimestamp - now;

    const years = Math.floor(timeRemaining / (365 * 24 * 60 * 60));
    const months = Math.floor((timeRemaining % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
    const days = Math.floor((timeRemaining % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
    const seconds = Math.floor(timeRemaining % (60 ));

    return { years, months, days, hours, minutes ,seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetUnixTimestamp]);

  return (
    <>{timeRemaining.years}y {timeRemaining.months}m {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s</>
  );
};

export default CountdownTimer;
