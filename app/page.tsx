import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TokenInfo from "@/components/TokenInfo";
import Footer from "@/components/Footer";
import HolderLeaderboard from "@/components/Leaderboard";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <HolderLeaderboard/>
      <TokenInfo />
      <Footer />
    </main>
  );
}
