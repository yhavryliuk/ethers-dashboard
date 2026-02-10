import "server-only";

import type { TokenTx } from "@/server/fetchTokenTxs";

export function cutoffTxsHistory(txs: TokenTx[], from: number, to: number) {
  return txs.filter(
    (tx) => Number(tx.timeStamp) >= from && Number(tx.timeStamp) <= to,
  );
}
