"use server";
import "server-only";

import { buildBalanceChart } from "@/server/buildBalanceChart";
import { env } from "@/server/env";
import { getTimeRange } from "@/server/getTimeRange";
import { getTokenTxs } from "@/server/getTokenTxs";
import type { Duration } from "@/shared/constants";
import { getPublicKey } from "@/shared/helpers/getPublicKey";

export async function getChart(duration: Duration) {
  const wallet = getPublicKey();
  const { from, to } = getTimeRange(duration);

  const txs = await getTokenTxs({
    wallet,
    token: env.TOKEN_CONTRACT,
    startTimeSec: from,
    endTimeSec: to,
  });

  const points = buildBalanceChart(txs, wallet);

  // Keep line for charts with 1 point
  if (points.length === 1) {
    points.unshift({
      timestamp: from * 1000,
      value: 0,
    });
  }

  return points;
}
