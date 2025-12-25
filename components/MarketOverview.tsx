"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, BarChart3, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type MarketData = {
  price: number;
  marketCap: number;
  volume24h: number;
};

export default function MarketOverview() {
  const [data, setData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/market")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const stats = [
    {
      label: "Price",
      value: data ? `$${data.price.toFixed(6)}` : "—",
      icon: DollarSign,
    },
    {
      label: "Market Cap",
      value: data ? `$${data.marketCap.toLocaleString()}` : "—",
      icon: TrendingUp,
    },
    {
      label: "24h Volume",
      value: data ? `$${data.volume24h.toLocaleString()}` : "—",
      icon: BarChart3,
    },
  ];

  return (
    <section className="relative py-28 px-6 bg-neutral-950">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            $CATSOL Market Overview
          </h2>
          <p className="text-neutral-400">
            Live market data sourced directly from on-chain liquidity.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border border-neutral-800 bg-neutral-900/70 backdrop-blur-xl">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <p className="text-sm text-neutral-400">
                      {item.label}
                    </p>

                    <p className="text-2xl font-semibold text-white">
                      {loading ? "Loading…" : item.value}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
