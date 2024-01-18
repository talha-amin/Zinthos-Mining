"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  useAccount,
  useConnect,
  useContractRead,
  useContractReads,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useSwitchNetwork,
  useWaitForTransaction,
} from "wagmi";
import {
  FENNEC_ABI,
  FENNEC_ADDRESS,
  USDT_ABI,
  USDT_ADDRESS,
  fennecIcoContractConfig,
  usdtContractConfig,
  vestingContractConfig,
} from "../data/constants";
import { getEthertoWeiWithUnits, getWeitoEtherWithUnits } from "../utils/tools";
import {
  applicantStatus,
  generateAccessToken,
  getApplicantId,
  kycVerification,
} from "@/utils/kycTools";
import { toast } from "react-toastify";

interface FennecContextProps {
  connectWallet: string | null;
  isApprovedUSDT: boolean;
  connectWalletHanle: () => void;
  approveMaxUSDThandle: (() => void) | undefined;
  buyFennecHandle: (() => void) | undefined;
  setUserInputAmount: React.Dispatch<React.SetStateAction<string>>;
  userInputAmount: string;
  ROUND: number;
  kycStatus: string;
  kycAccessToken: string;
  FennecTokenPrice: string;
  approveMaxUSDTLoadingState: boolean;
  buyFennecLoadingState: boolean;
  isUserWitdrawing: boolean;
  setIsUserWitdrawing: React.Dispatch<React.SetStateAction<boolean>>;
  userTxHistoryData: any[] | [];
  notifyError: (msg: string) => void;
  notifySuccess: (msg: string) => void;
  notifySuccessWithHash: (msg: string, txHash: string) => void;
}

const FennecContext = createContext<FennecContextProps | undefined>(undefined);

type nodeProps = {
  children: React.ReactNode;
};

