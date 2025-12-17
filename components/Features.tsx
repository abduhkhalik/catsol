"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Cute by Nature",
    desc: "Soft visuals and friendly energy that feels instantly familiar.",
    icon: Heart,
  },
  {
    title: "Solana Speed",
    desc: "Lightning-fast transactions with consistently low fees.",
    icon: Zap,
  },
  {
    title: "Community First",
    desc: "Created for fun and shaped by the people behind it.",
    icon: Users,
  },
];

const TickerRow = ({ reverse = false }: { reverse?: boolean }) => (
  <motion.div
    className="flex gap-16 whitespace-nowrap"
    animate={{ x: reverse ? ["0%", "-100%"] : ["-100%", "0%"] }}
    transition={{
      duration: 40,
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

export default function Features() {
  return (
    <section className="relative py-32 px-6 bg-neutral-950 overflow-hidden">
      {/* Animated ticker background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 right-0 rotate-[-6deg]">
          <TickerRow />
        </div>
        <div className="absolute top-48 left-0 right-0 rotate-[6deg]">
          <TickerRow reverse />
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Why CATSOL Exists
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            A simple concept executed with personality and precision.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
              >
                <Card className="group relative h-full border border-neutral-800 bg-neutral-900/70 backdrop-blur-xl">
                  <CardContent className="p-8 space-y-5">
                    {/* Icon */}
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 transition group-hover:bg-orange-500/20">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Accent line */}
                    <span className="block h-px w-8 bg-orange-400/40 transition-all duration-300 group-hover:w-12" />
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
