import { getChart } from "@/server/getChart";
import type { Duration } from "@/shared/constants";
import { PnLCard } from "./PnLCard";

export async function PnLCardServer({ duration }: { duration: Duration }) {
  const data = await getChart(duration);

  return <PnLCard initialDuration={duration} initialData={data} />;
}
