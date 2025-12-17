"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tag, Layers, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { label: "Ticker", value: "$CATSOL", icon: Tag },
  { label: "Chain", value: "Solana", icon: Layers },
  { label: "Launch Platform", value: "Pump.fun", icon: Rocket },
  {
    label: "Brand Vibe",
    value: "Cute, Confident, Community-Driven",
    icon: Sparkles,
  },
];

/* --- Background ticker row --- */
const TickerRow = ({ reverse = false }: { reverse?: boolean }) => (
  <motion.div
    className="flex gap-16 whitespace-nowrap"
    animate={{ x: reverse ? ["0%", "-100%"] : ["-100%", "0%"] }}
    transition={{
      duration: 70,
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {Array.from({ length: 12 }).map((_, i) => (
      <span
        key={i}
        className="text-5xl md:text-6xl font-bold tracking-widest text-orange-400/5"
      >
        $CATSOL
      </span>
    ))}
  </motion.div>
);

export default function TokenInfo() {
  return (
    <section className="relative py-32 px-6 bg-neutral-950 overflow-hidden">
      {/* ===== Animated Background ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-0 right-0 rotate-[-6deg]">
          <TickerRow />
        </div>
        <div className="absolute top-64 left-0 right-0 rotate-[6deg]">
          <TickerRow reverse />
        </div>

        {/* subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />
      </div>

      {/* ===== Foreground Content ===== */}
      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            $CATSOL Overview
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Clear fundamentals, presented with character.
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
            <CardContent className="p-8 md:p-10">
              <div className="space-y-7">
                {items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label}>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 text-neutral-400">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-sm">{item.label}</span>
                        </div>

                        <span className="text-sm md:text-base font-medium text-white text-right">
                          {item.value}
                        </span>
                      </div>

                      {index !== items.length - 1 && (
                        <Separator className="mt-7 bg-neutral-800" />
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
