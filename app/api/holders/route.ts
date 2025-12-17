import { NextResponse } from "next/server";
import { Connection, PublicKey } from "@solana/web3.js";

export const dynamic = "force-dynamic";

type Holder = {
  rank: number;
  address: string;
  amount: string;
};

export async function GET() {
  try {
    const rpcUrl = process.env.HELIUS_RPC_URL;
    const mintAddress = process.env.CATSOL_MINT_ADDRESS;

    if (!rpcUrl || !mintAddress) {
      throw new Error("Missing env configuration");
    }

    const connection = new Connection(rpcUrl, {
      commitment: "confirmed",
    });

    const mint = new PublicKey(mintAddress);

    /**
     * Helius-backed RPC call
     * Fast & reliable for leaderboard
     */
    const largestAccounts =
      await connection.getTokenLargestAccounts(mint);

    const holders: Holder[] = largestAccounts.value.map(
      (item, index) => ({
        rank: index + 1,
        address: shortenAddress(item.address.toBase58()),
        amount: item.uiAmountString ?? "0",
      })
    );

    return NextResponse.json({ data: holders });
  } catch (error) {
    console.error("Helius holders API error:", error);

    return NextResponse.json(
      { data: [] },
      { status: 500 }
    );
  }
}

/* ---------- Helpers ---------- */
function shortenAddress(address: string) {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}
