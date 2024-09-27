// "use client";
// import { ResponsiveLine } from "@nivo/line";
// import Button from "../../components/ui/Button";
// import { useEffect, useState } from "react";
// import Container from "../../components/ui/Container";
// import VestingSchedule from "../../components/vesting/VestingSchedule";
// import { UseFennecContext } from "@/context/FennecContext";
// import { currentUnixTimestamp, getWeitoEther } from "@/utils/tools";
// import {
//   useContractWrite,
//   usePrepareContractWrite,
//   useWaitForTransaction,
// } from "wagmi";
// import { vestingContractConfig } from "@/data/constants";
// import CountdownTimer from "@/components/ui/CountdownTimer";

// const tabs = [
//   {
//     id: 1,
//     label: "Strategic Investments",
//   },
//   {
//     id: 2,
//     label: "Private Investments",
//   },
//   {
//     id: 3,
//     label: "Team Allocations",
//   },
// ];
// export default function Vesting() {
//   const { userTxHistoryData } = UseFennecContext();

//   const [selectedTab, setSelectedTab] = useState(1);

//   return (
//     <section className="relative text-white min-h-screen py-20 sm:py-24 md:py-32">
//       <div className="absolute left-0 top-0 -translate-x-1/2 -z-10 -translate-y-1/2 pointer-events-none">
//         <div className="primary-shadow blur-[150px] opacity-[30%] aspect-square w-[600px]"></div>
//       </div>
//       <Container>
//         <div className="no-scrollbar flex gap-8 overflow-x-scroll lg:gap-16 md:bg-neutral-950 md:px-8 mb-8 md:rounded-lg relative overflow-hidden">
//           <div className="absolute hidden md:block right-0 top-0 translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
//             <div className="shadow-effect blur-[300px] aspect-square w-[500px]"></div>
//           </div>
//           {tabs.map((tab, i) => {
//             return (
//               <button
//                 key={i}
//                 onClick={() => setSelectedTab(tab.id)}
//                 className={`font-medium bg-transparent text-sm lg:text-base whitespace-nowrap py-3 md:py-6 border-b-[2px] md:border-b-[4px] border-transparent duration-200 ${
//                   selectedTab == tab.id
//                     ? "text-neutral-100 border-white"
//                     : "text-neutral-400"
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             );
//           })}
//         </div>
//         <div className="grid xl:grid-cols-1 gap-8 mb-8">
//           {userTxHistoryData && userTxHistoryData.length > 0 ? (
//             userTxHistoryData.map((data, i) => (
//               <TxHistoryView key={i} data={data} txId={i} />
//             ))
//           ) : (
//             <div className="bg-neutral-950 p-8 relative overflow-hidden rounded-lg flex items-center justify-center text-center text-lg font-medium">
//               <p className="capitalize text-neutral-500">transaction history is empty</p>
//             </div>
//           )}

//           {/* <>
//           <div className="h-full flex flex-col">
//             <h2 className="text-lg font-semibold mb-4 md:ps-8">
//               Vesting Summary
//             </h2>

//             <div className="bg-neutral-950 p-8 relative overflow-hidden rounded-lg flex-1">
//               <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
//                 <div className="shadow-effect blur-[150px] aspect-square w-[200px]"></div>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4 sm:gap-16 items-center">
//                 <div className="sm:flex-1 w-full sm:w-auto flex flex-col gap-3">
//                   <div className="flex items-center justify-between">
//                     <p className="text-sm text-neutral-400">Locked</p>
//                     <p className="text-sm sm:text-base">1,000,000.000 FTK</p>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <p className="text-sm text-neutral-400">Claimed</p>
//                     <p className="text-sm sm:text-base">118,200 FTK | 0.24%</p>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <p className="text-sm text-neutral-400">Unlocked</p>
//                     <p className="text-sm sm:text-base">0.217 FTK</p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-1 items-center">
//                   <p className="text-xs font-medium text-neutral-400">
//                     Available now
//                   </p>
//                   <p className="text-xl font-bold mb-1">0.217 FTK</p>
//                   <Button>Claim all tokens</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="h-full flex flex-col">
//             <h2 className="text-lg font-semibold mb-4 md:ps-8">
//               Vesting period
//             </h2>
//             <div className="bg-neutral-950 relative overflow-hidden p-8 rounded-lg flex-1">
//               <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
//                 <div className="shadow-effect blur-[150px] aspect-square w-[200px]"></div>
//               </div>
//               <div className="flex-1 flex flex-col gap-3">
//                 <div className="flex sm:items-center justify-between flex-col sm:flex-row">
//                   <p className="text-sm text-neutral-400">Start date</p>
//                   <p>25/06/2021 | 14:38:20</p>
//                 </div>
//                 <div className="flex sm:items-center justify-between flex-col sm:flex-row">
//                   <p className="text-sm text-neutral-400">Cliff</p>
//                   <p>25/06/2021 | 15:38:20</p>
//                 </div>
//                 <div className="flex sm:items-center justify-between flex-col sm:flex-row">
//                   <p className="text-sm text-neutral-400">End date</p>
//                   <p>10/07/2024 | 13:38:20</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </> */}
//         </div>
//         <h2 className="text-lg font-semibold mb-4 md:ps-8">Vesting schedule</h2>
//         <div className="bg-neutral-950 rounded-lg relative">
//           <div className="absolute w-full h-full overflow-hidden">
//             <div className="relative w-full h-full">
//               <div className="absolute left-[50%] top-0 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
//                 <div className="shadow-effect blur-[200px] aspect-square w-[300px]"></div>
//               </div>
//             </div>
//           </div>
//           <div className="px-2 py-4 md:p-8">
//             <VestingSchedule />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// const TxHistoryView = ({ data, txId }: { data: any; txId: number }) => {
//   const [withdrawFennecLoadingState, setWithdrawFennecLoadingState] =
//     useState(false);
//   const [withrawId, setWithdrawId] = useState<number | null>(null);
//   const { notifyError, notifySuccess, notifySuccessWithHash } =
//     UseFennecContext();

