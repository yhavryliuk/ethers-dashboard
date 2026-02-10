import type React from "react";
import type { POCActualStatsProps } from "@/features/dashboard/components/PortfolioOverviewCard/POCActualStats/POCActualStats";
import type { POCHeadProps } from "@/features/dashboard/components/PortfolioOverviewCard/POCHead/POCHead";
import { Button } from "@/shared/ui/base/buttons";
import { Deposit, IconSize, Withdraw } from "@/shared/ui/base/icons";
import { POCActualStats } from "./POCActualStats";
import { POCHead } from "./POCHead";

export type PortfolioOverviewViewProps = POCHeadProps &
  POCActualStatsProps & {
    onClickDeposit: () => void;
    onClickWithdraw: () => void;
  };

export const PortfolioOverviewView: React.FC<PortfolioOverviewViewProps> = ({
  walletName,
  walletImageSrc,
  balance,
  coinName,
  joinTimestamp,
  notUSDCPortfolio,
  portfolioWithUSDC,
  todayPnL,
  todayPnLPercent,
  onChangeWalletName,
  onChangeWalletImage,
  onClickDeposit,
  onClickWithdraw,
}) => {
  return (
    <div className="flex flex-col gap-4.75">
      <POCHead
        walletName={walletName}
        walletImageSrc={walletImageSrc}
        onChangeWalletImage={onChangeWalletImage}
        onChangeWalletName={onChangeWalletName}
        joinTimestamp={joinTimestamp}
        notUSDCPortfolio={notUSDCPortfolio}
        portfolioWithUSDC={portfolioWithUSDC}
      />
      <POCActualStats
        balance={balance}
        coinName={coinName}
        todayPnL={todayPnL}
        todayPnLPercent={todayPnLPercent}
      />
      <div className="flex gap-2">
        <Button className="grow" onClick={onClickDeposit}>
          <Deposit size={IconSize.Medium} /> Deposit
        </Button>
        <Button className="grow" variant="secondary" onClick={onClickWithdraw}>
          <Withdraw size={IconSize.Medium} /> Withdraw
        </Button>
      </div>
    </div>
  );
};
