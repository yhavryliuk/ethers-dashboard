import clsx from "clsx";
import type React from "react";
import { formatCurrency, formatUSD } from "@/shared/helpers";
import { ArrowUp, IconSize } from "@/shared/ui/base/icons";

export type POCActualStatsProps = {
  balance: number;
  coinName: string;
  todayPnL: number;
  todayPnLPercent: number;
};

export const POCActualStats: React.FC<POCActualStatsProps> = ({
  balance,
  coinName,
  todayPnL,
  todayPnLPercent,
}) => {
  const isPositiveDelta = !(todayPnL < 0);

  return (
    <div className="flex flex-col gap-1 items-start">
      <div className="text-black text-4xl leading-[1.275em]">
        {formatCurrency(balance)} <span className="uppercase">{coinName}</span>
      </div>
      <div className="flex gap-1 items-center text-app-muted text-sm font-medium">
        <div
          className={
            isPositiveDelta ? "text-app-positive" : "text-app-negative"
          }
        >
          {isPositiveDelta ? "+" : ""}
          {formatUSD(todayPnL)}
        </div>
        <div
          className={clsx(
            "flex items-center gap-0.5",
            isPositiveDelta ? "text-app-positive" : "text-app-negative",
          )}
        >
          <ArrowUp size={IconSize.XXSmall} />
          {todayPnLPercent}%
        </div>
        Today
      </div>
    </div>
  );
};