//   const { config: withdrawFennecConfig } = usePrepareContractWrite({
//     ...vestingContractConfig,
//     functionName: "withdraw",
//     args: [String(txId)],
//     enabled:
//       currentUnixTimestamp > data.endTime &&
//       Number(getWeitoEther(data.amountToBeGiven)) > 0,
//   });
//   const {
//     data: withdrawFennecData,
//     isLoading: withdrawFennecLoading,
//     isSuccess: withdrawFennecSuccess,
//     status: withdrawFennecStatus,
//     write: withdrawFennechandle,
//   } = useContractWrite(withdrawFennecConfig);

//   useEffect(() => {
//     console.log("withdrawFennecStatus", withdrawFennecStatus);

//     if (withdrawFennecStatus == "loading") {
//       // setWithdrawFennecLoadingState(true)
//       setWithdrawId(txId);
//     }
//     if (withdrawFennecStatus == "success") {
//     }
//     if (withdrawFennecStatus == "error") {
//       // setWithdrawFennecLoadingState(false)
//       setWithdrawId(null);
//       notifyError("User Rejected Transaction");
//     }
//   }, [withdrawFennecStatus]);

//   const { data: withdrawFennecResponse } = useWaitForTransaction({
//     hash: withdrawFennecData?.hash,
//     onSuccess(data) {
//       console.log("final succes", data);
//       // setWithdrawFennecLoadingState(false)
//       setWithdrawId(null);
//       notifySuccessWithHash(
//         "Transaction Confirmed",
//         String(data?.transactionHash)
//       );
//     },
//     onError(data) {
//       console.log("final error", data);
//       // setWithdrawFennecLoadingState(false)
//       setWithdrawId(null);
//       notifyError("Something went wrong");
//     },
//   });

//   const [timestamp, setTimestamp] = useState<number | null>(null);

//   useEffect(() => {
//     const getCurrentTimestamp = () => {
//       const currentTimestamp = Math.floor(Date.now() / 1000);
//       setTimestamp(currentTimestamp);
//     };

//     getCurrentTimestamp(); // Call the function immediately

//     const intervalId = setInterval(getCurrentTimestamp, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <>
//       <div className="h-full flex flex-col">
//         {/* <h2 className="text-lg font-semibold mb-4 md:ps-8">
//               Vesting Summary
//             </h2> */}

//         <div className="bg-neutral-950 p-8 relative overflow-hidden rounded-lg flex-1">
//           <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
//             <div className="shadow-effect blur-[150px] aspect-square w-[200px]"></div>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-4 sm:gap-16 items-center">
//             <div className="sm:flex-1 w-full sm:w-auto flex flex-col gap-3">
//               <div className="flex items-center justify-between">
//                 <p className="text-sm text-neutral-400">Amount Remaining</p>
//                 <p className="text-sm sm:text-base">
//                   {getWeitoEther(data.amountRemaining)} FTK
//                 </p>
//               </div>
//               {/* <div className="flex items-center justify-between">
//                     <p className="text-sm text-neutral-400">Claimed</p>
//                     <p className="text-sm sm:text-base">118,200 FTK | 0.24% dummy</p>
//                   </div> */}
//               <div className="flex items-center justify-between">
//                 <p className="text-sm text-neutral-400">End Time</p>
//                 <p>
//                   <CountdownTimer targetUnixTimestamp={data.endTime} />
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col gap-1 items-center">
//               <p className="text-xs font-medium text-neutral-400">
//                 Available now
//               </p>
//               <p className="text-xl font-bold mb-1">
//                 {getWeitoEther(data.amountToBeGiven)} FTK
//               </p>
//               <Button
//                 disabled={
//                   Number(getWeitoEther(data.amountToBeGiven)) <= 0 ||
//                   (timestamp && timestamp < data.endTime) ||
//                   (withrawId !== null && withrawId === Number(txId))
//                 }
//                 isLoading={withrawId !== null && withrawId === Number(txId)}
//                 onClick={withdrawFennechandle}
//               >
//                 Claim Tokens
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="h-full flex flex-col">
//             <h2 className="text-lg font-semibold mb-4 md:ps-8">
//               Vesting period
//             </h2>
//             <div className="bg-neutral-950 relative overflow-hidden p-8 rounded-lg flex-1">
//               <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
//                 <div className="shadow-effect blur-[150px] aspect-square w-[200px]"></div>
//               </div>
//               <div className="flex-1 flex flex-col gap-3">
//                 <div className="flex sm:items-center justify-between flex-col sm:flex-row">
//                   <p className="text-sm text-neutral-400">Start date</p>
//                   <p>25/06/2021 | 14:38:20</p>
//                 </div>
//                 <div className="flex sm:items-center justify-between flex-col sm:flex-row">
//                   <p className="text-sm text-neutral-400">Cliff</p>
//                   <p>25/06/2021 | 15:38:20</p>
//                 </div>
//                 <div className="flex sm:items-center justify-between flex-col sm:flex-row">
//                   <p className="text-sm text-neutral-400">End date</p>
//                   <p><CountdownTimer targetUnixTimestamp={data.endTime} /></p>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//     </>
//   );
// };
