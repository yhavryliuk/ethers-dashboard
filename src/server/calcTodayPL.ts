import "server-only";

import { getTokenTxs } from "@/server/getTokenTxs";
import { env } from "@/server/env";

export async function calcTodayPL(wallet: string, currentUSDC: number) {
  const startOfDaySec = Math.floor(Date.now() / 86400000) * 86400;
  const todayTxs = await getTokenTxs({
    wallet,
    token: env.TOKEN_CONTRACT,
    startTimeSec: startOfDaySec,
  });

  let startOfDayBalance = currentUSDC;

  for (const tx of todayTxs) {
    const decimals = Number(tx.tokenDecimal);
    const amount = Number(tx.value) / 10 ** decimals;

    if (tx.to.toLowerCase() === wallet.toLowerCase()) {
      startOfDayBalance -= amount;
    }

    if (tx.from.toLowerCase() === wallet.toLowerCase()) {
      startOfDayBalance += amount;
    }
  }

  const totalPl = currentUSDC - startOfDayBalance;
  const todayPLPercent = startOfDayBalance
    ? (totalPl / startOfDayBalance) * 100
    : 0;

  return {
    todayPL: Number(totalPl.toFixed(2)),
    todayPLPercent: Number(todayPLPercent.toFixed(2)),
  };
}
