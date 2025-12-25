import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * GANTI DENGAN PAIR ADDRESS $CATSOL DI DEX
 * contoh: So111...xxxx
 */
const PAIR_ADDRESS = process.env.CATSOL_MINT_ADDRESS!;

export async function GET() {
  try {
    const res = await fetch(
      `https://api.dexscreener.com/latest/dex/pairs/solana/${PAIR_ADDRESS}`,
      { next: { revalidate: 30 } } // cache 30 detik
    );

    if (!res.ok) throw new Error("Failed to fetch market data");

    const json = await res.json();
    const pair = json.pairs?.[0];

    if (!pair) throw new Error("Pair not found");

    return NextResponse.json({
      data: {
        price: Number(pair.priceUsd),
        marketCap: Number(pair.fdv),
        volume24h: Number(pair.volume?.h24 ?? 0),
      },
    });
  } catch (error) {
    console.error("Market API error:", error);
    return NextResponse.json(
      { data: null },
      { status: 500 }
    );
  }
}
