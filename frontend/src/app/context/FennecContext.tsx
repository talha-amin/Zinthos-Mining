"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useContractReads } from 'wagmi'
import { FENNEC_ABI, FENNEC_ADDRESS, USDT_ABI, USDT_ADDRESS } from '../data/constants';

interface FennecContextProps {
  // provider?: ethers.providers.Web3Provider;
  // signer?: ethers.Signer;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>
}

const FennecContext = createContext<FennecContextProps | undefined>(undefined);

type nodeProps = {
  children : React.ReactNode;
}

const FennecContract = {
  address: FENNEC_ADDRESS,
  abi: FENNEC_ABI,
}
const USDTContract = {
  address: USDT_ADDRESS,
  abi: USDT_ABI,
}

export const FennecContextProvider = ({ children }:nodeProps) => {

  const [address, setAddress] = useState<string>("")


  // const { data, isError, isLoading } = useContractReads({
  //   contracts: [
  //     {
  //       ...FennecContract,
  //       functionName: 'owner',
  //     },
  //     {
  //       ...FennecContract,
  //       functionName: 'getRoundOneLimitRemaining',
  //     },
  //     {
  //       ...FennecContract,
  //       functionName: 'getRoundTwoLimitRemaining',
  //     },
  //     {
  //       ...FennecContract,
  //       functionName: 'getRoundThreeLimitRemaining',
  //     },
  //     {
  //       ...FennecContract,
  //       functionName: 'getRound',
  //     },
  //     {
  //       ...FennecContract,
  //       functionName: 'isPaused',
  //     }
  //   ],
  // })


  // useEffect(() => {
  //  console.log(data);
   
  // }, [data]);

  return (
    <FennecContext.Provider value={{address,setAddress }}>
      {children}
    </FennecContext.Provider>
  );
};

export const UseFennecContext = () => {
  const context = useContext(FennecContext);
  if (!context) {
    throw new Error('useFennecContext must be used within an EthersProvider');
  }
  return context;
};
