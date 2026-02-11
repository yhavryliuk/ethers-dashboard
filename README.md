# Ethers Dashboard

Next.js dashboard that summarizes an Ethereum wallet and visualizes USDC portfolio changes over time. Data comes from Etherscan, an Ethereum RPC provider, and CoinGecko for ETH price.

## Features
- Wallet overview with USDC balance, total portfolio, and today PnL
- Historical balance chart for a selected time range
- Server-side data fetching with cached price requests
- Built-in throttling for Etherscan free plan limits

## Requirements
- Node.js 20+ (recommended)
- pnpm

## Setup
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Create `.env.local` from the example:
   ```bash
   cp .env.example .env.local
   ```
3. Fill in the environment variables.
4. Start the dev server:
   ```bash
   pnpm dev
   ```
5. Open `http://localhost:3000/dashboard`.

## Environment Variables
These are defined in `.env.example` and read on the server.

| Variable | Description |
| --- | --- |
| `PUBLIC_KEY` | Wallet address to display (optional if `PRIVATE_KEY` is provided) |
| `PRIVATE_KEY` | Private key used to derive the wallet address |
| `ETHERSCAN_API_KEY` | Etherscan API key |
| `ETHERSCAN_FREE_PLAN` | Set to `true` to enable request throttling |
| `RPC_URL` | Ethereum mainnet RPC endpoint |
| `TOKEN_CONTRACT` | ERC-20 token contract address (USDC by default) |

## Scripts
- `pnpm dev` - start the dev server
- `pnpm build` - build for production
- `pnpm start` - run the production server
- `pnpm lint` - run Biome checks
- `pnpm format` - format with Biome

## Testing

Run tests: `pnpm test`

## Notes
- The app route is `/dashboard`.
- CoinGecko ETH price is cached for 60 seconds.
- Keep your private key secure and never expose it to the client.
