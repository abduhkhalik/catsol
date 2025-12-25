import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TokenInfo from "@/components/TokenInfo";
import Footer from "@/components/Footer";
import HolderLeaderboard from "@/components/Leaderboard";
import MarketOverview from '@/components/MarketOverview';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <MarketOverview/>
      <Features />
      <HolderLeaderboard/>
      <TokenInfo />
      <Footer />
    </main>
  );
}
