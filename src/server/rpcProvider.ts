import "server-only";

import { JsonRpcProvider } from "ethers";
import { env } from "@/server/env";

export const rpcProvider = new JsonRpcProvider(env.RPC_URL);
