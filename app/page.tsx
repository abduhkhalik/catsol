import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TokenInfo from "@/components/TokenInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <TokenInfo />
      <Footer />
    </main>
  );
}
