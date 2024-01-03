"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useAccount, useConnect, useContractRead, useContractReads, useContractWrite, useNetwork, usePrepareContractWrite, useSwitchNetwork, useWaitForTransaction } from 'wagmi'
import { FENNEC_ABI, FENNEC_ADDRESS, USDT_ABI, USDT_ADDRESS, fennecContractConfig, fennecIcoContractConfig, usdtContractConfig } from '../data/constants';
import { REPLACER, getBigintToString, getEthertoWeiWithUnits, getWeitoEtherWithUnits } from '../utils/tools';
import { InjectedConnector } from 'wagmi/connectors/injected';

interface FennecContextProps {
  // provider?: ethers.providers.Web3Provider;
  // signer?: ethers.Signer;
  // address: string;
  // setAddress: React.Dispatch<React.SetStateAction<string>>
  ConnectedWallet: string| null;
  isApprovedUSDT: boolean;
  connectWalletHanle: () => void;
  approveMaxUSDThandle:  (() => void) | undefined;
  buyFennecHandle:  (() => void) | undefined;
  setUserUSDTAmount: React.Dispatch<React.SetStateAction<string>>;
  userUSDTAmount: string;
  ROUND:number
}

const FennecContext = createContext<FennecContextProps | undefined>(undefined);

type nodeProps = {
  children : React.ReactNode;
}


const FENNEC_ABI_VIEW = FENNEC_ABI.filter((contractFunction) => {
  return contractFunction.stateMutability === 'view';
});


const FennecContract = {
  address: FENNEC_ADDRESS,
  abi: FENNEC_ABI_VIEW,
} as const


const USDTContract = {
  address: USDT_ADDRESS,
  abi: USDT_ABI,
}


