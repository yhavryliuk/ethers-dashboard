import "server-only";

import { etherscan } from "@/server/etherscan";
import { getStartBlockFromDate } from "@/server/getStartBlockFromDate";
import { TXS_TAG } from "@/server/tags";

export type TokenTx = {
  timeStamp: string;
  from: string;
  to: string;
  value: string;
  tokenDecimal: string;
};

export type FetchTokenTxSProps = {
  wallet: string;
  token: string;
  startTimeSec?: number;
};

export async function fetchTokenTxs({
  wallet,
  token,
  startTimeSec = 0,
}: FetchTokenTxSProps) {
  const startblock =
    startTimeSec > 0 ? await getStartBlockFromDate(startTimeSec) : "0";
  return await etherscan<TokenTx[]>(
    {
      module: "account",
      action: "tokentx",
      address: wallet,
      contractaddress: token,
      sort: "asc",
      startblock,
    },
    {
      next: {
        revalidate: 60,
        tags: [TXS_TAG, wallet],
      },
    },
  );
}
