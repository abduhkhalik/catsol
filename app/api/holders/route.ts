import { NextResponse } from "next/server";
import { Connection, PublicKey } from "@solana/web3.js";

export const dynamic = "force-dynamic";

// GANTI DENGAN MINT ADDRESS $CATSOL
const MINT_ADDRESS = new PublicKey(
  "PASTE_MINT_ADDRESS_CATSOL_DI_SIN"
);

// RPC (pakai Helius / QuickNode untuk production)
const RPC_ENDPOINT = process.env.SOLANA_RPC_URL!;

export async function GET() {
  try {
    const connection = new Connection(RPC_ENDPOINT);

    const largestAccounts =
      await connection.getTokenLargestAccounts(MINT_ADDRESS);

    const holders = largestAccounts.value.map((item, index) => ({
      rank: index + 1,
      address: item.address.toBase58().slice(0, 4) +
        "..." +
        item.address.toBase58().slice(-4),
      amount: item.uiAmountString ?? "0",
    }));

    return NextResponse.json({ data: holders });
  } catch (error) {
    console.error("Holders API error:", error);
    return NextResponse.json(
      { data: [] },
      { status: 500 }
    );
  }
}
