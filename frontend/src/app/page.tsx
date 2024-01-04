import Image from "next/image";
import Hero from "../components/landing/Hero";
import Companies from "../components/landing/Companies";
import Contact from "../components/landing/Contact";
import Ecosystem from "../components/landing/Ecosystem";
import Roadmap from "../components/landing/Roadmap";
import FAQs from "../components/landing/FAQs";
import Tokenomics from "../components/landing/Tokenomics";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Ecosystem />
      <Tokenomics />
      <Roadmap />
      <FAQs />
      <Contact />
    </main>
  );
}
