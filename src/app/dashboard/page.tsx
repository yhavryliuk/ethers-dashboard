import { Suspense } from "react";
import {
  PnLCardServer,
  PortfolioOverviewServer,
} from "@/features/dashboard/components";
import { DURATIONS } from "@/shared/constants";
import { InfoBlock } from "@/shared/ui";

export default async function Page() {
  const defaultDuration = DURATIONS[1];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-3 w-full justify-center p-3">
      <InfoBlock>
        <Suspense fallback={<div className="h-48">Loading wallet info…</div>}>
          <PortfolioOverviewServer />
        </Suspense>
      </InfoBlock>
      <InfoBlock appearsDelay={0.3}>
        <Suspense fallback={<div className="h-48">Loading chart…</div>}>
          <PnLCardServer duration={defaultDuration} />
        </Suspense>
      </InfoBlock>
    </div>
  );
}
