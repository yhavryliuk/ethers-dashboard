"use server";
import "server-only";

import { buildBalanceChart } from "@/server/buildBalanceChart";
import { getTimeRange } from "@/server/getTimeRange";
import { getTokenTxs } from "@/server/getTokenTxs";
import type { Duration } from "@/shared/constants";
import { env } from "@/server/env";
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

  return buildBalanceChart(txs, wallet);
}
