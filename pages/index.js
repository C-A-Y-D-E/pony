import Hero from "@/components/Hero";
import About from "@/components/About";
import Token from "@/components/Token";
import Buy from "@/components/Buy";
import Join from "@/components/Join";
import { Londrina_Solid } from "next/font/google";

const londrinaSolid = Londrina_Solid({
  variable: "--font-londrinaSolid",
  subsets: ["latin"],
  weight: ["100", "300", "400", "900"],
});

export default function Home() {
  return (
    <main className={`${londrinaSolid.variable} font-londrinaSolid`}>
      <Hero />
      <About />
      <Token />
      <Buy />
      <Join />
    </main>
  );
}