export const FennecContextProvider = ({ children }:nodeProps) => {

  const [ConnectedWallet, setConnectedWallet] = useState<string | null>(null)
  const [userUSDTAmount, setUserUSDTAmount] = useState<string>('0')
  const [userUSDTAmountInWei, setUserUSDTAmountInWei] = useState<string>('0')
  const [isApprovedUSDT, setIsApprovedUSDT] = useState<boolean>(false)
  const [ROUND, setROUND] = useState<number>(0)

   //======================== Account =================
   const { address, isConnected } = useAccount()
   
   const { connect } = useConnect()
   
   const { chain } = useNetwork()
   // console.log(chain);
   
   const { chains, error, pendingChainId, switchNetwork, status } = useSwitchNetwork()
   
   const connectWalletHanle =() => {
     
     connect()
    }
    
    useEffect(() => {
     
    setConnectedWallet(address?address:null)
     
    }, [address]);
    

    //======================== Allowance =================
    
    
    const { data:userUSDTAllowance , isError, isLoading ,isFetched:usdtAllowanceFetched} = useContractRead({
      ...usdtContractConfig,
      functionName: 'allowance',
      args: [ConnectedWallet,fennecIcoContractConfig.address ],
      enabled: ConnectedWallet?true:false,
      watch: true
    })
    
    useEffect(() => {
      
      if (ConnectedWallet && usdtAllowanceFetched && Number(getWeitoEtherWithUnits(userUSDTAllowance as string,6)) > 0) {
        console.log("userUSDTAllowance",userUSDTAllowance);
        setIsApprovedUSDT(true);
        
      }else{
        
        setIsApprovedUSDT(false);
      }
      
      
    }, [userUSDTAllowance]);
    
    //======================== Approve MAX USDT to ICO =================
    
    const { config:approveMaxUSDTConfig } = usePrepareContractWrite({
      ...usdtContractConfig,
      functionName: 'approve',
      args: [fennecIcoContractConfig.address,"100000000000000000000000000000000000000000000000000000000000000000" ],
      account:address??address,
      enabled: ConnectedWallet?true:false,
    })
    const { data:approveMaxData, isLoading:approveMaxLoading, isSuccess:approveMaxSuccess,status:approveMaxStatus, write:approveMaxUSDThandle } = useContractWrite(approveMaxUSDTConfig)
    
    useEffect(() => {
      
      console.log("approveMaxStatus", approveMaxStatus);

      if (approveMaxStatus == "loading") {
       
      }
      if (approveMaxStatus == "success") {
      
      }
      if (approveMaxStatus == "error") {
       
      }
    }, [approveMaxStatus]);

    const { data: approveMaxResponse } = useWaitForTransaction({
      hash: approveMaxData?.hash,
      onSuccess(data) {
        console.log("final succes", data);
        setIsApprovedUSDT(true);
        buyFennecHandle?.()
  
        // notifySuccessWithHash("Transaction Confirmed", String(approveMaxData?.hash))
        // setLoader1(false);
        // setLoaderMsg("");
      },
      onError(data) {
        console.log("final error", data);
        setIsApprovedUSDT(false);
        // notifyError("Transaction Failed")
        // setLoader1(false);
        // setLoaderMsg("");
      },
    });


    //======================== BUY Fennec =================

    const { data:currentRoundNo, isRefetching, isSuccess, refetch } = useContractRead({
      ...fennecIcoContractConfig,
      functionName: 'getRound',
    })

    useEffect(() => {
    if (currentRoundNo) {
      setROUND(Number(currentRoundNo.toString()))
        
    }else{
      setROUND(0)
    }
      
    }, [currentRoundNo])

    const { config:buyFennecConfig } = usePrepareContractWrite({
      ...fennecIcoContractConfig,
      functionName: 'buy',
      args: [userUSDTAmountInWei],
      account:address??address,
      enabled: (ConnectedWallet?true:false) && (ROUND>0),
    })
    const { data:buyFennecData, isLoading:buyFennecLoading, isSuccess:buyFennecSuccess,status:buyFennecStatus, write:buyFennecHandle } = useContractWrite(buyFennecConfig)
    
    useEffect(() => {
      
      console.log("buyFennecStatus", buyFennecStatus);

      if (buyFennecStatus == "loading") {
       
      }
      if (buyFennecStatus == "success") {
      
      }
      if (buyFennecStatus == "error") {
       
      }
    }, [buyFennecStatus]);

    const { data: buyFennecResponse } = useWaitForTransaction({
      hash: buyFennecData?.hash,
      onSuccess(data) {
        console.log("final succes", data);
        
  
        // notifySuccessWithHash("Transaction Confirmed", String(buyFennecData?.hash))
        // setLoader1(false);
        // setLoaderMsg("");
      },
      onError(data) {
        console.log("final error", data);
        

        // notifyError("Transaction Failed")
        // setLoader1(false);
        // setLoaderMsg("");
      },
    });


    useEffect(() => {
      // console.log(getEthertoWeiWithUnits(userUSDTAmount));
      if (Number(userUSDTAmount)>0) {
        setUserUSDTAmountInWei(getEthertoWeiWithUnits(userUSDTAmount,6))
      }
      else{
        setUserUSDTAmountInWei('0')

      }
    }, [userUSDTAmount])
    useEffect(() => {
     console.log(userUSDTAmountInWei);
     
    }, [userUSDTAmountInWei])
    





    //======================== NEXT =================



  // const { data, isError, isLoading } = useContractReads({
  //   contracts: [
  //     {
  //       ...fennecContractConfig,
  //       functionName: 'owner',
  //     },
      // {
      //   ...FennecContract,
      //   functionName: 'getRoundOneLimitRemaining',
      // },
      // {
      //   ...FennecContract,
      //   functionName: 'getRoundTwoLimitRemaining',
      // },
      // {
      //   ...FennecContract,
      //   functionName: 'getRoundThreeLimitRemaining',
      // },
      // {
      //   ...FennecContract,
      //   functionName: 'getRound',
      // },
      // {
      //   ...FennecContract,
      //   functionName: 'isPaused',
      // }
  //   ] as const,
  // })



  return (
    <FennecContext.Provider value={{ConnectedWallet,connectWalletHanle,isApprovedUSDT,approveMaxUSDThandle,buyFennecHandle,userUSDTAmount,setUserUSDTAmount ,ROUND}}>
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
