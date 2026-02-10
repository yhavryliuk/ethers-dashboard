import "server-only";

import { etherscan } from "@/server/etherscan";
import { FIRST_TX_TAG, LATEST_BALANCE_TAG } from "@/server/tags";
import { env } from "@/server/env";

export async function getUSDCBalanceAndJoinDate(wallet: string) {
  const balanceStr = await etherscan<string>(
    {
      module: "account",
      action: "tokenbalance",
      contractaddress: env.TOKEN_CONTRACT,
      address: wallet,
      tag: "latest",
    },
    {
      next: {
        revalidate: 60,
        tags: [LATEST_BALANCE_TAG, wallet],
      },
    },
  );

  const usdcBalance = Number(balanceStr) / 10 ** 6; // USDC has 6 decimals

  // Join date — from first transaction
  const firstTx = await etherscan<
    {
      timeStamp: string;
    }[]
  >(
    {
      module: "account",
      action: "tokentx",
      contractaddress: env.TOKEN_CONTRACT,
      address: wallet,
      sort: "asc",
      page: 1,
      offset: 1,
    },
    {
      next: {
        revalidate: 60 * 60,
        tags: [FIRST_TX_TAG, wallet],
      },
    },
  );

  const joinedAt = firstTx.length
    ? Number(firstTx[0].timeStamp) * 1000
    : Date.now();

  return {
    usdcBalance: Number(usdcBalance.toFixed(2)),
    joinedAt,
  };
}
