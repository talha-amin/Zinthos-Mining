"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeroTimer from "./HeroTimer";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Fade from "../animation/Fade";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/data";
import { UseFennecContext } from "@/context/FennecContext";
import SumsubWebSdk from "@sumsub/websdk-react";
import { TransakConfig, Transak } from '@transak/transak-sdk';
const Hero = () => {
const [buyMethod, setBuyMethod] = useState<number>(1)

// const {buyFennecLoadingState,approveMaxUSDTLoadingState,isApprovedUSDT,approveMaxUSDThandle,userInputAmount,setUserInputAmount,ROUND,buyFennecHandle,FennecTokenPrice,kycStatus,kycAccessToken,connectWallet} = UseFennecContext();
// const {buyFennecLoadingState,approveMaxUSDTLoadingState,ConnectedWallet,isApprovedUSDT,approveMaxUSDThandle,userInputAmount,setUserInputAmount,ROUND,buyFennecHandle,FennecTokenPrice,kycStatus,kycAccessToken} = UseFennecContext();
const {connectWallet,connectWalletHanle} = UseFennecContext();
  
// console.log("kycStatus",kycStatus);

  // useEffect(() => {
  // console.log("kycStatus",kycStatus);
  // console.log("kycAccessToken",kycAccessToken);

  // }, [kycStatus,kycAccessToken])
  
  
const buyMethodText = ["ETH","USDT","VISA"]
const buyMethodIcon = ["eth.svg","usdt.svg","visa.svg"]

const ROUND_TITLE = ["Round Not Yet Started","Round 1 Tilte","Round 2 Tilte","Round 3 Tilte"]

// const transakConfig: TransakConfig = {
//   apiKey: process.env.NEXT_PUBLIC_TRANSAK_API_KEY as string,
//   environment: Transak.ENVIRONMENTS.STAGING, // Transak.ENVIRONMENTS.PRODUCTION
//   widgetHeight: "100%",
//   exchangeScreenTitle : "Buy USDT",
//   productsAvailed : "BUY",
//   defaultFiatAmount : 100,
//   defaultFiatCurrency : "USD",
//   network : "polygon",
//   defaultPaymentMethod : "credit_debit_card",
//   cryptoCurrencyCode : "USDT",
//   walletAddress: connectWallet as string
// };

// const transak = new Transak(transakConfig);



// // To get all the events
// Transak.on('*', (data : any) => {
//   console.log(data);
// });

// // This will trigger when the user closed the widget
// Transak.on(Transak.EVENTS.TRANSAK_WIDGET_CLOSE, () => {
//   console.log('Transak SDK closed!');
// });

// /*
// * This will trigger when the user has confirmed the order
// * This doesn't guarantee that payment has completed in all scenarios
// * If you want to close/navigate away, use the TRANSAK_ORDER_SUCCESSFUL event
// */
// Transak.on(Transak.EVENTS.TRANSAK_ORDER_CREATED, (orderData:any) => {
//   console.log(orderData);
// });

// /*
// * This will trigger when the user marks payment is made
// * You can close/navigate away at this event
// */
// Transak.on(Transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData:any) => {
  // console.log(orderData);
  // transak.close();
// });

  return (
    <section className="relative">
      {/* <div className="absolute pointer-events-none left-0 top-0 -z-10  w-full">
        <div className="relative w-full aspect-square">
          <Image
            src="/images/landing/sun.png"
            fill
            className="object-contain object-top"
            alt="backgroundImg"
          />
        </div>
      </div> */}
      <Container>
        <div className="grid lg:grid-cols-2 items-center gap-8 pt-32">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
            className="flex flex-col gap-6 text-center lg:text-start"
          >
            <motion.h1
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold xl:w-[30ch]"
            >
             Welcome to Zinthos Mining <span className="text-primary" style={{ color: '#00FFFF' }}>(ZIN)</span> Powering the Future of <span className="text-primary" style={{ color: '#00FFFF' }}>Crypto Mining</span>
            </motion.h1>
            <motion.h6
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-lg sm:text-lg md:text-lg lg:text-lg xl:w-[115ch]  text-justify"
            >
Zinthos Mining is a groundbreaking Meme-driven mining project designed to revolutionize the cryptocurrency mining space. We combine cutting-edge mining operations with a sustainable and investor-friendly tokenomics model that rewards participants and reinvests into the future.
</motion.h6>
            {/* <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="font-bold max-w-[45ch] text-xs md:text-sm lg:text-base text-neutral-300 mx-auto lg:mx-0"
            >
              Explore the Future of Finance with Innovative Solutions,
              Seamlessly Bridging Traditional and Digital Economies.
            </motion.p> */}
          </motion.div>
          {/* hero box */}
          {/* <Fade className="p-[1.5px] max-w-md mx-auto lg:ms-auto overflow-hidden hero-box-wrapper w-full mt-5">
            <div className="hero-box w-full bg-black px-4 py-6 lg:p-6 text-white mx-auto w-full relative">
              <div className="absolute left-[50%] top-0 -translate-x-1/2 -translate-y-1/2 opacity-[65%] pointer-events-none">
                <div className="shadow-effect blur-[150px] aspect-square w-[350px]"></div>
              </div>
              <h2 className="text-2xl font-bold text-center mb-4">
                Buy In Before Price Increase
              </h2>
              {/* <p className="text-center text-xs md:text-sm lg:text-lg font-bold mb-6">
                STAGE {ROUND} : {ROUND_TITLE[ROUND]}
              </p> */}
              {/* <HeroTimer /> */}
              {/* <div className=" mx-auto">
                <div className="bg-white h-6 rounded-full mb-4">
                  <div
                    className="bg-gradient-to-l from-[#FFD300] to-[#EB6335] h-full rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="text-center mb-6">
                <span className="text-xs">
                  USDT RAISED: $5,161,020.05 / $5,828,309
                </span>
              </div> */}

              {/* {
                kycStatus === "completed" && 
                <>
                <div className="flex items-center gap-5 md:gap-4 mb-6  mx-auto">
                <hr className="h-[1px] bg-white w-full" />
                <span className="text-xs whitespace-nowrap">Instant Buy</span>
                <hr className="h-[1px] bg-white w-full" />
              </div>
              <div className="text-white grid grid-cols-2 gap-3 items-center mb-6  mx-auto">
                {/* <button onClick={()=>setBuyMethod(0)} className={`inline-flex gap-1 sm:gap-3 items-center justify-center rounded-md text-[9px] sm:text-sm font-medium ring ring-[.75px] ${buyMethod==0?"ring-primary text-primary":"ring-white"} duration-300  h-10 px-2 sm:px-4 py-1 sm:py-2`}>
                  <div className="h-[75%] sm:h-full aspect-square relative">
                    <Image
                      fill
                      className="object-contain"
                      src="/images/icons/eth.svg"
                      alt="ethereum icon"
                    />{" "}
                  </div>{" "}
                  ETH
                </button> */}
                {/* <button onClick={()=>setBuyMethod(1)} className={`inline-flex gap-1 sm:gap-3 items-center justify-center rounded-md text-[9px] sm:text-sm font-medium ring ring-[.75px] ${buyMethod==1?"ring-primary text-primary ":"ring-white"} duration-300 h-10 px-2 sm:px-4 py-1 sm:py-2`}>

                  {/* <div className="h-[75%] sm:h-full aspect-square relative">
                    <Image
                      fill
                      className="object-contain"
                      src="/images/icons/usdt.svg"
                      alt="usdt icon"
                    />{" "}
                  </div>{" "} */}
                  {/* USDT */}
                {/* </button> */} 
                {/* <button onClick={()=>setBuyMethod(2)} className={`inline-flex gap-1 sm:gap-3 items-center justify-center rounded-md text-[9px] sm:text-sm font-medium ring ring-[.75px] ${buyMethod==2?"ring-primary text-primary":"ring-white"} duration-300  h-10 px-2 sm:px-4 py-1 sm:py-2`}>
                  <div className="h-[75%] sm:h-full aspect-square relative">
                    <Image
                      fill
                      className="object-contain"
                      src="/images/icons/visa.svg"
                      alt="visa icon"
                    />{" "}
                  </div>{" "}
                  Card
                </button> */}
              {/* </div>
              <div className="grid grid-cols-2 gap-3">
{   buyMethod == 1 && 
<>

           <div className="flex flex-col gap-1">
                  <label htmlFor="ethAmount" className="text-xs">
                    Fennec amount to buy
                  </label>
                  <div className="inline-flex gap-3 items-center justify-center rounded-md text-xs sm:text-sm font-medium ring ring-[.75px] ring-white h-10 px-2 sm:px-4 py-1 sm:py-2">
                    <input
                      id="ethAmount"
                      type="number"
                      className="w-fit min-w-0 bg-transparent focus:outline-none"
                      placeholder="0"
                      value={userInputAmount}
                      min={0}
                      onChange={(e)=>{setUserInputAmount(String(e.target.value))}}
                    />
                    <div className="h-full aspect-square relative">
                      <Image
                        fill
                        className="object-contain"
                        src="/logo.svg"
                        alt="fennec icon"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="ethAmount" className="text-xs">
                    Pay with {buyMethodText[buyMethod]}
                  </label>
                  <div className="inline-flex gap-3 items-center justify-center rounded-md text-xs sm:text-sm font-medium ring ring-[.75px] ring-white h-10 px-2 sm:px-4 py-1 sm:py-2">
                    <input
                      id="ethAmount"
                      type="number"
                      className="w-fit min-w-0 bg-transparent focus:outline-none"
                      placeholder="0"
                     value={Number(userInputAmount)<=0?'':Number(userInputAmount)*Number(FennecTokenPrice)}
                      disabled
                      
                    />
                    <div className="h-full aspect-square relative">
                      <Image
                        fill
                        className="object-contain"
                        src={`/images/icons/${buyMethodIcon[buyMethod]}`}
                        alt="buy icon"
                      />{" "}
                    </div>
                  </div>
                </div>
                </>
                }
                
              </div></> */}
              {/* } */} 
             
              {/* {kycAccessToken !== "" && kycStatus !== "completed" && (
          <SumsubWebSdk
            // onResize={{
            //   height: 1000,
            // }}
            accessToken={kycAccessToken}
            expirationHandler={() => Promise.resolve(kycAccessToken)}
            config={{
              lang: "ru-RU",
            }}
            // theme='dark'
            // style={{"margin-top":"10px","border-radius":"50px"}}
            // className="my-10"
          />
        )} */}
              {/* <div className="flex justify-center mt-8">

              {
                kycStatus !== "completed"?

                  <Button fullWidth className=""
                  disabled
                  >
                  {`Verify Your KYC Documents`}
                  
                </Button>
                :

                buyMethod==1?

                isApprovedUSDT?
                  <Button fullWidth className=""
                  disabled={ROUND==0|| (Number(userInputAmount)<=0)  || buyFennecLoadingState}
                  isLoading={buyFennecLoadingState}

                  onClick={()=>buyFennecHandle?.()}
                  >
                  {ROUND==0?"Round isn't started yet":"Buy Fennec"}
                  
                </Button>
                :
                  <Button fullWidth className=""
                  disabled={ROUND==0|| (Number(userInputAmount)<=0) || approveMaxUSDTLoadingState}
                  isLoading={approveMaxUSDTLoadingState}
                  onClick={()=>approveMaxUSDThandle?.()}
                  >
                  {ROUND==0?"Round isn't started yet":"Approve USDT"}
                </Button>

                :
                buyMethod == 2 ? 

                <Button fullWidth className=""
                onClick={()=>transak.init()}
                >
                  Buy USDT
              </Button> 
              :
              null
              }
        
                  {/* {isApprovedUSDT?
                  <Button fullWidth className=""
                  disabled={ROUND==0|| Number(userInputAmount)<=0}
                  onClick={()=>buyFennecHandle?.()}
                  >
                  {ROUND==0?"Round isn't started yet":"Buy Fennec"}
                  
                </Button>
                :
                  <Button fullWidth className=""
                  disabled={ROUND==0|| Number(userInputAmount)<=0}

                  onClick={()=>approveMaxUSDThandle?.()}
                  >
                  {ROUND==0?"Round isn't started yet":"Approve USDT"}
                </Button>} */}
                
              {/* </div> */}
            {/* </div> */}
          {/* </Fade>  */}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
