import { getWalletSummary } from "@/server/getWalletSummary";
import { PortfolioOverviewCard } from "./PortfolioOverviewCard";

export async function PortfolioOverviewServer() {
  const {
    joinedAt,
    usdcBalance,
    portfolioNotUSDC,
    totalBalance,
    todayPLPercent,
    todayPL,
  } = await getWalletSummary();

  return (
    <PortfolioOverviewCard
      coinName="USDC"
      balance={usdcBalance}
      joinTimestamp={joinedAt}
      notUSDCPortfolio={portfolioNotUSDC}
      portfolioWithUSDC={totalBalance}
      todayPnL={todayPL}
      todayPnLPercent={todayPLPercent}
    />
  );
}
