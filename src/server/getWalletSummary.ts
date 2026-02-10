"use server";
import "server-only";

import { calcTodayPL } from "@/server/calcTodayPL";
import { getUSDCBalanceAndJoinDate } from "@/server/calcUSDCBalanceAndJoinDate";
import { getETHBalance } from "@/server/getETHBalance";
import { getETHPriceUSD } from "@/server/getETHPriceUSD";
import { getPublicKey } from "@/shared/helpers/getPublicKey";

type WalletSummary = {
  joinedAt: number;
  usdcBalance: number;
  portfolioNotUSDC: number;
  totalBalance: number;
  todayPL: number;
  todayPLPercent: number;
};

export async function getWalletSummary(): Promise<WalletSummary> {

  const wallet = getPublicKey().toLowerCase();

  const { usdcBalance, joinedAt } = await getUSDCBalanceAndJoinDate(wallet);

  const { todayPL, todayPLPercent } = await calcTodayPL(wallet, usdcBalance);

  const ethBalance = await getETHBalance(wallet);
  const ethPrice = await getETHPriceUSD();

  const portfolioNotUSDC = Number((ethBalance * ethPrice).toFixed(2));

  const totalBalance = Number((usdcBalance + portfolioNotUSDC).toFixed(2));

  return {
    joinedAt,
    usdcBalance,
    portfolioNotUSDC,
    totalBalance,
    todayPL,
    todayPLPercent,
  };
}
