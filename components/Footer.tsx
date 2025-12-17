import { Twitter, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-800 bg-neutral-950 px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-6 text-center">
        {/* Brand */}
        <div className="text-sm text-neutral-400">
          © 2025 <span className="font-medium text-white">CATSOL</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://pump.fun/coin/3nvvkPxqCyGUfj6mBQANoMyZjT8LTmJ7dbEpa9Rgpump"
            className="flex items-center gap-2 text-neutral-400 hover:text-orange-400 transition"
          >
            <ExternalLink className="h-4 w-4" />
            Pump.fun
          </a>

          <a
            href="https://x.com/catsolana60"
            target="_blank"
            className="flex items-center gap-2 text-neutral-400 hover:text-orange-400 transition"
          >
            <Twitter className="h-4 w-4" />X (Twitter)
          </a>
        </div>

        {/* Disclaimer */}
        <p className="max-w-xl text-xs text-neutral-500 leading-relaxed">
          Built on Solana. No promises, no guarantees. This project is driven by
          creativity, community, and culture.
        </p>
      </div>
    </footer>
  );
}
