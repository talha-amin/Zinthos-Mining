import React, { useEffect, useState } from 'react';

interface CountdownProps {
  targetUnixTimestamp: number;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetUnixTimestamp }) => {
  const calculateTimeRemaining = (): { years: number; months: number; days: number; hours: number; minutes: number,seconds:number } => {
    const now = Math.floor(new Date().getTime() / 1000);
    const timeRemaining = targetUnixTimestamp - now;
    if (timeRemaining<=0) {
      return { years:0, months:0, days:0, hours:0, minutes :0,seconds:0 }
    }

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
      if (timeRemaining.seconds >= 0) {
        setTimeRemaining(calculateTimeRemaining());
      }else{
        clearInterval(interval)
      }
      }, 1000);
      
      return () => clearInterval(interval);
    }, [targetUnixTimestamp]);



    if (timeRemaining.years>0) {
      return (
        <>{timeRemaining.years} {timeRemaining.years==1?" Year":" Years"} </>
      );
      
    }
    else if (timeRemaining.months>0) {
      return (
        <>{timeRemaining.months} {timeRemaining.months==1?" Month":" Months"}  </>
      );
      
    }
    else if (timeRemaining.days>0) {
      return (
        <>{timeRemaining.days} {timeRemaining.days==1?" Day":" Days"} </>
      );
      
    }
    else if (timeRemaining.hours>0) {
      return (
        <>{timeRemaining.hours} {timeRemaining.hours==1?" Hour":" Hours"} </>
      );
      
    }
    else if (timeRemaining.minutes>0) {
      return (
        <>{timeRemaining.minutes} {timeRemaining.minutes==1?" Minute":" Minutes"} </>
      );
      
    }
    else if (timeRemaining.seconds>0) {
      return (
        <>{timeRemaining.seconds} {timeRemaining.minutes==1?" Second":" Seconds"} </>
      );
      
    }
    else {
      return (
        <> Time Over</>
      );
      
    }
};

export default CountdownTimer;
