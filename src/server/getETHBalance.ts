import "server-only";

import { ethers } from "ethers";
import { rpcProvider } from "@/server/rpcProvider";

export async function getETHBalance(wallet: string) {
  const wei = await rpcProvider.getBalance(wallet);
  return Number(ethers.formatEther(wei));
}
