"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useAccount, useConnect, useContractRead, useContractReads, useContractWrite, useNetwork, usePrepareContractWrite, useSwitchNetwork, useWaitForTransaction } from 'wagmi'
import { FENNEC_ABI, FENNEC_ADDRESS, USDT_ABI, USDT_ADDRESS, fennecContractConfig, fennecIcoContractConfig, usdtContractConfig, vestingContractConfig } from '../data/constants';
import { REPLACER, getBigintToString, getEthertoWeiWithUnits, getWeitoEtherWithUnits } from '../utils/tools';
import { InjectedConnector } from 'wagmi/connectors/injected';
import UseFennecTxHistory from '@/hooks/fennecHooks';

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
  setUserInputAmount: React.Dispatch<React.SetStateAction<string>>;
  userInputAmount: string;
  ROUND:number;
  FennecTokenPrice:string;
  userTxHistoryData: any[] | []
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
  const [userInputAmount, setUserInputAmount] = useState<string>('')
  const [userFennecAmountInWei, setUserFennecAmountInWei] = useState<string>('0')
  const [FennecTokenPrice, setFennecTokenPrice] = useState<string>('')
  const [isApprovedUSDT, setIsApprovedUSDT] = useState<boolean>(false)
  const [ROUND, setROUND] = useState<number>(0)
  const [allTxReqState, setAllTxReqState] = useState<[]| any[]>([])
  const [userTxHistoryData, setUserTxHistoryData] = useState<[]| any[]>([])

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
    //======================== TOKEN PRICE IN USDT =================
    const { data:currentTokenPrice, } = useContractRead({
      ...fennecIcoContractConfig,
      functionName: 'getPrice',
      watch:true
    })

    useEffect(() => {
    if (currentTokenPrice) {

      const finalData = getWeitoEtherWithUnits(currentTokenPrice.toString(),6).toString()
      // console.log("finalData",finalData);
      
      setFennecTokenPrice(finalData)
      
    }else{
      
      setFennecTokenPrice('')
    }
      
    }, [currentTokenPrice])


    
    //======================== Tx History =================
    const { data:userNoOfTx, } = useContractRead({
      ...vestingContractConfig,
      functionName: 'noOfTx',
      args: [ConnectedWallet],
      enabled: ConnectedWallet?true:false,
      watch: true
      
    })

    useEffect(() => {
    if (ConnectedWallet && userNoOfTx && Number(userNoOfTx.toString())>0 ) {

      let allTx = Number(userNoOfTx.toString())
      let allTxReq = []
      
      console.log("userNoOfTx ",userNoOfTx);
      console.log("allTx ",allTx);
      for (let i = 0; i < allTx; i++) {
        const newObj =
         {
          ...vestingContractConfig,
          functionName: 'txHistory',
          args: [ConnectedWallet,String(i)],
          // watch:true
        };
        console.log("allTx index object",allTxReq);
        allTxReq.push(newObj);
      }

      console.log("allTxReq",allTxReq);
      
      setAllTxReqState(allTxReq)
      
      
    }else{
      setAllTxReqState([])
      
   
    }
      
    }, [userNoOfTx,ConnectedWallet])

    // console.log("allTxReqState",allTxReqState);
    


    const { data:allTxHistoryData } = useContractReads({
      contracts:allTxReqState.map((item) =>({
        ...item,
      })),
      watch:true,
      enabled:(allTxReqState.length>0)

    })

    useEffect(() => {
      // console.log("allTxHistoryData",allTxHistoryData);
      const filteredData = allTxHistoryData?.map((item:any) =>{
        
        if(item.status === 'success' ){
          return {
            amountRemaining:item.result[0].toString(),
            endTime:Number(item.result[1].toString()),
            amountToBeGiven:item.result[2].toString(),
            investor:item.result[3]
            // maining:getWeitoEther(item.result[0].toString()),
            // endTime:Number(item.result[1].toString()),
            // amountToBeGiven:getWeitoEther(item.result[2].toString()),
            // investor:item.result[3]
          }
        }
      }) as any
      setUserTxHistoryData(filteredData)
      console.log("filteredData",filteredData);
    
    }, [allTxHistoryData])
    

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
        // console.log("userUSDTAllowance",userUSDTAllowance);
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
      watch:true

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
      args: [userFennecAmountInWei],
      account:address??address,
      enabled: (ConnectedWallet?true:false) && (ROUND>0) && (Number(userInputAmount)>0),
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
      // console.log(getEthertoWeiWithUnits(userInputAmount));
      if (userInputAmount!==''&&Number(userInputAmount)>0) {
        setUserFennecAmountInWei(getEthertoWeiWithUnits(userInputAmount,18))
      }
      else{
        setUserFennecAmountInWei('0')

      }
    }, [userInputAmount])
    useEffect(() => {
     console.log(userFennecAmountInWei);
     
    }, [userFennecAmountInWei])
    





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
    <FennecContext.Provider value={{ConnectedWallet,connectWalletHanle,isApprovedUSDT,approveMaxUSDThandle,buyFennecHandle,userInputAmount,setUserInputAmount ,ROUND,FennecTokenPrice,userTxHistoryData}}>
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
