export const companies = [
  {
    logo: "/images/landing/league-of-legends.png",
  },
  {
    logo: "/images/landing/cs-go.png",
  },
  {
    logo: "/images/landing/formula.png",
  },
  {
    logo: "/images/landing/fifa.png",
  },
  {
    logo: "/images/landing/fortnite.png",
  },
];

export const tokenomics = [
  {
    label: "Tournaments and Gaming Rewards",
    value: 40,
    tokens: 1200000000,
    colorClass: "after:bg-[#EE314E]",
  },
  {
    label: "Ecosystem Development and Partnerships",
    value: 15,
    tokens: 450000000,
    colorClass: "after:bg-[#FC4830]",
  },
  {
    label: "Private ICO",
    value: 10,
    tokens: 300000000,
    colorClass: "after:bg-[#FFB80E]",
  },
  {
    label: "Team and Advisors",
    value: 10,
    tokens: 300000000,
    colorClass: "after:bg-[#7CC23B]",
  },
  {
    label: "Marketing and Community Building",
    value: 10,
    tokens: 300000000,
    colorClass: "after:bg-[#00BF99]",
  },
  {
    label: "Liquidity Provision",
    value: 5,
    tokens: 150000000,
    colorClass: "after:bg-[#00B1DF]",
  },
  {
    label: "Strategic Reserve",
    value: 5,
    tokens: 150000000,
    colorClass: "after:bg-[#308BE3]",
  },
  {
    label: "Staking Rewards",
    value: 3,
    tokens: 90000000,
    colorClass: "after:bg-[#9B7AE3]",
  },
  {
    label: "Public Sale",
    value: 2,
    tokens: 60000000,
    colorClass: "after:bg-[#E869B0]",
  },
];

export const roadmap = [
  {
    title: "Airdrop",
    desc: "Distribute tokens to early supporters and create a widespread community engagement. Foster inclusivity and build a solid foundation for our project.",
    img: "/images/landing/roadmap-1.png",
  },
  {
    title: "ICO",
    desc: "Launch the Initial Coin Offering to fundraise for the project's development. Provide an opportunity for investors to participate in the project's growth and success.",
    img: "/images/landing/roadmap-2.png",
  },
  {
    title: "Token Listing",
    desc: "Secure listings on major cryptocurrency exchanges to enhance liquidity and accessibility. Enable wider adoption of our token within the broader crypto ecosystem.",
    img: "/images/landing/roadmap-3.png",
  },
  {
    title: "Esports Competitions",
    desc: "Organize and sponsor esports competitions, creating a unique use case for our token within the gaming community. Drive engagement and utility for our ecosystem.",
    img: "/images/landing/roadmap-4.png",
  },
  {
    title: "Art NFT Marketplace",
    desc: "Establish a decentralized marketplace for digital art NFTs, leveraging blockchain technology. Empower artists and collectors while integrating our token as the primary medium of exchange.",
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
