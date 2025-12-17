"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Gift } from "lucide-react";
import { motion } from "framer-motion";

const TickerRow = () => (
  <motion.div
    className="flex gap-16 whitespace-nowrap"
    animate={{ x: ["-100%", "0%"] }}
    transition={{
      duration: 80,
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {Array.from({ length: 10 }).map((_, i) => (
      <span
        key={i}
        className="text-4xl md:text-5xl font-semibold tracking-widest text-orange-400/5"
      >
        $CATSOL GIVEAWAY
      </span>
    ))}
  </motion.div>
);

export default function GiveawayNotice() {
  return (
    <section className="relative py-28 px-6 bg-neutral-950 overflow-hidden">
      {/* Background ticker */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-0 right-0 rotate-[-4deg]">
          <TickerRow />
        </div>
        <div className="absolute top-64 left-0 right-0 rotate-[4deg]">
          <TickerRow />
        </div>
      </div>

      {/* Foreground */}
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Card className="border border-neutral-800 bg-neutral-900/70 backdrop-blur-xl shadow-xl shadow-black/40">
            <CardContent className="p-10 text-center space-y-6">
              {/* Icon */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                <Gift className="h-6 w-6" />
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Daily Giveaway for Holders
              </h3>

              <p className="text-neutral-400 leading-relaxed max-w-xl mx-auto">
                We are preparing daily giveaways exclusively for all
                <span className="text-orange-400 font-medium"> $CATSOL </span>
                holders.  
                Simply hold your tokens and stay connected with the community.
              </p>

              <p className="text-xs text-neutral-500">
                Distribution mechanics and schedules will be announced through
                official channels.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
