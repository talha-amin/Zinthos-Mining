import {ethers} from 'ethers';
import { useEffect, useState } from 'react';

export function shortenAddress(address: string, length: number = 5): string {
    if (!address || address.length < length) {
      return address;
    }
  
    const start = address.slice(0, length);
    const end = address.slice(-length);
  
    return `${start}...${end}`;
  }


export const getWeitoEther = (_wei:string) => {
    
    return ethers.utils.formatEther(_wei);


}
export const getEthertoWei = (_ether:string) => {
   
    return ethers.utils.parseEther(_ether);


}

export const getEthertoWeiWithUnits = (_ether:string,units=18) => {
   
    return ethers.utils.parseUnits(_ether,units);


}
export const getWeitoEtherWithUnits = (_wei:string,units=18) => {
   
    return ethers.utils.parseUnits(_wei,units);


}

// Debounce function
// const debounce = (func:any, delay:number) => {
//     let timeoutId;
//     return (...args) => {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         func(...args);
//       }, delay);
//     };
//   };
  
//   // Custom hook
// export const useDebouncedState = (initialValue, delay) => {
//     const [debouncedValue, setDebouncedValue] = useState(initialValue);
  
//     const updateDebouncedValue = debounce((newValue) => {
//       setDebouncedValue(newValue);
//     }, delay);
  
//     return [debouncedValue, updateDebouncedValue];
//   };

//  export function convertSecondsToDate(seconds) {
//     // Convert seconds to milliseconds by multiplying by 1000
//     const milliseconds = Number(seconds) * 1000;
  
//     // Create a new Date object with the calculated milliseconds
//     const date = new Date(milliseconds);
  
//     return date.toLocaleString();
//   }

//   export function getTimeSincePostCreation(creationDate) {
//     const postDate = new Date(creationDate * 1000);
//     const currentDate = new Date();
  
//     const timeDifference = currentDate - postDate;
  
//     // Calculate time in seconds, minutes, hours, days, months, and years
//     const seconds = Math.floor(timeDifference / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);
//     const days = Math.floor(hours / 24);
//     const months = Math.floor(days / 30); // Rough estimate, as months can have varying lengths
//     const years = Math.floor(months / 12);
  
//     // Determine the most appropriate unit for display
//     if (years > 0) {
//       return `${years} ${years === 1 ? 'year' : 'years'} ago`;
//     } else if (months > 0) {
//       return `${months} ${months === 1 ? 'month' : 'months'} ago`;
//     } else if (days > 0) {
//       return `${days} ${days === 1 ? 'day' : 'days'} ago`;
//     } else if (hours > 0) {
//       return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
//     } else if (minutes > 0) {
//       return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
//     } else {
//       return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
//     }
//   }