export const FennecContextProvider = ({ children }: nodeProps) => {
  //======================== message toasts =================
  type Id = { current: number | string };

  const errorToastId: Id = { current: "" };
  const notifyError = (msg: string) => {
    if (!toast.isActive(errorToastId.current)) {
      errorToastId.current = toast.error(
        <span className="text-sm leading-3 text-neutral-200">{msg}</span>,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          progressClassName: "custom-progress",
        }
      );
    }
  };

  const notifySuccessToastId: Id = { current: 0 };

  const notifySuccess = (msg: string) => {
    if (!toast.isActive(notifySuccessToastId.current)) {
      notifySuccessToastId.current = toast.success(
        <span className="text-sm leading-3 text-neutral-200">{msg}</span>,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          progressClassName: "custom-progress",
        }
      );
    }
  };

  const notifySuccessWithHashToastId: Id = { current: 0 };

  const notifySuccessWithHash = (msg: string, txHash: string) => {
    if (!toast.isActive(notifySuccessWithHashToastId.current)) {
      let link = `https://mumbai.polygonscan.com/tx/${txHash}`;
      notifySuccessWithHashToastId.current = toast.success(
        <a
          href={link}
          target="_blank"
          className="text-sm leading-3 text-neutral-200"
        >
          {msg}
        </a>,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          progressClassName: "custom-progress",
        }
      );
    }
  };

  //======================== STATES =================

  const [connectWallet, setConnectedWallet] = useState<string | null>(null);
  const [userInputAmount, setUserInputAmount] = useState<string>("");
  const [userFennecAmountInWei, setUserFennecAmountInWei] =
    useState<string>("0");
  const [FennecTokenPrice, setFennecTokenPrice] = useState<string>("");
  const [isApprovedUSDT, setIsApprovedUSDT] = useState<boolean>(false);
  const [isUserWitdrawing, setIsUserWitdrawing] = useState<boolean>(false);
  const [ROUND, setROUND] = useState<number>(0);
  const [allTxReqState, setAllTxReqState] = useState<[] | any[]>([]);
  const [userTxHistoryData, setUserTxHistoryData] = useState<[] | any[]>([]);

  //======================== Account =================
  const { address, isConnected } = useAccount();

  const { connect } = useConnect();

  const { chain } = useNetwork();
  // console.log(chain);

  const { chains, error, pendingChainId, switchNetwork, status } =
    useSwitchNetwork();

  const connectWalletHanle = () => {
    connect();
  };

  useEffect(() => {
    setConnectedWallet(address ? address : null);
  }, [address]);

  //======================== KYC Verification =================

  const [kycStatus, setKycStatus] = useState("completed");
  const [kycAccessToken, setKycAccessToken] = useState("");

  //  useEffect(() => {
  //    if (connectWallet !== null) {
  //      (async () => {
  //        const _id = await getApplicantId(connectWallet?.toLowerCase());
  //       //  console.log("response kyc", _id);  // demo 6597e268c29a737c8164ab13
  //        const response = await applicantStatus(_id);
  //       //  console.log("response kyc", response);
  //        setKycStatus(response);
  //        if (response === "notFound") {
  //          const accessToken = await kycVerification(connectWallet?.toLowerCase(),setKycAccessToken);
  //         //  console.log("response accessToken", accessToken);
  //        } else {
  //          const res = await generateAccessToken(connectWallet?.toLowerCase());
  //         //  console.log("CHECKK", res);
  //          setKycAccessToken(res);
  //        }
  //      })();
  //    }
  //  }, [connectWallet]);

  //======================== TOKEN PRICE IN USDT =================
  const { data: currentTokenPrice } = useContractRead({
    ...fennecIcoContractConfig,
    functionName: "getPrice",
    watch: true,
  });

  useEffect(() => {
    if (currentTokenPrice) {
      const finalData = getWeitoEtherWithUnits(
        currentTokenPrice.toString(),
        6
      ).toString();
      // console.log("finalData",finalData);

      setFennecTokenPrice(finalData);
    } else {
      setFennecTokenPrice("");
    }
  }, [currentTokenPrice]);

  //======================== Tx History =================
  const { data: userNoOfTx } = useContractRead({
    ...vestingContractConfig,
    functionName: "noOfTx",
    args: [connectWallet],
    enabled: connectWallet ? true : false,
    watch: true,
  });

  useEffect(() => {
    if (connectWallet && userNoOfTx && Number(userNoOfTx.toString()) > 0) {
      let allTx = Number(userNoOfTx.toString());
      let allTxReq = [];

      console.log("userNoOfTx ", userNoOfTx);
      console.log("allTx ", allTx);
      for (let i = 0; i < allTx; i++) {
        const newObj = {
          ...vestingContractConfig,
          functionName: "txHistory",
          args: [connectWallet, String(i)],
          // watch:true
        };
        console.log("allTx index object", allTxReq);
        allTxReq.push(newObj);
      }

      console.log("allTxReq", allTxReq);

      setAllTxReqState(allTxReq);
    } else {
      setAllTxReqState([]);
    }
  }, [userNoOfTx, connectWallet]);

  // console.log("allTxReqState",allTxReqState);

  const { data: allTxHistoryData } = useContractReads({
    contracts: allTxReqState.map((item) => ({
      ...item,
    })),
    watch: true,
    enabled: allTxReqState.length > 0,
  });

  useEffect(() => {
    // console.log("allTxHistoryData",allTxHistoryData);
    const filteredData = allTxHistoryData?.map((item: any) => {
      if (item.status === "success") {
        return {
          amountRemaining: item.result[0].toString(),
          endTime: Number(item.result[1].toString()),
          amountToBeGiven: item.result[2].toString(),
          investor: item.result[3],
        };
      }
    }) as any;
    setUserTxHistoryData(filteredData);
    console.log("filteredData", filteredData);
  }, [allTxHistoryData]);

  //======================== Allowance =================

  const { data: userUSDTAllowance, isFetched: usdtAllowanceFetched } =
    useContractRead({
      ...usdtContractConfig,
      functionName: "allowance",
      args: [connectWallet, fennecIcoContractConfig.address],
      enabled: connectWallet ? true : false,
      watch: true,
    });

  useEffect(() => {
    if (
      connectWallet &&
      usdtAllowanceFetched &&
      Number(getWeitoEtherWithUnits(userUSDTAllowance as string, 6)) > 0
    ) {
      // console.log("userUSDTAllowance",userUSDTAllowance);
      setIsApprovedUSDT(true);
    } else {
      setIsApprovedUSDT(false);
    }
  }, [userUSDTAllowance]);

  //======================== Approve MAX USDT to ICO =================

  const [approveMaxUSDTLoadingState, setApproveMaxUSDTLoadingState] =
    useState(false);

  const { config: approveMaxUSDTConfig } = usePrepareContractWrite({
    ...usdtContractConfig,
    functionName: "approve",
    args: [
      fennecIcoContractConfig.address,
      "100000000000000000000000000000000000000000000000000000000000000000",
    ],
    account: address ?? address,
    enabled: connectWallet ? true : false,
  });
  const {
    data: approveMaxData,
    isLoading: approveMaxLoading,
    isSuccess: approveMaxSuccess,
    status: approveMaxStatus,
    write: approveMaxUSDThandle,
  } = useContractWrite(approveMaxUSDTConfig);

  useEffect(() => {
    console.log("approveMaxStatus", approveMaxStatus);

    if (approveMaxStatus == "loading") {
      setApproveMaxUSDTLoadingState(true);
    }
    if (approveMaxStatus == "success") {
    }
    if (approveMaxStatus == "error") {
      setApproveMaxUSDTLoadingState(false);
      notifyError("User Rejected Transaction");
    }
  }, [approveMaxStatus]);

  const { data: approveMaxResponse } = useWaitForTransaction({
    hash: approveMaxData?.hash,
    onSuccess(data: any) {
      console.log("final succes", data);
      setApproveMaxUSDTLoadingState(false);

      setIsApprovedUSDT(true);
      buyFennecHandle?.();
      notifySuccessWithHash(
        "Transaction Confirmed",
        String(data?.transactionHash)
      );

      // notifySuccessWithHash("Transaction Confirmed", String(approveMaxData?.hash))
      // setLoader1(false);
      // setLoaderMsg("");
    },
    onError(data: any) {
      console.log("final error", data);
      setApproveMaxUSDTLoadingState(false);
      setIsApprovedUSDT(false);
      notifyError("Something went wrong");
      // setLoader1(false);
      // setLoaderMsg("");
    },
  });

  //======================== BUY Fennec =================

  const [buyFennecLoadingState, setBuyFennecLoadingState] = useState(false);

  const {
    data: currentRoundNo,
    isRefetching,
    isSuccess,
    refetch,
  } = useContractRead({
    ...fennecIcoContractConfig,
    functionName: "getRound",
    watch: true,
  });

  useEffect(() => {
    if (currentRoundNo) {
      setROUND(Number(currentRoundNo.toString()));
    } else {
      setROUND(0);
    }
  }, [currentRoundNo]);

  const { config: buyFennecConfig } = usePrepareContractWrite({
    ...fennecIcoContractConfig,
    functionName: "buy",
    args: [userFennecAmountInWei],
    account: address ?? address,
    enabled:
      (connectWallet ? true : false) &&
      ROUND > 0 &&
      Number(userInputAmount) > 0,
  });
  const {
    data: buyFennecData,
    isLoading: buyFennecLoading,
    isSuccess: buyFennecSuccess,
    status: buyFennecStatus,
    write: buyFennecHandle,
  } = useContractWrite(buyFennecConfig);

  useEffect(() => {
    console.log("buyFennecStatus", buyFennecStatus);

    if (buyFennecStatus == "loading") {
      setBuyFennecLoadingState(true);
    }
    if (buyFennecStatus == "success") {
    }
    if (buyFennecStatus == "error") {
      setBuyFennecLoadingState(false);
      notifyError("User Rejected Transaction");
    }
  }, [buyFennecStatus]);

  const { data: buyFennecResponse } = useWaitForTransaction({
    hash: buyFennecData?.hash,
    onSuccess(data: any) {
      console.log("final succes", data);
      setBuyFennecLoadingState(false);

      notifySuccessWithHash(
        "Transaction Confirmed",
        String(data?.transactionHash)
      );
    },
    onError(data: any) {
      console.log("final error", data);
      setBuyFennecLoadingState(false);
      notifyError("Something went wrong");
    },
  });

  useEffect(() => {
    // console.log(getEthertoWeiWithUnits(userInputAmount));
    if (userInputAmount !== "" && Number(userInputAmount) > 0) {
      setUserFennecAmountInWei(getEthertoWeiWithUnits(userInputAmount, 18));
    } else {
      setUserFennecAmountInWei("0");
    }
  }, [userInputAmount]);
  useEffect(() => {
    console.log(userFennecAmountInWei);
  }, [userFennecAmountInWei]);

  return (
    <FennecContext.Provider
      value={{
        notifyError,
        notifySuccess,
        notifySuccessWithHash,
        isUserWitdrawing,
        setIsUserWitdrawing,
        approveMaxUSDTLoadingState,
        buyFennecLoadingState,
        connectWallet,
        connectWalletHanle,
        isApprovedUSDT,
        approveMaxUSDThandle,
        buyFennecHandle,
        userInputAmount,
        setUserInputAmount,
        ROUND,
        FennecTokenPrice,
        userTxHistoryData,
        kycStatus,
        kycAccessToken,
      }}
    >
      {children}
    </FennecContext.Provider>
  );
};

export const UseFennecContext = () => {
  const context = useContext(FennecContext);
  if (!context) {
    throw new Error("useFennecContext must be used within an EthersProvider");
  }
  return context;
};
