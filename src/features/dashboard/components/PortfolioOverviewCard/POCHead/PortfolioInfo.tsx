import type React from "react";
import { formatUSD } from "@/shared/helpers";
import { Money } from "@/shared/ui/base/icons";
import { PortfolioStat } from "./PortfolioStat";

export type PortfolioInfoProps = {
  notUSDCPortfolio: number;
  portfolioWithUSDC: number;
};

export const PortfolioInfo: React.FC<PortfolioInfoProps> = ({
  notUSDCPortfolio,
  portfolioWithUSDC,
}) => {
  return (
    <div className="flex gap-7">
      <PortfolioStat
        label="Portfolio ( Not USDC )"
        value={formatUSD(notUSDCPortfolio)}
      />
      <span className="block border border-app-border my-[8.5px]"></span>
      <PortfolioStat
        label="USDC + Portfolio"
        value={
          <span className="flex items-center gap-1.5">
            <Money />
            {formatUSD(portfolioWithUSDC)}
          </span>
        }
      />
    </div>
  );
};
