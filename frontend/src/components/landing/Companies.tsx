// "use client";
// import { companies } from "@/data";
// import { motion } from "framer-motion";
// // import Image from "next/image";

// const Companies = () => {
// //   const marqueeVariants = {
// //     animate: {
// //       x: "-100%",
// //       transition: {
// //         x: {
// //           repeat: Infinity,
// //           repeatType: "loop",
// //           duration: 20,
// //           ease: "linear",
// //         },
// //       },
// //     },
// //   };

// const typingVariants = {
//     hidden: {
//       opacity: 0,
//     },
//     visible: (index: number) => ({
//       opacity: 1,
//       transition: {
//         delay: index * 0.05, // Adjust typing speed
//       },
//     }),
//   };
  

//   // TypingEffect component props type
// interface TypingEffectProps {
//     text: string;
//   }
  
//   // TypingEffect component without React.FC
//   const TypingEffect = ({ text }: TypingEffectProps) => {
//     return (
//       <div className="flex flex-wrap">
//         {text.split("").map((char, index) => (
//           <motion.span
//             key={index}
//             custom={index}
//             variants={typingVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {char}
//           </motion.span>
//         ))}
//       </div>
//     );
//   };


//   interface Company {
//     paragraph: string;
//   }

//   const CompaniesTypingEffect = () => {
//     return (
//       <div className="space-y-6">
//         {companies.map((company, index) => (
//           <div key={index} className="mb-4">
//             <TypingEffect text={company.paragraph} />
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   return (
//     <section className="mt-12 w-full mx-auto">
//       <div className="bg-neutralcolor py-12">
//         <div className="relative w-full gap-20 overflow-hidden whitespace-nowrap">
//           {Array.from({ length: 2 }).map((item, i) => {
//             return (
//               <motion.div
//                 // key={i}
//                 // variants={marqueeVariants}
//                 // animate="animate"
//                 // className="inline-flex flex-nowrap items-center justify-around gap-8 pr-8 lg:gap-16 lg:pr-16"
//               >
//                 {/* {companies.map(({ paragraph }, i) => { */}
//                   {/* return (
//                     <>
//                     <div className="relative w-20 lg:w-32 aspect-square"> */}
//                       {/* <Image
//                         key={i}
//                         fill
//                         src={paragraph}
//                         className="object-contain"
//                         alt="google icon"
//                       /> */}
//                        {/* <span
//                         key={i}  className="object-contain"
//                       >
//                                                 {paragraph}
//                         </span>
//                     </div> */}
//                       {/* <div className="relative aspect-square w-6 lg:w-10">
//                         <Image
//                           fill
//                           src="/images/icons/aesterik.svg"
//                           className="object-contain"
//                           alt="star symbol"
//                         />
//                       </div> */}
//                     {/* </> */}
//                   {/* );
//                 })} */}
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Companies;
