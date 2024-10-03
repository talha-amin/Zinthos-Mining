"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "./ui/Container";
const navLinks = [
  { href: "/", icon: "/images/icons/home.svg" },
  { title: "Memenomic", href: "#tokenomics" },
  { title: "Roadmap", href: "#roadmap" },
  { title: "Whitepaper", href: "https://drive.google.com/file/d/15oxktQyaYVfB8p_afCR_MG9-vfYYowRC/view?usp=sharing" },

];


const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("opennnnnnnnnn", open);
  }, [open]);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const pathname = usePathname();

  return (
    <header
      className={`${
        !open ? `left-0 right-0 top-0` : ""
      } relative z-50 w-full h-[60px] sm:h-[100px] -mb-[60px] sm:-mb-[100px] flex items-center`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-20">
            
            {/* <Link href="/" className="relative aspect-square h-6 sm:h-10"> */}
            <Image src={"/logo.svg"} className="object-contain" width={100} height={100} alt="Logo" />
            {/* </Link> */}
          </div>
          <div className="text-m hidden gap-10 text-neutral-300 lg:flex lg:bg-neutral-800 rounded-full md:p-2">
            {navLinks.map((link, index) => {
              return (
                <Link
                  data-text={link.title}
                  key={index}
                  href={link.href}
                  className={`chain-link text-sm duration-200 hover:text-white rounded-full px-4 py-2 ${
                    pathname == link.href ? "lg:bg-neutral-700" : ""
                  }`}
                >
                  <span>
                    {link.title ?? (
                      <Image
                        width={20}
                        height={20}
                        className="object-contain"
                        src={link.icon}
                        alt="home icon"
                      />
                    )}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            
          <button className="bg-[rgb(23, 44, 113)] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-900 hover:scale-105 transition-transform shadow-lg shadow-blue-600 w-full sm:w-auto">
  Buy Token
</button>


            <div
              className="cursor-pointer text-xl lg:hidden"
              onClick={toggleMenu}
            >
              <FiMenu />
            </div>
          </div>
        </nav>
      </Container>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 z-50 h-screen w-full origin-top bg-darkGray p-5 text-neutral-300 text-neutral-100"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <div className="relative aspect-[2/1] h-10">
                  <Image width={100} height={100} src="logo.svg" alt="Logo" />
                </div>
                <p className="cursor-pointer text-xl relative z-50" onClick={toggleMenu}>
                  <AiOutlineClose />
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="font-lora flex h-full flex-col items-center justify-center gap-2 -mt-8"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div key={index} className="overflow-hidden">
                      <MobileNavLink
                        title={link.title as string}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-lg font-bold uppercase tracking-wider "
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
