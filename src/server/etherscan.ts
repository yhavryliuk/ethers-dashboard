import "server-only";
import { env } from "@/server/env";

const BASE_URL = "https://api.etherscan.io/v2/api";

const REQUESTS_PER_SECOND = 2;
const WINDOW_MS = 1000;

let timestamps: number[] = [];

// FREE API ALLOWS 3 response per second
async function throttle() {
  if (!env.ETHERSCAN_FREE_PLAN) {
    return;
  }
  const now = Date.now();
  timestamps.push(now);

  timestamps = timestamps.filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= REQUESTS_PER_SECOND) {
    const waitTime = WINDOW_MS - (now - timestamps[timestamps.length - 1]); // Etherscan limitation specific throttle by last overflow request
    await new Promise((res) => setTimeout(res, waitTime));
  }
}

export async function etherscan<T>(
  params: Record<string, string | number>,
  options?: RequestInit,
): Promise<T> {
  await throttle();

  const url = new URL(BASE_URL);

  Object.entries({
    chainid: "1",
    ...params,
    apikey: env.ETHERSCAN_API_KEY,
  }).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });

  const res = await fetch(url.toString(), options);

  const data = await res.json();

  if (data.status === "0" && data.message === "No transactions found") {
    return data.result;
  }

  if (data.status !== "1") {
    throw new Error(data.result || "Etherscan error");
  }

  return data.result;
}
