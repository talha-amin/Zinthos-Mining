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
    title: "Order Placed",
    desc: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.",
    img: "/images/landing/roadmap-1.png",
  },
  {
    title: "Order Shipped",
    desc: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.",
    img: "/images/landing/roadmap-2.png",
  },
  {
    title: "In Transit",
    desc: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.",
    img: "/images/landing/roadmap-3.png",
  },
  {
    title: "Out of Delivery",
    desc: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.",
    img: "/images/landing/roadmap-4.png",
  },
  {
    title: "Delivered",
    desc: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.",
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
    opacity: 0,
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
      delay: 0.05 * index,
      duration: 0.25,
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
