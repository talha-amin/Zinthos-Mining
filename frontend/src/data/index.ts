// export const companies = [
//   {
//     logo: "/images/landing/league-of-legends.png",
//   },
//   {
//     logo: "/images/landing/cs-go.png",
//   },
//   {
//     logo: "/images/landing/formula.png",
//   },
//   {
//     logo: "/images/landing/fifa.png",
//   },
//   {
//     logo: "/images/landing/fortnite.png",
//   },
// ];

export const companies = [
  {
    paragraph: "By reinvesting half of our profits into new equipment, we ensure continuous improvement of our mining operations, leading to higher profitability over time.",
  },
  {
    paragraph: "Our buyback program and liquidity pool strategies are designed to increase the value and stability of ZIN tokens.",
  },
  {
    paragraph: "With our five-phase plan, we are committed to continuous expansion and delivering value through innovation in the mining space.",
  },
];


export const tokenomics = [
  {
    label: "Total Supply",
    value: 100,
    tokens: 500000000000000,
    colorClass: "after:bg-[#EE314E]",
  },
  // {
  //   label: "Ecosystem Development and Partnerships",
  //   value: 15,
  //   tokens: 450000000,
  //   colorClass: "after:bg-[#FC4830]",
  // },
  // {
  //   label: "Private ICO",
  //   value: 10,
  //   tokens: 300000000,
  //   colorClass: "after:bg-[#FFB80E]",
  // },
  // {
  //   label: "Team and Advisors",
  //   value: 10,
  //   tokens: 300000000,
  //   colorClass: "after:bg-[#7CC23B]",
  // },
  // {
  //   label: "Marketing and Community Building",
  //   value: 10,
  //   tokens: 300000000,
  //   colorClass: "after:bg-[#00BF99]",
  // },
  // {
  //   label: "Liquidity Provision",
  //   value: 5,
  //   tokens: 150000000,
  //   colorClass: "after:bg-[#00B1DF]",
  // },
  // {
  //   label: "Strategic Reserve",
  //   value: 5,
  //   tokens: 150000000,
  //   colorClass: "after:bg-[#308BE3]",
  // },
  // {
  //   label: "Staking Rewards",
  //   value: 3,
  //   tokens: 90000000,
  //   colorClass: "after:bg-[#9B7AE3]",
  // },
  // {
  //   label: "Public Sale",
  //   value: 2,
  //   tokens: 60000000,
  //   colorClass: "after:bg-[#E869B0]",
  // },
];

export const roadmap = [
  {
    title: "Phase 1",
    desc: " Initial Setup – Building mining infrastructure and token distribution.",
    img: "/images/landing/roadmap-1.png",
  },
  {
    title: "Phase 2",
    desc: "Expansion – Expanding mining operations with the latest technology.",
    img: "/images/landing/roadmap-2.png",
  },
  {
    title: "Phase 3",
    desc: "Optimization – Enhancing mining efficiency and reducing energy consumption.",
    img: "/images/landing/roadmap-3.png",
  },
  {
    title: "Phase 4",
    desc: "Scaling Up – Bringing in larger mining farms and improving network security.",
    img: "/images/landing/roadmap-4.png",
  },
  {
    title: "Phase 5",
    desc: "Ecosystem Growth – Diversifying into new blockchain opportunities while solidifying ZIN's role in the mining ecosystem.",
    img: "/images/landing/roadmap-5.png",
  },
];

export const ecosystem = [
  {
    icon: "/images/landing/eco-1.png",
    title: "nft",
    desc: "collect and complete your collection",
  },
  {
    icon: "/images/landing/eco-2.png",
    title: "Market place",
    desc: "collect and complete your collection",
  },
  {
    icon: "/images/landing/eco-3.png",
    title: "Surprise Utility",
    desc: "",
  },
  {
    icon: "/images/landing/eco-4.png",
    title: "Catboy pass",
    desc: "unlock a world of exclusive benifits",
  },
  {
    icon: "/images/landing/eco-5.png",
    title: "Staking",
    desc: "Stake you $catboy or NFT $ Earn reward",
  },
  {
    icon: "/images/landing/eco-6.png",
    title: "Battle Game",
    desc: "chance for Victory & Earn",
  },
  {
    icon: "/images/landing/eco-7.png",
    title: "Chibis Raffle",
    desc: "biweekly prizes",
  },
  {
    icon: "/images/landing/eco-8.png",
    title: "Merchandise",
    desc: "comming Soon & mores",
  },
];

export const staggeredPop = {
  initial: (index: number) => ({
    opacity: 0.5,
    scale: 0,
    transition: {
      delay: 0,
      duration: 0.25,
    },
  }),
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1 * index,
      duration: 0.1,
    },
  }),
};

export const staggeredSlide = {
  initial: (index: number) => ({
    opacity: 0,
    x: 100,
    transition: {
      delay: 0,
      duration: 0.25,
    },
  }),
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.25,
    },
  }),
};

export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};
