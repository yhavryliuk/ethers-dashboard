import "server-only";

import { etherscan } from "@/server/etherscan";

export async function getStartBlockFromDate(timestampSec: number) {
  return etherscan<string>(
    {
      module: "block",
      action: "getblocknobytime",
      timestamp: timestampSec,
      closest: "before",
    },
    {
      next: {
        revalidate: 60 * 60,
      },
    },
  );
}
