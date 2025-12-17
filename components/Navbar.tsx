"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Token", href: "#token" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none"
    >
      {/* Glass container */}
      <div className="pointer-events-auto w-[92%] max-w-6xl rounded-2xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-xl shadow-lg shadow-black/40">
        <div className="flex h-16 items-center justify-between px-6">
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-lg font-semibold tracking-tight text-white"
          >
            <span className="relative">
              <span className="text-orange-400">$</span>CATSOL
              {/* micro underline */}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative text-neutral-400 hover:text-white transition"
              >
                {item.label}
                {/* animated underline */}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex text-neutral-400 hover:text-orange-400"
            >
              <Link href={"https://x.com/catsolana60"}>
                <Twitter className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="sm"
              className="bg-orange-500 hover:bg-orange-400 text-black font-semibold shadow shadow-orange-500/30"
            >
              <Link href="https://pump.fun/coin/3nvvkPxqCyGUfj6mBQANoMyZjT8LTmJ7dbEpa9Rgpump">
                <ExternalLink className="mr-2 h-4 w-4" />
                Pump.fun
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
