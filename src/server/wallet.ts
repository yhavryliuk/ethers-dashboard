import "server-only";

import { Wallet } from "ethers";
import { env } from "@/server/env";
import { rpcProvider } from "./rpcProvider";

export const wallet = new Wallet(env.PRIVATE_KEY, rpcProvider);

export const PUBLIC_KEY = wallet.address;
