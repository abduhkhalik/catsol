"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Crown, Clock, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

type Holder = {
  rank: number;
  address: string;
  amount: string;
};

export default function HolderLeaderboard() {
  const [holders, setHolders] = useState<Holder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchHolders = async () => {
      try {
        const res = await fetch("/api/holders", {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch holders");

        const json = await res.json();
        setHolders(json.data || []);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchHolders();
  }, []);

  return (
    <section className="relative py-32 px-6 bg-neutral-950 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-orange-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center space-y-4"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
            <Trophy className="h-6 w-6" />
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Top $CATSOL Holders
          </h2>

          <p className="text-neutral-400 max-w-xl mx-auto">
            Live on-chain leaderboard powered by Solana data.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Card className="border border-neutral-800 bg-neutral-900/70 backdrop-blur-xl shadow-xl shadow-black/40">
            <CardContent className="p-8">
              {/* ===== Loading ===== */}
              {loading && (
                <div className="flex flex-col items-center py-16 text-neutral-400">
                  <Clock className="mb-3 h-6 w-6 animate-pulse" />
                  Loading leaderboard...
                </div>
              )}

              {/* ===== Error ===== */}
              {!loading && error && (
                <div className="flex flex-col items-center py-16 text-center space-y-3 text-neutral-400">
                  <AlertTriangle className="h-6 w-6 text-orange-400" />
                  <p>Unable to load holder data.</p>
                  <p className="text-xs text-neutral-500">
                    Please try again later.
                  </p>
                </div>
              )}

              {/* ===== Empty / Coming Soon ===== */}
              {!loading && !error && holders.length === 0 && (
                <div className="flex flex-col items-center py-16 text-center space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                    <Clock className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-medium text-white">
                    Leaderboard Coming Soon
                  </h3>

                  <p className="text-sm text-neutral-400 max-w-md">
                    We are indexing on-chain holder data.  
                    This leaderboard will go live shortly.
                  </p>
                </div>
              )}

              {/* ===== Data ===== */}
              {!loading && !error && holders.length > 0 && (
                <div className="space-y-4">
                  {holders.map((holder, index) => (
                    <motion.div
                      key={holder.rank}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      className="group flex items-center justify-between rounded-xl border border-neutral-800 px-4 py-3 hover:border-orange-400/40 transition"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800 text-sm font-semibold text-white">
                          {holder.rank === 1 ? (
                            <Crown className="h-4 w-4 text-orange-400" />
                          ) : (
                            `#${holder.rank}`
                          )}
                        </div>

                        <span className="font-mono text-sm text-neutral-300">
                          {holder.address}
                        </span>
                      </div>

                      <span className="text-sm font-medium text-white">
                        {Number(holder.amount).toLocaleString()} $CATSOL
                      </span>
                    </motion.div>
                  ))}

                  <p className="mt-6 text-xs text-neutral-500 text-center">
                    Updated automatically from on-chain data.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
