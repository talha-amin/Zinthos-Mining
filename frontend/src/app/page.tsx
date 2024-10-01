import Hero from "../components/landing/Hero";
// import Companies from "../components/landing/Companies";
import Gif from "../components/landing/Gif";
import Contact from "../components/landing/Contact";
import Roadmap from "../components/landing/Roadmap";
// import FAQs from "../components/landing/FAQs";
import Tokenomics from "../components/landing/Tokenomics";
import Orbits from "@/components/landing/Orbits";
import FerrisWheel from "@/components/landing/FerrisWheel";
import Ecosystem2 from "@/components/landing/Ecosystem2";

export default function Home() {
  return (
    <main>
      <Gif />
      <Hero />
      {/* <Companies /> */}
      <Ecosystem2 />
      <Tokenomics />
      <Roadmap />
      {/* <FAQs /> */}
      <Contact />
    </main>
  );
}
