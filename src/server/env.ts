import "server-only";

export const env = {
  PUBLIC_KEY: process.env.PUBLIC_KEY!,
  PRIVATE_KEY: process.env.PRIVATE_KEY!,
  ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY!,
  ETHERSCAN_FREE_PLAN: process.env.ETHERSCAN_FREE_PLAN === "true",
  RPC_URL: process.env.RPC_URL!,
  TOKEN_CONTRACT: process.env.TOKEN_CONTRACT!,
};
