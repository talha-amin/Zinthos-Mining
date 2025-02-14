import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmoothScroll from "../components/animation/SmoothScroll";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zinthos",
  description: "Powering the Future of Crypto Mining",
  icons:{
    icon: "/logo.svg"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden select-none" >
      <body
        className={`${quicksand.className} bg-black text-white overflow-x-hidden`}
      >
       
            <div className="fixed z-50 inset-0 pointer-events-none bg-white/[7%]"></div>
            <SmoothScroll />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <Header />
            {children}
            <Footer />
          
      </body>
    </html>
  );
}
