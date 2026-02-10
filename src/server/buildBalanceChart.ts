import "server-only";

import type { TokenTx } from "@/server/fetchTokenTxs";

export type ChartPoint = {
  timestamp: number; // ms
  value: number; // USDC
};

export function buildBalanceChart(
  txs: TokenTx[],
  wallet: string,
): ChartPoint[] {
  let balance = 0;
  const points: ChartPoint[] = [];

  for (const tx of txs) {
    const decimals = Number(tx.tokenDecimal);
    const amount = Number(tx.value) / 10 ** decimals;

    if (tx.to.toLowerCase() === wallet.toLowerCase()) {
      balance += amount;
    }

    if (tx.from.toLowerCase() === wallet.toLowerCase()) {
      balance -= amount;
    }

    points.push({
      timestamp: Number(tx.timeStamp) * 1000,
      value: Number(balance.toFixed(2)),
    });
  }

  return points;
}
