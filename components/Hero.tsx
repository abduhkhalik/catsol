"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pill, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Ticker = ({ reverse = false }: { reverse?: boolean }) => (
  <motion.div
    className="flex gap-16 whitespace-nowrap"
    animate={{ x: reverse ? ["0%", "-100%"] : ["-100%", "0%"] }}
    transition={{
      duration: 60,
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {Array.from({ length: 10 }).map((_, i) => (
      <span
        key={i}
        className="text-6xl md:text-7xl font-extrabold tracking-widest text-orange-400/5"
      >
        $CATSOL
      </span>
    ))}
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-black">
      {/* ===== Animated Background Layer ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* drifting radial glow */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-orange-400/20 blur-3xl"
        />

        {/* ticker rows */}
        <div className="absolute top-32 left-0 right-0 rotate-[-6deg]">
          <Ticker />
        </div>
        <div className="absolute top-72 left-0 right-0 rotate-[6deg]">
          <Ticker reverse />
        </div>
      </div>

      {/* ===== Foreground Content ===== */}
      <div className="relative mx-auto max-w-7xl px-6 py-36 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:text-left space-y-7"
        >
          <Badge className="rounded-full bg-orange-500/10 text-orange-400 border border-orange-400/30 w-fit mx-auto lg:mx-0">
            Built on Solana
          </Badge>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Meet <span className="text-orange-400">$CATSOL</span>
          </h1>

          <p className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            A confident cat with a clean capsule. Designed for memes, driven by
            community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Link href={""}>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-400 text-black font-semibold px-8 shadow-lg shadow-orange-500/30"
              >
                <Pill className="mr-2 h-5 w-5" />
                View on Pump.fun
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="border-orange-400/40 text-orange-300 hover:bg-orange-400/10 px-8"
            >
              <Link href={"https://x.com/catsolana60"}>
                <Twitter className="mr-2 h-5 w-5" />
              </Link>
              Follow on X
            </Button>
          </div>
        </motion.div>

        {/* RIGHT: Mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/images/maskot.png"
              alt="CATSOL Mascot"
              width={420}
              height={420}
              priority
              className="drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
            />

            <div className="absolute inset-0 rounded-full bg-orange-400/10 blur-2xl -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
