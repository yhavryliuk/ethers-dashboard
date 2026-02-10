import "server-only";

import { cutoffTxsHistory } from "@/server/cutoffTxsHistory";
import {
  type FetchTokenTxSProps,
  fetchTokenTxs,
  type TokenTx,
} from "@/server/fetchTokenTxs";

export async function getTokenTxs({
  endTimeSec,
  ...props
}: FetchTokenTxSProps & { endTimeSec?: number }): Promise<TokenTx[]> {
  const txs = await fetchTokenTxs(props);

  if (props.startTimeSec !== undefined) {
    return cutoffTxsHistory(
      txs,
      props.startTimeSec,
      endTimeSec ?? Math.floor(Date.now() / 1000),
    );
  }
  return txs;
}
