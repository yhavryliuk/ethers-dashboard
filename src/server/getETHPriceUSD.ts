import "server-only";

export async function getETHPriceUSD() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
    { next: { revalidate: 60 } },
  );

  const data = await res.json();
  return data.ethereum.usd as number;
}
