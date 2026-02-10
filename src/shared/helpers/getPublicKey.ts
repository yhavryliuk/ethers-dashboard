import "server-only";

import { Wallet } from "ethers";
import { env } from "@/server/env";

export const getPublicKey = () =>
  env.PUBLIC_KEY ?? new Wallet(env.PRIVATE_KEY).address;
